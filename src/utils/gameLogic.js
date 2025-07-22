export const BOARD_SIZE = 100;

// Add more snakes and ladders for variety
export const SNAKES = {
    16: 6,
    47: 26,
    49: 11,
    56: 53,
    62: 19,
    64: 60,
    87: 24,
    93: 73,
    95: 75,
    98: 78,
    34: 1,    // new snake
    76: 54,   // new snake
};

export const LADDERS = {
    1: 38,
    4: 14,
    9: 31,
    21: 42,
    28: 84,
    36: 44,
    51: 67,
    71: 91,
    80: 100,
    20: 59,   // new ladder
    63: 81,   // new ladder
};

// Add bonus squares and penalty squares
export const BONUS_SQUARES = {
    13: 5,   // move forward 5
    50: 10,  // move forward 10
};

export const PENALTY_SQUARES = {
    29: 3,   // move back 3
    77: 7,   // move back 7
};

// Check if position triggers snake, ladder, bonus, or penalty
export const applySnakesAndLadders = (position) => {
    if (SNAKES[position]) return SNAKES[position];
    if (LADDERS[position]) return LADDERS[position];
    if (BONUS_SQUARES[position]) {
        let newPos = position + BONUS_SQUARES[position];
        return newPos > BOARD_SIZE ? BOARD_SIZE : newPos;
    }
    if (PENALTY_SQUARES[position]) {
        let newPos = position - PENALTY_SQUARES[position];
        return newPos < 1 ? 1 : newPos;
    }
    return position;
};

// Roll dice (add option for double dice)
export const rollDice = (double = false) => {
    if (double) {
        return Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
    }
    return Math.floor(Math.random() * 6) + 1;
};