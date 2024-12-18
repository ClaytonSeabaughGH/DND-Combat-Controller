 // Manual input iniiative
 document.getElementById('addCharacterBtn').addEventListener('click', function() {
    const name = prompt('Enter character name:');
    const initiative = prompt('Enter initiative:');

    // Ensure the entered initiative is a number
    const initiativeValue = parseInt(initiative);

    if (name && !isNaN(initiativeValue)) {
        const newCharacter = document.createElement('li');
        newCharacter.textContent = `${name} - Initiative: ${initiativeValue}`;

        // Add the new character to the list
        const initiativeList = document.getElementById('initiativeList');
        initiativeList.appendChild(newCharacter);

        // Sort the list based on initiative value in descending order
        const sortedList = Array.from(initiativeList.children)
            .sort((a, b) => {
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

        // Add a new monster to the monster list
        document.getElementById('addMonsterBtn').addEventListener('click', function() {
            const name = prompt('Enter monster name:');
            const hp = prompt('Enter monster HP (current/total):');
            if (name && hp) {
                const newMonster = document.createElement('li');
                newMonster.textContent = `${name} - HP: ${hp}`;
                document.getElementById('monsterList').appendChild(newMonster);
            }
        });

        // Add a new player
        document.getElementById('addPlayerBtn').addEventListener('click', function() {
            const name = prompt('Enter player name:');
            const hp = prompt('Enter player HP (current/total):');
            if (name && hp) {
                const newPlayer = document.createElement('li');
                newPlayer.innerHTML = `
                    ${name} - HP: <span class="hp">${hp.split('/')[0]}</span>/${hp.split('/')[1]}
                    <input type="number" class="hp-input" placeholder="Enter +/- value">
                    <button class="apply-hp">Apply</button>
                `;
                document.getElementById('playerList').appendChild(newPlayer);
            }
        });

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

        // Add a new action to the action list
        document.getElementById('addActionBtn').addEventListener('click', function() {
            const action = prompt('Enter action taken:');
            if (action) {
                const newAction = document.createElement('li');
                newAction.textContent = action;
                document.getElementById('actionList').appendChild(newAction);
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
