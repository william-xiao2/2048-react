import {
  TILE_CONSTANTS,
  BOARD_CONSTANTS,
  EMPTY_VALUE, MOVEMENT_DIRECTIONS,
  GENERATE_2_PROBABILITY
} from './consts'

const {BOARD_ROWS, BOARD_COLS} = BOARD_CONSTANTS;

// The main function that collapses the data of the actual tiles in the specified direction.
export function collapse(filledData, direction) {
  const matrix = toMatrix(filledData);
  let matrixToUse;
  switch (direction) {
    case MOVEMENT_DIRECTIONS.LEFT:
    case MOVEMENT_DIRECTIONS.RIGHT:
      matrixToUse = matrix;
      break;
    case MOVEMENT_DIRECTIONS.UP:
    case MOVEMENT_DIRECTIONS.DOWN:
      matrixToUse = transpose(matrix);
      break;
    default:
      matrixToUse = null;
      break;
  }
  return matrixToUse.map((row, rnum) => collapseInDirection(row, rnum, direction)).reduce((acc, v) => {
    const { collapsedRow, additionalScore } = v;
    return {
      filledData: acc.filledData.concat(collapsedRow),
      additionalScore: acc.additionalScore + additionalScore,
    }
  }, {filledData: [], additionalScore: 0});
}

// Whether attempting to move the specified filled board tiles in the given direction
// would cause the state of the board to change
export function canMoveInDirection(filledData, direction) {
  const matrix = [];
  for (let r = 0; r < BOARD_ROWS; r++) {
    matrix.push(Array(BOARD_COLS).fill(EMPTY_VALUE));
  }

  for (let data of filledData) {
    const position = data.position;
    const r = Math.floor(position / BOARD_COLS);
    const c = position % BOARD_COLS
    matrix[r][c] = data.value;
  }

  const matrixCopy = matrix.map(row => row.slice());
  let matrixToCompareTo;
  switch (direction) {
    case MOVEMENT_DIRECTIONS.LEFT:
      matrixToCompareTo = collapseLeft(matrixCopy);
      break;
    case MOVEMENT_DIRECTIONS.RIGHT:
      const collapsed = collapseLeft(matrixCopy.map(row => row.reverse()));
      matrixToCompareTo = collapsed.map(row => row.reverse());
      break;
    case MOVEMENT_DIRECTIONS.UP:
      matrixToCompareTo = transpose(collapseLeft(transpose(matrixCopy)));
      break;
    case MOVEMENT_DIRECTIONS.DOWN:
      const collapsedDown = collapseLeft(transpose(matrixCopy).map(row => row.reverse()));
      matrixToCompareTo = transpose(collapsedDown.map(row => row.reverse()));
      break;
    default:
      break;
  }

  return !matrixEqual(matrix, matrixToCompareTo);
}

// The (x,y) screen position to position the tile at row r and column c.
export function getPosition(r, c) {
  const { TILE_WIDTH, TILE_HEIGHT, TILE_PADDING } = TILE_CONSTANTS;
  return {
    x: c*(TILE_WIDTH + TILE_PADDING) + TILE_PADDING/2,
    y: r*(TILE_HEIGHT + TILE_PADDING) + TILE_PADDING/2,
  }
}

// The (x,y) screen position to position the tile at (flat) position i.
export function getPositionFlat(i) {
  return getPosition(
    Math.floor(i / BOARD_COLS),
    i % BOARD_COLS
  );
}

// Whether the game has been lost.
export function gameOver(filledData) {
  return (filledData.length === BOARD_ROWS * BOARD_COLS
          && !canMoveInDirection(filledData, MOVEMENT_DIRECTIONS.LEFT)
          && !canMoveInDirection(filledData, MOVEMENT_DIRECTIONS.RIGHT)
          && !canMoveInDirection(filledData, MOVEMENT_DIRECTIONS.UP)
          && !canMoveInDirection(filledData, MOVEMENT_DIRECTIONS.DOWN));
}

// Adds a new tile (either a 2 or a 4) to the given filled tiles.
export function extendWithNewEntry(filledData, id) {
  const takenIndices = filledData.map(({position}) => position)
  const openIndices = [...Array(BOARD_ROWS * BOARD_COLS).keys()].filter(i => !takenIndices.includes(i));
  const newElement = Math.random() < GENERATE_2_PROBABILITY ? 2 : 4;
  const index = Math.floor(Math.random() * openIndices.length);
  return filledData.concat([{value: newElement, position: openIndices[index], id: String(id)}])
}

