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
    let currentIndex = array.length, temporaryValue, randomIndex;
    seed = seed || 1;

    let random = function() {
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
        if (i == 0) { console.log(i, player, '->', cardType); };
        let color;
        switch (cardType) {
        case undefined:
            color = 'lightblue';
            break;
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

board(-1, SEED);

document.querySelectorAll('input[name=player]').forEach((radio) => {
    radio.addEventListener('change', (e) => {
        const player = parseInt(e.target.value) - 1;
        PLAYER = player;
        board(PLAYER, SEED);
    });
});

const updateSeed = (e) => {
    const seed = e.target.value;
    SEED = parseInt(seed);
    board(PLAYER, SEED);
};
document.querySelector('#seed').addEventListener('keyup', updateSeed);
document.querySelector('#seed').addEventListener('change', updateSeed);
