// Fetch tarot card data from JSON file
document.getElementById('loading').style.display = 'block'; // Show loading message

fetch('tarotData.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(tarotData => {
    document.getElementById('loading').style.display = 'none'; // Hide loading message
    const drawCardButton = document.getElementById('draw-card');
    const cardDisplay = document.getElementById('card-display');
    const descriptionDisplay = document.getElementById('description-display');

    drawCardButton.addEventListener('click', () => {
      const randomCard = tarotData[Math.floor(Math.random() * tarotData.length)];
      cardDisplay.innerHTML = `<img src="images/${randomCard.image}" alt="${randomCard.name}" />`;
      descriptionDisplay.textContent = `${randomCard.name}: ${randomCard.description}`;
    });
  })
  .catch(error => {
    console.error('Error fetching tarot data:', error);
    const descriptionDisplay = document.getElementById('description-display');
    descriptionDisplay.textContent = 'Failed to load tarot cards. Please try again later.';
    document.getElementById('loading').style.display = 'none'; // Hide loading message
  });