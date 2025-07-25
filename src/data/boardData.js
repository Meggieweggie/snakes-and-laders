

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
};


export function checkSpecialSquare(position) {
  if (SNAKES[position]) {
    return { type: "snake", newPosition: SNAKES[position] };
  } else if (LADDERS[position]) {
    return { type: "ladder", newPosition: LADDERS[position] };
  }
  return null;
}