const OPTIONS = [{location: "Beach", roles: ["Beach Waitress", "Kite Surfer", "Lifeguard", "Thief", "Beach Photographer", "Ice Cream Trucker Driver", "Beach Goer"]},
                 {location: "Broadway Theater", roles: ["Coat Check Manager", "Prompter", "Cashier", "Director", "Actor", "Backstage Crew", "Audience Member"]},
                 {location: "Casino", roles: ["Bartender", "Head Security Guard", "Bouncer", "Manager", "Hustler", "Dealer", "Gambler"]},
                 {location: "Circus Tent", roles: ["Acrobat", "Animal Trainer", "Magician", "Fire Eater", "Clown", "Juggler", "Visitor"]},
                 {location: "Corporate Party", roles: ["Entertainer", "Manager", "Unwanted Guest", "Owner", "Secretary", "Delivery Boy", "Accountant"]},
                 {location: "Race Track", roles: ["Team Owner", "Driver", "Engineer", "Spectator", "Referee", "Mechanic", "Food Vendor", "Commentator", "Bookmaker"]},
                 {location: "Art Museum", roles: ["Ticket Seller", "Student", "Visitor", "Teacher", "Security Guard", "Painter", "Art Collector", "Art Critic", "Photographer", "Tourist"]},
                 {location: "Baseball Stadium", roles: ["Pitcher", "Catcher", "Commenter", "Spectator", "Security Guard", "Umpire", "Food Vendor", "Manager", "First Baseman", "Shortstop", "Outfielder", "Second Baseman", "Third Baseman", "Mascot", "Team Owner"]},
                 {location: "Cat Show", roles: ["Judge", "Cat-Handler", "Veterinarian", "Security Guard", "Cat Trainer", "Crazy Cat Lady", "Animal Lover", "Cat Owner", "Cat"]},
                 {location: "Bank", roles: ["Armored Car Driver", "Manager", "Consultant", "Robber", "Security Guard", "Teller", "Customer"]},
                 {location: "Hotel", roles: ["Doorman", "Security Guard", "Manager", "Housekeeper", "Bartender", "Bellman", "Customer"]},
                 {location: "Restaurant", roles: ["Musician", "Bouncer", "Hostess", "Head Chef", "Food Critic", "Waiter", "Customer"]},
                 {location: "Service Station", roles: ["Manager", "Tire Specialist", "Biker", "Car Owner", "Car Wash Operator", "Electrician", "Auto Mechanic"]},
                 {location: "Vineyard", roles: ["Gardener", "Gourmet Guide", "Winemaker", "Exporter", "Butler", "Wine Taster", "Sommelier", "Owner", "Vineyard Manager"]},
                 {location: "Construction Site", roles: ["Free-Roaming Toddler", "Contractor", "Crane Driver", "Trespasser", "Safety Officer", "Electrician", "Engineer", "Architect", "Construction Worker"]},
                 {location: "Candy Factory", roles: ["Candy Maker", "Pastry Chef", "Visitor", "Taster", "Truffle Maker", "Supply Worker", "Packager", "Inspector", "Machine Operator"]},
                 {location: "Hospital", roles: ["Nurse", "Doctor", "Anesthesiologist", "Intern", "Therapist", "Surgeon", "Patient"]},
                 {location: "Military Base", roles: ["Deserter", "Colonel", "Medic", "Sniper", "Officer", "Tank Engineer", "Soldier"]},
                 {location: "Police Station", roles: ["Detective", "Lawyer", "Journalist", "Criminalist", "Archivist", "Criminal", "Patrol Officer"]},
                 {location: "Library", roles: ["Old Man", "Journalist", "Author", "Volunteer", "Know-It-All", "Student", "Librarian", "Loudmouth", "Book Fanatic", "Nerd"]},
                 {location: "Jail", roles: ["Wrongly Accused Man", "CCTV Operator", "Guard", "Visitor", "Lawyer", "Janitor", "Jailkeeper", "Criminal", "Correction Officer", "Maniac"]},
                 {location: "United Nations", roles: ["Diplomat", "Interpreter", "Blowhard", "Tourist", "Napping Delegate", "Journalist", "Secretary of State", "Speaker", "Secretary General", "Lobbyist"]},
                 {location: "Airplane", roles: ["First Class Passenger", "Air Marshal", "Mechanic", "Flight Attendant", "Co-Pilot", "Captain", "Economy Class Passenger"]},
                 {location: "Passenger Train", roles: ["Mechanic", "Border Patrol", "Train Attendant", "Restaurant Chef", "Train Driver", "Stoker", "Passenger"]},
                 {location: "Submarine", roles: ["Cook", "Commander", "Sonar Technician", "Eloctronics Technician", "Radioman", "Navigator", "Sailor"]},
                 {location: "Pirate Ship", roles: ["Cook", "Slave", "Cannoneer", "Tied Up Prisoner", "Cabin Boy", "Brave Captain", "Sailor"]},
                 {location: "Cathedral", roles: ["Priest", "Beggar", "Sinner", "Tourist", "Sponsor", "Chorister", "Parishioner"]},
                 {location: "Crusader Army", roles: ["Monk", "Imprision Saracen (Roman-era Arab/Muslim)", "Servant", "Bishop", "Squire", "Archer", "Knight"]},
                 {location: "Cemetary", roles: ["Priest", "Grave Robber", "Poet", "Mourner", "Gatekeeper", "Dead Person", "Relative", "Flower Seller", "Grave Digger", "Goth Girl/Boy"]},
                 {location: "Polar Station", roles: ["Medic", "Expedition Leader", "Biologist", "Radioman", "Hydrologist", "Meteorologist", "Geologist"]},
                 {location: "Space Station", roles: ["Engineer", "Alien", "Pilot", "Commander", "Scientist", "Doctor", "Space Tourist"]},
                 {location: "Wolrd War II Squadron", roles: ["Resistance Fighter", "Radioman", "Scout", "Medic", "Cook", "Imprisoned Nazi", "Soldier"]},
                 {location: "Retirement Home", roles: ["Relative", "Cribbage Player", "Old Person", "Nurse", "Janitor", "Cook", "Blind Soul", "Psychologist"]},
                 {location: "Subway", roles: ["Tourist", "Subway Operator", "Ticket Inspector", "Pregnant Lady", "Pickpocket", "Cleaner", "Businessman", "Ticket Seller", "Old Lady", "Blind Man", "Performer"]},
                 {location: "Coal Mine", roles: ["Safety Inspector", "Miner", "Overseet", "Dump Truck Operator", "Driller", "Coordinator", "Blasting Engineer", "Solid Waste Engineer", "Worker"]},
                 {location: "Rock Concert", roles: ["Guitarist", "Drummer", "Roadie", "Stage Diver", "Security Guard", "Bassist", "Sound Technician"]},
                 {location: "Jazz Club", roles: ["Bouncer", "Drummer", "Pianist", "Saxophonist", "Singer", "Jazz Fanatic", "Dancer", "Barman", "VIP", "Waiter"]},
                 {location: "Wedding", roles: ["Ring Bearer", "Groom", "Bride", "Officiant", "Photographer", "Flower Girl", "Father of the Bride", "Wedding Crasher", "Best Man", "Maid of Honor", "Relative"]},
                 {location: "Gas Station", roles: ["Car Enthusiast", "Service Attendant", "Shopkeeper", "Customer", "Car Washer", "Cashier", "Climate Change Activist", "Manager"]},
                 {location: "Harbor Docks", roles: ["Loader", "Salty Old Pirate", "Captain", "Sailor", "Fisherman", "Exporter", "Cargo Overseer", "Cargo Inspector", "Smuggler", "Old Man"]},
                 {location: "Sightseeing Bus", roles: ["Old Man", "Lone Tourist", "Driver", "Annoying Child", "Tourist", "Tour Guide", "Photographer", "Lost Person"]}]

