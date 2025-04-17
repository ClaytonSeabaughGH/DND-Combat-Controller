// Manual input initiative
document.getElementById('addCharacterBtn').addEventListener('click', function() {
    const name = prompt('Enter character name:');
    const initiative = prompt('Enter initiative:');

    // Ensure the entered initiative is a number
    const initiativeValue = parseInt(initiative);

    if (name && !isNaN(initiativeValue)) {
        const newCharacter = document.createElement('li');
        newCharacter.innerHTML = `
            ${name} - Initiative: ${initiativeValue}
            <button class="remove-character">Remove</button>
        `;

        // Add the new character to the list
        const initiativeList = document.getElementById('initiativeList');
        initiativeList.appendChild(newCharacter);

        // Sort the list based on initiative value in descending order
        const sortedList = Array.from(initiativeList.children).sort((a, b) => {
            const aValue = parseInt(a.textContent.split(': ')[1]);
            const bValue = parseInt(b.textContent.split(': ')[1]);
            return bValue - aValue; // Descending order
        });

        // Clear the list and re-append the sorted items
        initiativeList.innerHTML = '';
        sortedList.forEach(item => initiativeList.appendChild(item));
    } else {
        alert('Please enter a valid initiative value.');
    }
});

    // Remove character from the initiative list
    document.getElementById('initiativeList').addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-character')) {
            const listItem = event.target.parentElement;
            listItem.remove();
    }
});
let currentTurnIndex = -1; // Initialize to -1 (no turn yet)

function updateCurrentTurn() {
    const initiativeList = document.querySelectorAll('#initiativeList li');
    const currentTurnDisplay = document.getElementById('currentTurn');

    if (initiativeList.length === 0) {
        currentTurnDisplay.textContent = 'No characters in the initiative list yet.';
        currentTurnIndex = -1; // Reset index if the list is empty
        return;
    }

    currentTurnIndex = (currentTurnIndex + 1) % initiativeList.length; // Loop back to start
    const currentCharacter = initiativeList[currentTurnIndex];
    currentTurnDisplay.textContent = `Current Turn: ${currentCharacter.textContent.split(' - ')[0]}`;
}

document.getElementById('nextTurnBtn').addEventListener('click', updateCurrentTurn);

// Automatically update the current turn whenever the initiative list is modified
document.getElementById('initiativeList').addEventListener('DOMSubtreeModified', function () {
    const initiativeList = document.querySelectorAll('#initiativeList li');
    if (initiativeList.length > 0 && currentTurnIndex === -1) {
        currentTurnIndex = 0; // Start at the first character
        updateCurrentTurn();
    }
});

//--------------------------------------------------------------------------------------------//
// Add a new monster to the monster list
document.getElementById('addMonsterBtn').addEventListener('click', function () {
    const name = prompt('Enter monster name:');
    const hp = prompt('Enter monster HP (current/total):');
    if (name && hp) {
        const newMonster = document.createElement('li');
        newMonster.innerHTML = `
            ${name} - HP: <span class="hp">${hp.split('/')[0]}</span>/${hp.split('/')[1]}
            <button class="increase-hp">+</button>
            <button class="decrease-hp">-</button>
            <input type="number" class="hp-input" placeholder="Enter +/- value">
            <button class="apply-hp">Apply</button>
            <button class="remove-monster">Remove</button>
        `;
        document.getElementById('monsterList').appendChild(newMonster);
    }
});

// Remove a monster from the monster list
document.getElementById('monsterList').addEventListener('click', function (event) {
    if (event.target.classList.contains('remove-monster')) {
        const listItem = event.target.parentElement;
        listItem.remove();
    }
});

//------------------------------------------------------------------------------------------//
        // Add a new player
