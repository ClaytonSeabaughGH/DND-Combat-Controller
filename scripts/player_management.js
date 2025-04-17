// Function to fetch players from backend and display them
async function fetchPlayers() {
    const response = await fetch('/players');
    const players = await response.json();

    const playerList = document.getElementById('playerList');
    playerList.innerHTML = ''; //Clear the existing list

    players.forEach(player => {
        const playerItem = document.createElement('li');
        playerItem.innerHTML = `
      ${player.name} - HP: <span class="hp">${player.hp}</span>/${player.max_hp}
      <button class="increase-hp" data-id="${player.id}">+</button>
      <button class="decrease-hp" data-id="${player.id}">-</button>
      <input type="number" class="hp-input" data-id="${player.id}" placeholder="Enter +/- value">
      <button class="apply-hp" data-id="${player.id}">Apply</button>
      <button class="remove-player" data-id="${player.id}">Remove</button>
    `;
    playerList.appendChild(playerItem);
    });
}

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

// Event listener for the apply HP button
document.getElementById('playerList').addEventListener('click', async (event) => {
    if (event.target.classList.contains('apply-hp')) {
        const playerId = event.target.getAttribute('data-id');
        const hpInput = document.querySelector('.hp-input[data-id="${playerID}"]');
        const newHp = parseInt(hpInput.value);

        if (!isNaN(newHp)) {
            await updatePlayerHp(playerId, newHp);
        }
    }
});

// Initial fetch of players
fetchPlayers();