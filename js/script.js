// Select the container and button elements
const container = document.querySelector('.joke'); // Ensure the div has id="joke"
const button = document.querySelector('button'); // Select the button element

// Add an event listener to the button for a click event
button.addEventListener('click', () => {
	fetch('https://api.api-ninjas.com/v1/jokes', {
		method: 'GET',
		headers: {
			'X-Api-Key': JOKE_API_KEY, // Replace with your actual API key
		},
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json();
		})
		.then((data) => {
			const jokeText = data[0].joke; // Extract the joke from the response
			container.textContent = ''; // Clear previous content
			const p = document.createElement('p'); // Create a new <p> element
			p.textContent = jokeText; // Set the joke text as the content
			container.appendChild(p); // Append the <p> tag to the container
		})
		.catch((error) => {
			console.error('There was a problem with the fetch operation:', error);
		});
});
