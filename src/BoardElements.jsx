import {
  BOARD_COLOR, BOARD_CONSTANTS,
  EMPTY_VALUE, STYLE_OF_VALUE,
  TILE_CONSTANTS
} from './consts'
import { getPosition } from './utils'

// The background board
export function Board(props) {
  const {BOARD_ROWS, BOARD_COLS, BOARD_WIDTH, BOARD_HEIGHT, BOARD_CORNER_RADIUS} = BOARD_CONSTANTS;
  const emptyTiles = Array.from(Array(BOARD_ROWS).keys(), rownum =>
    Array.from(Array(BOARD_COLS).keys(), colnum => {
      const {x, y} = getPosition(rownum, colnum);
      return (
        <EmptyTile
          x={x}
          y={y}
          key={`<EmptyTile>(${rownum},${colnum})`}
        />
      );
    })
  );

  const {x, y} = props;
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        x={0} y={0}
        width={BOARD_WIDTH} height={BOARD_HEIGHT}
        rx={BOARD_CORNER_RADIUS}
        style={{fill: BOARD_COLOR}}
      />
      {emptyTiles}
    </g>
  );
}

// The physically filled number tile
export function NumberTile(props) {
  // Heavily taken from
  // https://codesandbox.io/s/animated-bar-chart-using-react-move-forked-ney90?file=/src/BarChart.js

  const { data: {value}, state: {x, y, scale} } = props;
  const {fillColor, textColor, fontSize} = STYLE_OF_VALUE[value];
  const {TILE_WIDTH, TILE_HEIGHT, TILE_PADDING, TILE_CORNER_RADIUS} = TILE_CONSTANTS;
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
          x={TILE_PADDING/2 + (1 - scale) * TILE_WIDTH/2}
          y={TILE_PADDING/2 + (1 - scale) * TILE_HEIGHT/2}
          rx={TILE_CORNER_RADIUS}
          width={scale * TILE_WIDTH} height={scale * TILE_HEIGHT}
          style={{fill: fillColor}}
      />
      <text
          textAnchor="middle"
          x={TILE_WIDTH/2 + TILE_PADDING/2}
          y={TILE_HEIGHT/2 + TILE_PADDING/2}
          alignmentBaseline="central"
          style={{
          fontSize: `${fontSize * scale}em`,
          fontFamily: 'clear_sansbold',
          fill: textColor
          }}
      >
          {value}
      </text>
    </g>
  );
}

// An empty background tile for the board
function EmptyTile(props) {
  const {x, y} = props;
  const {fillColor} = STYLE_OF_VALUE[EMPTY_VALUE];
  const {TILE_WIDTH, TILE_HEIGHT, TILE_PADDING, TILE_CORNER_RADIUS} = TILE_CONSTANTS;
  return (
    <g transform={`translate(${x}, ${y})`}>
    <rect
        x={TILE_PADDING / 2} y={TILE_PADDING / 2}
        rx={TILE_CORNER_RADIUS}
        width={TILE_WIDTH} height={TILE_HEIGHT}
        style={{fill: fillColor}}
    />
    </g>
  );
}