let PLAYER = null;
let CONFIRMED_COLOR = false;
let SEED = -1;
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
    const pack = shuffle(OPTIONS.slice(), SEED)[0];
    const location = pack.location;
    const index = PLAYER_ID_MAP[PLAYER];
    let roles = shuffle(pack.roles.slice(), SEED).slice(0, 7); // randomly keep 7 of the roles
    roles.push('Spy'); // append spy
    roles = shuffle(roles, SEED); // shuffle again to mix in spy
    const role = roles[index];
    locationLabel.innerHTML = location;
    roleLabel.innerHTML = role;
};

const populateLocationsList = (options) => {
    const locationsList = document.querySelector('#locations-list');
    options.map((option) => {
        const location = document.createElement('div');
        location.classList.add('location-item');
        location.innerHTML = option.location;
        locationsList.appendChild(location);
    });
};

const colorPicker = document.querySelector('#color-picker');
const confirmColors = document.querySelector('#confirm-colors');
const confirmColorItem = confirmColors.querySelector('.color-item-confirm');
const game = document.querySelector('#game');
const playerColor = game.querySelector('#player-color');

// Run a render cycle
const render = () => {
    if (!PLAYER && !CONFIRMED_COLOR) {
        colorPicker.classList.remove('hidden');
        confirmColors.classList.add('hidden');
        game.classList.add('hidden');
    } else if (PLAYER && !CONFIRMED_COLOR) {
        colorPicker.classList.add('hidden');
        confirmColors.classList.remove('hidden');
        confirmColorItem.classList.add(PLAYER);
        game.classList.add('hidden');
        playerColor.classList.add(PLAYER);
    } else if (PLAYER && CONFIRMED_COLOR) {
        colorPicker.classList.add('hidden');
        confirmColors.classList.add('hidden');
        game.classList.remove('hidden');
        playerColor.classList.add(PLAYER);
        selectLocationAndRole();
    } else {
        const s = `Unknown state: PLAYER: ${PLAYER}; CONFIRMED_COLOR: ${CONFIRMED_COLOR}`;
        console.log(s);
        document.querySelector('#error').innerHTML = s;
    }
};

// Validate options
validation(OPTIONS);

// Back button
document.querySelector('#back-button').addEventListener('click', (e) => {
    // purposely not modifying seed
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
document.querySelector('#confirm-colors > h5').addEventListener('click', (_e) => {
    CONFIRMED_COLOR = true;
    render();
});

// Toggle location
document.querySelectorAll('.location-item').forEach((elem) => {
    elem.addEventListener('click', (e) => {
        e.target.classList.toggle('gray');
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
