/* styles.css */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
}

/* Header Styling */
header {
    background: linear-gradient(135deg, #4a90e2, #1c3d69);
    color: #fff;
    padding: 20px;
    text-align: center;
    border-bottom: 5px solid #333;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-size: 2rem;
    letter-spacing: 1px;
}

/* Main Content Area */
main {
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    margin: 20px;
    border-radius: 10px;
}

/* Tracker Layout */
.tracker {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
}

/* Section Styling */
.section {
    background-color: #ffffff;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out, transform 0.3s ease;
}

.section:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
}

.section h2 {
    margin-top: 0;
    font-size: 1.6rem;
    font-weight: 600;
    color: #4a90e2;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* List Styling */
.initiative-list, .monster-list, #playerList, #actionList {
    list-style-type: none;
    padding: 0;
}

.initiative-list li, .monster-list li, #playerList li, #actionList li {
    background-color: #f9f9f9;
    padding: 12px;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.initiative-list li:hover, .monster-list li:hover, #playerList li:hover, #actionList li:hover {
    background-color: #e4e4e4;
    transform: translateX(5px);
}

/* Button Styling */
button {
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease, transform 0.2s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

button:hover {
    background-color: #0056b3;
    transform: scale(1.05);
}

button:active {
    transform: scale(1);
}

/* Inputs for HP */
input[type="number"].hp-input {
    padding: 5px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 80px;
    margin-right: 10px;
    transition: border-color 0.3s ease;
}

input[type="number"].hp-input:focus {
    border-color: #007BFF;
    outline: none;
}

/* Action List Styling */
#actionList {
    margin-top: 20px;
}

/* Add some extra styles for character HP adjustments */
button.increase-hp, button.decrease-hp {
    background-color: #28a745;
    color: white;
    padding: 5px 10px;
    border-radius: 50%;
    font-size: 1.2rem;
    transition: background-color 0.2s ease, transform 0.2s ease;
}

button.increase-hp:hover {
    background-color: #218838;
}

button.decrease-hp:hover {
    background-color: #c82333;
}

button.increase-hp:active, button.decrease-hp:active {
    transform: scale(0.95);
}

