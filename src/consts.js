// A file containing many constants to play 2048.

// Tile size constants
const TILE_WIDTH = 100;
const TILE_HEIGHT = TILE_WIDTH;
const TILE_PADDING = TILE_WIDTH / 7;
const TILE_CORNER_RADIUS = TILE_WIDTH / 35;

export const TILE_CONSTANTS = Object.freeze({
  TILE_WIDTH: TILE_WIDTH,
  TILE_HEIGHT: TILE_HEIGHT,
  TILE_PADDING: TILE_PADDING,
  TILE_CORNER_RADIUS: TILE_CORNER_RADIUS,
});

// Board dimensions constants
const BOARD_ROWS = 4;
const BOARD_COLS = BOARD_ROWS;
const BOARD_WIDTH = TILE_PADDING + BOARD_COLS * (TILE_WIDTH + TILE_PADDING);
const BOARD_HEIGHT = TILE_PADDING + BOARD_ROWS * (TILE_HEIGHT + TILE_PADDING);
const BOARD_CORNER_RADIUS = BOARD_WIDTH/80;

export const BOARD_CONSTANTS = Object.freeze({
  BOARD_ROWS: BOARD_ROWS,
  BOARD_COLS: BOARD_COLS,
  BOARD_WIDTH: BOARD_WIDTH,
  BOARD_HEIGHT: BOARD_HEIGHT,
  BOARD_CORNER_RADIUS: BOARD_CORNER_RADIUS,
});

// Header constants
export const HEADER_HEIGHT = BOARD_HEIGHT / 3;
export const HEADER_PADDING = 10;

// Footer constants
export const FOOTER_HEIGHT = BOARD_HEIGHT / 3;

// Label constants
export const LABEL_CONSTANTS = Object.freeze({
  LABEL_WIDTH: 150,
  LABEL_HEIGHT: 75,
  LABEL_CORNER_RADIUS: 5,
});

// Probability of generating a 2 (generates a 4 otherwise)
export const GENERATE_2_PROBABILITY = 0.8;

// Movement (left / right / up / down) constants
export const MOVEMENT_DIRECTIONS = Object.freeze({
  LEFT: 1,
  RIGHT: 2,
  UP: 3,
  DOWN: 4,
});

export const MOVEMENT_DIRECTION_OF_EVENT_KEY = Object.freeze({
  "ArrowLeft": MOVEMENT_DIRECTIONS.LEFT,
  "ArrowRight":MOVEMENT_DIRECTIONS.RIGHT,
  "ArrowUp": MOVEMENT_DIRECTIONS.UP,
  "ArrowDown":  MOVEMENT_DIRECTIONS.DOWN,
});

// Animation durations
const ENTER_DURATION = 125;
const MOVE_DURATION = 150;
const SCORE_INCREASE_DURATION = 200;

export const ANIMATION_DURATIONS = Object.freeze({
  ENTER_DURATION: ENTER_DURATION,
  MOVE_DURATION: MOVE_DURATION,
  SCORE_INCREASE_DURATION: SCORE_INCREASE_DURATION,
});

// The absense of a value: used in code to represent no tile present
export const EMPTY_VALUE = 0;

// URL to the original game.
export const ORIGINAL_2048_URL = "https://play2048.co";

// CSS styling constants
export const BOARD_COLOR = '#bbada0';

export const STYLE_OF_VALUE = Object.freeze({
  [EMPTY_VALUE]: {
    fillColor: '#cdc1b4',
    textColor: '#cdc1b4',
    fontSize: 0.0,
  },
  2: {
    fillColor: '#eee4da',
    textColor: '#776e65',
    fontSize: 3.0,
  },
  4: {
    fillColor: '#ede0c8',
    textColor: '#776e65',
    fontSize: 3.0,
  },
  8: {
    fillColor: 'f2b179',
    textColor: '#f9f6f2',
    fontSize: 3.0,
  },
  16: {
    fillColor: '#f59563',
    textColor: '#f9f6f2',
    fontSize: 2.8,
  },
  32: {
    fillColor: '#f67c5f',
    textColor: '#f9f6f2',
    fontSize: 2.8,
  },
  64: {
    fillColor: '#f65e3b',
    textColor: '#f9f6f2',
    fontSize: 2.8,
  },
  128: {
    fillColor: '#edcf72',
    textColor: '#f9f6f2',
    fontSize: 2.6,
  },
  256: {
    fillColor: '#edcc61',
    textColor: '#f9f6f2',
    fontSize: 2.6,
  },
  512: {
    fillColor: '#edc850',
    textColor: '#f9f6f2',
    fontSize: 2.6,
  },
  1024: {
    fillColor: '#edc53f',
    textColor: '#f9f6f2',
    fontSize: 2.2,
  },
  2048: {
    fillColor: '#edc22e',
    textColor: '#f9f6f2',
    fontSize: 2.2,
  },
  4096: {
    fillColor: '#3c3a32',
    textColor: '#f9f6f2',
    fontSize: 2.2,
  },
  8192: {
    fillColor: '#3c3a32',
    textColor: '#f9f6f2',
    fontSize: 2.2,
  },
  16384: {
    fillColor: '#3c3a32',
    textColor: '#f9f6f2',
    fontSize: 2.0,
  },
  32768: {
    fillColor: '#3c3a32',
    textColor: '#f9f6f2',
    fontSize: 2.0,
  },
  65536: {
    fillColor: '#3c3a32',
    textColor: '#f9f6f2',
    fontSize: 2.0,
  },
});