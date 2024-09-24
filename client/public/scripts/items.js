const renderFoods = async() => {
    const response = await fetch('/items');
    const data = await response.json();

    const mainContent = document.getElementById('main-content');
    mainContent.classList.add('grid');

    if (data) {
        data.map(item => {
            const card = document.createElement('div');
            card.classList.add('card');

            const topContainer = document.createElement('div');
            topContainer.classList.add('top-container');

            const bottomContainer = document.createElement('div');
            bottomContainer.classList.add('bottom-container');

            // Set the background image for the top container
            topContainer.style.backgroundImage = `url(${item.image})`;
            topContainer.style.height = '250px';

            // Create and append the food name
            const name = document.createElement('h3');
            name.textContent = item.title; // Use "title" for food name
            bottomContainer.appendChild(name);

            // Create and append calories information
            const calories = document.createElement('p');
            calories.textContent = 'Calories: ' + item.calories;
            bottomContainer.appendChild(calories);

            // Create and append key nutrients information
            const nutrients = document.createElement('p');
            nutrients.textContent = `Nutrients: Vitamin C: ${item.keyNutrients.vitaminC}, Fiber: ${item.keyNutrients.fiber}, Potassium: ${item.keyNutrients.potassium}`;
            bottomContainer.appendChild(nutrients);

            // Create and append the 'Read More' link
            const link = document.createElement('a');
            link.textContent = 'Read More >';
            link.setAttribute('role', 'button');
            link.href = `/items/${item.id}`; // Adjust link to food ID
            bottomContainer.appendChild(link);

            // Append top and bottom containers to the card
            card.appendChild(topContainer);
            card.appendChild(bottomContainer);

            // Append the card to the main content
            mainContent.appendChild(card);
        });
    } else {
        const message = document.createElement('h2');
        message.textContent = 'No Foods Available 😞 ';
        mainContent.appendChild(message);
    }
};

// Check if the requested URL is valid
const requestedUrl = window.location.href.split('/').pop();

if (requestedUrl) {
    window.location.href = '../404.html'; // Redirect to 404 if URL is invalid
} else {
    renderFoods(); // Render food data if the URL is valid
}
