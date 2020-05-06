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

const BOARD_6x6_APPEND = [[1, 0, 0],
                          [1, 0, 0],
                          [0, 1, 0],
                          [0, 1, 0],
                          [0, 0, 1],
                          [0, 0, 1],
                          [-1,0, 0],
                          [0,-1, 0],
                          [0, 0,-1],
                          [0, 0, 0],
                          [0, 0, 0]];

let PLAYER = -1;
let SEED = -1;
let BOARD_SIZE = '5x5';

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

const board = (player, boardSize, seed) => {
    let newBoard;
    console.log('bs:', boardSize);
    switch (boardSize) {
    case '6x6':
        newBoard = BOARD.slice().concat(BOARD_6x6_APPEND.slice());
        break;
    default:
        newBoard = BOARD.slice();
        break;
    }
    const shuffled = shuffle(newBoard, seed);
    const gridWrapper = document.querySelector('.wrapper');
    gridWrapper.innerHTML = '';
    shuffled.forEach((set) => {
        const cardType = set[player];
        let classes = 'card ';
        switch (cardType) {
        case -1:
            classes += 'black';
            break;
        case 0:
            classes += 'yellow';
            break;
        case 1:
            classes += 'green';
            break;
        default:
            classes += 'magenta';
            break;
        };
        const card = document.createElement('div');
        card.className = classes;
        gridWrapper.appendChild(card);
    });
};

const showBoard = () => {
    const board = document.querySelector('.wrapper');
    let classes = 'wrapper';
    if (PLAYER == -1 || SEED == -1) {
        classes += ' hidden';
    }
    if (BOARD_SIZE == '6x6') {
        classes += ' six-by-six';
    } else {
        classes += ' five-by-five';
    }
    board.className = classes;
};


// Input labels (TODO probably should be nested within a div with the actual content, would simplify things)
const seedInputLabel = document.querySelector('#seed-input-label');
const playerInputLabel = document.querySelector('#player-input-labe');
const boardLabel = document.querySelector('#board-label');

const boardWrapper = document.querySelector('.wrapper');

// Board size event handlers
const boardSizeRadioGroup = document.querySelector('#board-size');
document.querySelectorAll('input[name=board-size]').forEach((radio) => {
    radio.addEventListener('change', (e) => {
        const boardSize = e.target.value;
        BOARD_SIZE = boardSize;
        board(PLAYER, BOARD_SIZE, SEED);
        showBoard();
    });
});

// Seed event handlers
const updateSeed = (e) => {
    const seed = e.target.value;
    SEED = parseInt(seed);
    board(PLAYER, BOARD_SIZE, SEED);
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
        board(PLAYER, BOARD_SIZE, SEED);
        showBoard();
        if (PLAYER > -1) {
            seedInput.className = '';
            seedInputLabel.className = '';
            boardSizeRadioGroup.className = 'toggle-buttons';
        }
    });
});

// Start the initial board
board(PLAYER, BOARD_SIZE, SEED);
