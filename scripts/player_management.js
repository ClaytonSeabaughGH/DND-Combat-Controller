// Function to fetch players from backend and display them
async function fetchPlayers() {
    const response = await fetch('/players');
    const players = await response.json();

    const playerList = document.getElementById('playerList');
    playerList.innerHTML = ''; //Clear the existing list

    
}