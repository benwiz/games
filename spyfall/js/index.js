let PLAYER = null;
let CONFIRMED_COLOR = false;
let SEED = -1;
let PLAYER_COUNT = 0;
let PLAYER_ID_MAP = {"a": 0,
                     "b": 1,
                     "c": 2,
                     "d": 3,
                     "e": 4,
                     "f": 5,
                     "g": 6,
                     "h": 7};

const validation = (options) => {
    options.forEach((option) => {
        if (option.roles.length < 7) {
            console.log(`WARNING: Location ${option.location} has only ${option.roles.length} roles.`);
            alert(`WARNING: Location ${option.location} has only ${option.roles.length} roles.`);
        }
    });
};

const shuffle = (array, seed) => {
    array = array.slice();
    let currentIndex = array.length
    let temporaryValue;
    let randomIndex;
    seed = seed || 1;

    let random = () => {
        var x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    };

    // While there remain elements to shuffle
    while (0 !== currentIndex) {
        // Pick a reboarding element
        randomIndex = Math.floor(random() * currentIndex);
        currentIndex -= 1;

        // Swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};

const locationLabel = document.querySelector('#location-label');
const roleLabel = document.querySelector('#role-label');

const selectLocationAndRole = () => {
    const seed = SEED * PLAYER_COUNT;
    const pack = shuffle(OPTIONS.slice(), seed)[0];
    const location = pack.location;
    const index = PLAYER_ID_MAP[PLAYER];
    let roles = shuffle(pack.roles.slice(), seed).slice(0, PLAYER_COUNT - 1); // randomly keep PLAYER_COUNT - 1 roles (max 7)
    roles.push('Spy'); // append spy
    roles = shuffle(roles, seed); // shuffle again to mix in spy
    const role = roles[index];
    if (role === 'Spy') {
        locationLabel.innerHTML = '???';
    } else {
        locationLabel.innerHTML = location;
    }
    roleLabel.innerHTML = role;
};

const populateLocationsList = (options) => {
    const locationsList = document.querySelector('#locations-list');
    const locations = options.map(option => option.location).sort();
    const half = Math.ceil(locations.length / 2);
    const locations1 = locations.slice(0, half);
    const locations2 = locations.slice(half);
    const locationsTable = document.createElement('table');
    const tableBody = document.createElement('tbody');
    locationsTable.appendChild(tableBody);
    locationsList.appendChild(locationsTable);
    const ls = [locations1, locations2];
    for (let i = 0; i < locations1.length; i += 1) {
        const row = document.createElement('tr');
        tableBody.appendChild(row);

        for (var l of ls) {
            const loc = l[i];
            if (loc) {
                const cell = document.createElement('td');
                cell.innerHTML = loc;
                cell.classList.add('location-item');
                row.appendChild(cell);
            }
        }


    };
};

const backButton = document.querySelector('#back-button');
const rulesButton = document.querySelector('#rules-button');
const numPlayers = document.querySelector('#num-players');
const colorPicker = document.querySelector('#color-picker');
const confirmColors = document.querySelector('#confirm-colors');
const confirmColorItem = confirmColors.querySelector('.color-item-confirm');
const game = document.querySelector('#game');
const playerColor = game.querySelector('#player-color');

// Run a render cycle
const render = () => {
    if (PLAYER_COUNT && PLAYER && !CONFIRMED_COLOR) {
        // Second Stage
        backButton.classList.remove('hidden');
        rulesButton.classList.remove('hidden');
        numPlayers.classList.add('hidden');
        colorPicker.classList.add('hidden');
        confirmColors.classList.remove('hidden');
        confirmColorItem.className = 'color-item-confirm'; // this is breakable but gets the job done
        confirmColorItem.classList.add(PLAYER);
        game.classList.add('hidden');
        playerColor.className = "";
        playerColor.classList.add(PLAYER);
        document.querySelector('#error').innerHTML = "";
    } else if (PLAYER_COUNT && !PLAYER && !CONFIRMED_COLOR) {
        // First Stage
        backButton.classList.add('hidden');
        rulesButton.classList.remove('hidden');
        numPlayers.classList.remove('hidden');
        colorPicker.classList.remove('hidden');
        confirmColors.classList.add('hidden');
        game.classList.add('hidden');
        document.querySelector('#error').innerHTML = "";

        // Clunky PLAYER_COUNT solution. TODO make this more elegant.
        switch (PLAYER_COUNT) {
        case 0:
            colorPicker.querySelector('.a').classList.add('hidden');
            colorPicker.querySelector('.b').classList.add('hidden');
            colorPicker.querySelector('.c').classList.add('hidden');
            colorPicker.querySelector('.d').classList.add('hidden');
            colorPicker.querySelector('.e').classList.add('hidden');
            colorPicker.querySelector('.f').classList.add('hidden');
            colorPicker.querySelector('.g').classList.add('hidden');
            colorPicker.querySelector('.h').classList.add('hidden');
            break;
        case 1:
            colorPicker.querySelector('.a').classList.remove('hidden');
            colorPicker.querySelector('.b').classList.add('hidden');
            colorPicker.querySelector('.c').classList.add('hidden');
            colorPicker.querySelector('.d').classList.add('hidden');
            colorPicker.querySelector('.e').classList.add('hidden');
            colorPicker.querySelector('.f').classList.add('hidden');
            colorPicker.querySelector('.g').classList.add('hidden');
            colorPicker.querySelector('.h').classList.add('hidden');
            break;
        case 2:
            colorPicker.querySelector('.a').classList.remove('hidden');
            colorPicker.querySelector('.b').classList.remove('hidden');
            colorPicker.querySelector('.c').classList.add('hidden');
            colorPicker.querySelector('.d').classList.add('hidden');
            colorPicker.querySelector('.e').classList.add('hidden');
            colorPicker.querySelector('.f').classList.add('hidden');
            colorPicker.querySelector('.g').classList.add('hidden');
            colorPicker.querySelector('.h').classList.add('hidden');
            break;
        case 3:
            colorPicker.querySelector('.a').classList.remove('hidden');
            colorPicker.querySelector('.b').classList.remove('hidden');
            colorPicker.querySelector('.c').classList.remove('hidden');
            colorPicker.querySelector('.d').classList.add('hidden');
            colorPicker.querySelector('.e').classList.add('hidden');
            colorPicker.querySelector('.f').classList.add('hidden');
            colorPicker.querySelector('.g').classList.add('hidden');
            colorPicker.querySelector('.h').classList.add('hidden');
            break;
        case 4:
            colorPicker.querySelector('.a').classList.remove('hidden');
            colorPicker.querySelector('.b').classList.remove('hidden');
            colorPicker.querySelector('.c').classList.remove('hidden');
            colorPicker.querySelector('.d').classList.remove('hidden');
            colorPicker.querySelector('.e').classList.add('hidden');
            colorPicker.querySelector('.f').classList.add('hidden');
            colorPicker.querySelector('.g').classList.add('hidden');
            colorPicker.querySelector('.h').classList.add('hidden');
            break;
        case 5:
            colorPicker.querySelector('.a').classList.remove('hidden');
            colorPicker.querySelector('.b').classList.remove('hidden');
            colorPicker.querySelector('.c').classList.remove('hidden');
            colorPicker.querySelector('.d').classList.remove('hidden');
            colorPicker.querySelector('.e').classList.remove('hidden');
            colorPicker.querySelector('.f').classList.add('hidden');
            colorPicker.querySelector('.g').classList.add('hidden');
            colorPicker.querySelector('.h').classList.add('hidden');
            break;
        case 6:
            colorPicker.querySelector('.a').classList.remove('hidden');
            colorPicker.querySelector('.b').classList.remove('hidden');
            colorPicker.querySelector('.c').classList.remove('hidden');
            colorPicker.querySelector('.d').classList.remove('hidden');
            colorPicker.querySelector('.e').classList.remove('hidden');
            colorPicker.querySelector('.f').classList.remove('hidden');
            colorPicker.querySelector('.g').classList.add('hidden');
            colorPicker.querySelector('.h').classList.add('hidden');
            break;
        case 7:
            colorPicker.querySelector('.a').classList.remove('hidden');
            colorPicker.querySelector('.b').classList.remove('hidden');
            colorPicker.querySelector('.c').classList.remove('hidden');
            colorPicker.querySelector('.d').classList.remove('hidden');
            colorPicker.querySelector('.e').classList.remove('hidden');
            colorPicker.querySelector('.f').classList.remove('hidden');
            colorPicker.querySelector('.g').classList.remove('hidden');
            colorPicker.querySelector('.h').classList.add('hidden');
            break;
        case 8:
            colorPicker.querySelector('.a').classList.remove('hidden');
            colorPicker.querySelector('.b').classList.remove('hidden');
            colorPicker.querySelector('.c').classList.remove('hidden');
            colorPicker.querySelector('.d').classList.remove('hidden');
            colorPicker.querySelector('.e').classList.remove('hidden');
            colorPicker.querySelector('.f').classList.remove('hidden');
            colorPicker.querySelector('.g').classList.remove('hidden');
            colorPicker.querySelector('.h').classList.remove('hidden');
            break;
        default:
            colorPicker.querySelector('.a').classList.remove('hidden');
            colorPicker.querySelector('.b').classList.remove('hidden');
            colorPicker.querySelector('.c').classList.remove('hidden');
            colorPicker.querySelector('.d').classList.remove('hidden');
            colorPicker.querySelector('.e').classList.remove('hidden');
            colorPicker.querySelector('.f').classList.remove('hidden');
            colorPicker.querySelector('.g').classList.remove('hidden');
            colorPicker.querySelector('.h').classList.remove('hidden');
        }
    } else if (PLAYER_COUNT && PLAYER && CONFIRMED_COLOR) {
        // Stage Three
        backButton.classList.remove('hidden');
        rulesButton.classList.add('hidden');
        numPlayers.classList.add('hidden');
        colorPicker.classList.add('hidden');
        confirmColors.classList.add('hidden');
        game.classList.remove('hidden');
        playerColor.classList.add(PLAYER);
        selectLocationAndRole();
        document.querySelector('#error').innerHTML = "";
    } else {
        const s = `Unknown state: PLAYER_COUNT: ${PLAYER_COUNT}; PLAYER: ${PLAYER}; CONFIRMED_COLOR: ${CONFIRMED_COLOR}`;
        console.log(s);
        document.querySelector('#error').innerHTML = s;
    }
};

// Validate options
validation(OPTIONS);

// Back button
document.querySelector('#back-button').addEventListener('click', (e) => {
    // purposely not modifying seed or player count
    PLAYER = null;
    CONFIRMED_COLOR = false;
    render();
});

// Populate locations list
populateLocationsList(OPTIONS);// Color selector click handlers
document.querySelectorAll('.color-item').forEach((elem) => {
    elem.addEventListener('click', (e) => {
        const player = e.target.className.split(' ')[1];
        PLAYER = player;
        render();
    });
});

// Confirm button
document.querySelector('#confirm-colors > button').addEventListener('click', (_e) => {
    CONFIRMED_COLOR = true;
    render();
});

// Toggle location
document.querySelectorAll('.location-item').forEach((elem) => {
    elem.addEventListener('click', (e) => {
        e.target.classList.toggle('scratch');
    });
});

// Seed event handlers
const updateSeed = (e) => {
    const seed = e.target.value;
    SEED = parseInt(seed);
    render();
};
const seedInput = document.querySelector('#seed');
seedInput.addEventListener('keyup', updateSeed);
seedInput.addEventListener('change', updateSeed);

// Number of players
const updatePlayerCount = (e) => {
    const maxCount = 8;
    const playerCount = parseInt(e.target.value);
    PLAYER_COUNT = Math.min(maxCount, playerCount);

    if (playerCount > maxCount) {
        e.target.value = maxCount;
    }
    if (PLAYER_COUNT) {
        colorPicker.querySelector('h4').classList.remove('hidden');
    }
    render();
};
const playerCountInput = document.querySelector('#player-count');
playerCountInput.addEventListener('keyup', updatePlayerCount);
playerCountInput.addEventListener('change', updatePlayerCount);

// Hide button
const locationAndRole = game.querySelector('#location-and-role');
const hideShowButton = document.querySelector('#hide-show-button');
hideShowButton.addEventListener('click', (_e) => {
    if (hideShowButton.innerHTML === '(hide)') {
        locationAndRole.classList.add('invisible');
        hideShowButton.innerHTML = '(show)';
    } else {
        locationAndRole.classList.remove('invisible');
        hideShowButton.innerHTML = '(hide)';
    }
});