// Collapses a simplified (just tile values) version of the board to the
// version it would be after moving left.
function collapseLeft(matrix) {
  return matrix.map(row => {
    const filteredRow = row.filter(value => value !== EMPTY_VALUE);
    let nonPaddedCollapsed = [];
    if (filteredRow.length > 0) {
      const [head, ...tail] = filteredRow;
      nonPaddedCollapsed = tail.reduce((acc, v) => {
        const toCompare = acc[acc.length-1];
        if (toCompare === v) {
          acc[acc.length-1] *= 2;
        } else {
          acc.push(v);
        }
        return acc;
      }, [head]);
    }
    return nonPaddedCollapsed.concat(Array(BOARD_COLS - nonPaddedCollapsed.length).fill(EMPTY_VALUE));
  });
}

// Whether matrix1 and matrix2 are equivalent 2d arrays.
function matrixEqual(matrix1, matrix2) {
  return matrix1.length === matrix2.length && matrix1.every((row, rnum) => {
    const otherRow = matrix2[rnum];
    return row.length === otherRow.length && row.every((value, cnum) => {
      return value === otherRow[cnum];
    });
  });
}

// Transposes the given matrix.
function transpose(matrix) {
  return matrix[0].map((_, col) => matrix.map(row => row[col]));
}

// Converts the data of the filled tiles to a matrix with that data, padding as needed.
function toMatrix(filledData) {
  const matrix = [];
  for (let r = 0; r < BOARD_ROWS; r++) {
    matrix.push(Array(BOARD_COLS).fill({value: EMPTY_VALUE, position: 0, id: "0"}));
  }

  for (let data of filledData) {
    const position = data.position;
    const r = Math.floor(position / BOARD_COLS);
    const c = position % BOARD_COLS
    matrix[r][c] = data;
  }
  return matrix;
}

// Collapses the given row with row number rnum in the specified direction.
function collapseInDirection(row, rnum, direction) {
  let nonemptyElementsInRow = row.filter(({value}) => value !== EMPTY_VALUE);
  if (nonemptyElementsInRow.length === 0) {
    return {
      collapsedRow: [],
      additionalScore: 0,
    };
  }
  if (direction === MOVEMENT_DIRECTIONS.RIGHT || direction === MOVEMENT_DIRECTIONS.DOWN) {
    nonemptyElementsInRow = nonemptyElementsInRow.reverse();
  }
  const [head, ...tail] = nonemptyElementsInRow;
  let basePos;
  let positionDelta;
  switch (direction) {
    case MOVEMENT_DIRECTIONS.LEFT:
      basePos = rnum * BOARD_COLS;
      positionDelta = 1;
      break;
    case MOVEMENT_DIRECTIONS.RIGHT:
      basePos = (rnum + 1) * BOARD_COLS - 1;
      positionDelta = -1;
      break;
    case MOVEMENT_DIRECTIONS.UP:
      basePos = rnum;
      positionDelta = BOARD_ROWS;
      break;
    case MOVEMENT_DIRECTIONS.DOWN:
      basePos = rnum + (BOARD_ROWS - 1) * BOARD_COLS;
      positionDelta = -BOARD_ROWS;
      break;
    default:
      break;
  }
  const init = {
    collapsedRow: [{
      value: head.value,
      position: basePos,
      id: head.id,
    }],
    additionalScore: 0,
  };
  const reducedRowNotPadded = tail.reduce((accumulator, current) => {
    const accumulatorRow = accumulator.collapsedRow;
    const tileToLeft = accumulatorRow[accumulatorRow.length-1];
    const leftValue = tileToLeft.value;
    const currentValue = current.value;
    let scoreIncrease;
    if (leftValue === currentValue) {
      tileToLeft.value *= 2;
      scoreIncrease = tileToLeft.value;
      current.position = tileToLeft.position;
    } else {
      scoreIncrease = 0;
      current.position = tileToLeft.position + positionDelta;
      accumulatorRow.push(current);
    }
    return {
      collapsedRow: accumulatorRow,
      additionalScore: accumulator.additionalScore + scoreIncrease,
    };
  }, init);
  return reducedRowNotPadded;
}