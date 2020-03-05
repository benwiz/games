const BOARD = [[1,   0,   0],
               [1,   0,   0],
               [1,  -1,   0],
               [1,   0,  -1],
               [1,   0,   1],
               [1,   1,   0],
               [-1,  1,   0],
               [0,   1,  -1],
               [0,   1,   0],
               [0,   1,   0],
               [0,   1,   1],
               [-1,  0,   1],
               [0,   0,   1],
               [0,  -1,   1],
               [0,   0,   1],
               [-1,  0,   0],
               [0,  -1,   0],
               [0,   0,  -1],
               [-1, -1,  -1],
               [0,   0,   0],
               [0,   0,   0],
               [0,   0,   0],
               [0,   0,   0],
               [0,   0,   0],
               [0,   0,   0]];

let PLAYER = -1;
let SEED = -1;

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

const board = (player, seed) => {
    const shuffled = shuffle(BOARD.slice(), seed);
    const gridWrapper = document.querySelector('.wrapper');
    const cards = gridWrapper.querySelectorAll('.card');
    cards.forEach((card, i) => {
        const cardType = shuffled[i][player];
        let color;
        switch (cardType) {
        case -1:
            color = 'black';
            break;
        case 0:
            color = 'yellow';
            break;
        case 1:
            color = 'green';
            break;
        default:
            color = 'magenta';
            break;
        };
        card.className = 'card ' + color;
    });
};

const showBoard = () => {
    const board = document.querySelector('.wrapper');
    if (PLAYER > -1 && SEED > -1) {
        board.className = 'wrapper';
    } else {
        board.className = 'wrapper hidden';
    }
};


// Input labels (TODO probably should be nested within a div with the actual content)
const seedInputLabel = document.querySelector('#seed-input-label');
const playerInputLabel = document.querySelector('#player-input-labe');
const boardLabel = document.querySelector('#board-label');

// Seed event handlers
const updateSeed = (e) => {
    const seed = e.target.value;
    SEED = parseInt(seed);
    board(PLAYER, SEED);
    showBoard();
    if (SEED > -1) {
        boardLabel.className = '';
    }
};
const seedInput = document.querySelector('#seed');
seedInput.addEventListener('keyup', updateSeed);
seedInput.addEventListener('change', updateSeed);

// Player handlers
document.querySelectorAll('input[name=player]').forEach((radio) => {
    radio.addEventListener('change', (e) => {
        const player = parseInt(e.target.value) - 1;
        PLAYER = player;
        board(PLAYER, SEED);
        showBoard();
        if (PLAYER > -1) {
            seedInput.className = '';
            seedInputLabel.className = '';
        }
    });
});

// Start the initial board
board(PLAYER, SEED);
