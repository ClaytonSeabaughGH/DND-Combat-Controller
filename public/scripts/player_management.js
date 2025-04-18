// Function to fetch players from backend and display them
async function fetchPlayers() {
    const response = await fetch('/players');
    const players = await response.json();

    const playerList = document.getElementById('playerList');
    playerList.innerHTML = ''; //Clear the existing list

    players.forEach(player => {
        const playerItem = document.createElement('li');
        playerItem.innerHTML = `
      ${player.name} - HP: <span class="hp">${player.hp}</span>/${player.hp_total}
      <button class="increase-hp" data-id="${player.id}">+</button>
      <button class="decrease-hp" data-id="${player.id}">-</button>
      <input type="number" class="hp-input" data-id="${player.id}" placeholder="Enter +/- value">
      <button class="apply-hp" data-id="${player.id}">Apply</button>
      <button class="remove-player" data-id="${player.id}">Remove</button>
    `;
    playerList.appendChild(playerItem);
    });
}

// Event listener for the apply HP button
document.getElementById('playerList').addEventListener('click', async (event) => {
    if (event.target.classList.contains('apply-hp')) {
        const playerId = event.target.getAttribute('data-id');
        const playerItem = event.target.closest('li');
        const hpSpan = playerItem.querySelector('.hp'); // The current HP span
        const hpInput = playerItem.querySelector(`.hp-input[data-id="${playerId}"]`); // Input field
        const change = parseInt(hpInput.value); // The value entered by the user

        if (!isNaN(change)) {
            const currentHp = parseInt(hpSpan.textContent); // Get the current HP value
            const newHp = Math.max(0, currentHp + change); // Add or subtract the HP change, ensuring it doesn't go below 0
            hpSpan.textContent = newHp; // Update the displayed HP

            // Call the function to update the player's HP in the backend
            await updatePlayerHp(playerId, newHp);
        }

        // Clear the input after applying the change
        hpInput.value = '';
    }
});

// Function to update a player's HP via backend
async function updatePlayerHp(playerId, newHp){
    const response = await fetch('/update-player', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: playerId, newHp }),
    });

    const result = await response.json();
    if (result.message) {
        fetchPlayers(); // Reload the player list after updating
    }
}

// Initial fetch of players
fetchPlayers();