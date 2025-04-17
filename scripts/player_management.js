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