document.getElementById('addPlayerBtn').addEventListener('click', function() {
    const name = prompt('Enter player name:');
    const hp = prompt('Enter player HP (current/total):');
    if (name && hp) {
        const newPlayer = document.createElement('li');
        newPlayer.innerHTML = `
            ${name} - HP: <span class="hp">${hp.split('/')[0]}</span>/${hp.split('/')[1]}
            <button class="increase-hp">+</button>
            <button class="decrease-hp">-</button>
            <input type="number" class="hp-input" placeholder="Enter +/- value">
            <button class="apply-hp">Apply</button>
            <div class="death-saves">
                <span>Death Saves:</span>
                <div class="saves">
                    <label>Success:</label>
                    <input type="checkbox" class="death-save-success">
                    <input type="checkbox" class="death-save-success">
                    <input type="checkbox" class="death-save-success">
                </div>
                <div class="fails">
                    <label>Failure:</label>
                    <input type="checkbox" class="death-save-fail">
                    <input type="checkbox" class="death-save-fail">
                    <input type="checkbox" class="death-save-fail">
                </div>
            </div>
            <button class="remove-player">Remove</button>
        `;
        document.getElementById('playerList').appendChild(newPlayer);
    }
});

// Remove a player from the monster list
document.getElementById('playerList').addEventListener('click', function (event) {
    if (event.target.classList.contains('remove-player')) {
        const listItem = event.target.parentElement;
        listItem.remove();
    }
});

//-----------------------------------------------------------------------------------------//
        // Delegate events for HP application
        document.getElementById('playerList').addEventListener('click', function(event) {
            const target = event.target;

            // Handle Apply HP button
            if (target.classList.contains('apply-hp')) {
                const li = target.closest('li');
                const hpSpan = li.querySelector('.hp');
                const input = li.querySelector('.hp-input');
                const change = parseInt(input.value);

                if (!isNaN(change)) {
                    const newHp = Math.max(0, parseInt(hpSpan.textContent) + change);
                    hpSpan.textContent = newHp;
                    input.value = ''; // Clear input after applying
                }
            }
});

        // Delegate HP increase and decrease functionality
        document.getElementById('playerList').addEventListener('click', function(event) {
            if (event.target.classList.contains('increase-hp')) {
                const hpSpan = event.target.parentElement.querySelector('.hp');
                hpSpan.textContent = parseInt(hpSpan.textContent) + 1;
            } else if (event.target.classList.contains('decrease-hp')) {
                const hpSpan = event.target.parentElement.querySelector('.hp');
                hpSpan.textContent = Math.max(0, parseInt(hpSpan.textContent) - 1);
            }
        });

        // Delegate HP increase and decrease functionality for monsters
        document.getElementById('monsterList').addEventListener('click', function(event) {
            if (event.target.classList.contains('increase-hp')) {
                const hpSpan = event.target.parentElement.querySelector('.hp');
                hpSpan.textContent = parseInt(hpSpan.textContent) + 1;
            } else if (event.target.classList.contains('decrease-hp')) {
                const hpSpan = event.target.parentElement.querySelector('.hp');
                hpSpan.textContent = Math.max(0, parseInt(hpSpan.textContent) - 1);
            }
        });

            // Death Saving Throw Success/Death
        document.getElementById('playerList').addEventListener('change', function(event) {
            if (event.target.classList.contains('death-save-success') || event.target.classList.contains('death-save-fail')) {
                const li = event.target.closest('li');
                const successChecks = li.querySelectorAll('.death-save-success:checked').length;
                const failChecks = li.querySelectorAll('.death-save-fail:checked').length;

            if (successChecks === 3) {
            alert(`${li.textContent.split(' - ')[0]} has stabilized!`);
             } else if (failChecks === 3) {
                alert(`${li.textContent.split(' - ')[0]} has died!`);
        }
    }
});
//---------------------------------------------------------------------------------------//
         // Add a new action to the action list
         document.getElementById('addActionBtn').addEventListener('click', function() {
            const action = prompt('Enter action taken:');
            if (action) {
                const newAction = document.createElement('li');
                newAction.textContent = action;
                document.getElementById('actionList').appendChild(newAction);
            }
        });