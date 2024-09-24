const renderFood = async () => {
  // Get the requested food ID from the URL
  const requestedID = parseInt(window.location.href.split('/').pop());
  
  // Fetch the food data from the server
  const response = await fetch('/items'); 
  const data = await response.json();

  // Find the food item with the requested ID
  const foodContent = document.getElementById('item-content');
  let food = data.find(item => item.id === requestedID);

  if (food) {
      // Populate the page with the food details
      document.getElementById('image').src = food.image;
      document.getElementById('name').textContent = food.title; 
      document.getElementById('calories').textContent = 'Calories: ' + food.calories;
      
      // Key nutrients
      document.getElementById('keyNutrients').textContent = `Nutrients: Vitamin C: ${food.keyNutrients.vitaminC}, Fiber: ${food.keyNutrients.fiber}, Potassium: ${food.keyNutrients.potassium}`;
      
      // Update the page title dynamically
      document.title = `Nutritional Foods - ${food.title}`;
  } else {
      // If no food is found, display a message
      const message = document.createElement('h2');
      message.textContent = 'No Food Available 😞';
      foodContent.appendChild(message);
  }
}

// Call the function to render the food details
renderFood();
