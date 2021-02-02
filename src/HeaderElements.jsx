import { BOARD_CONSTANTS, HEADER_PADDING, LABEL_CONSTANTS } from './consts'

// The label showing the 2048 title
export function Title(props) {
  return (
    <g>
      <text
        textAnchor="start"
        x={HEADER_PADDING}
        y={HEADER_PADDING}
        alignmentBaseline="hanging"
        style={{fontSize: `4.0em`, fontFamily: 'clear_sansbold', fill: '#776e65'}}
      >
        2048
      </text>
    </g>
  );
}

// The label showing the player score
export function ScoreLabel(props) {
  let { score } = props;
  score = Math.round(score);
  const { LABEL_WIDTH, LABEL_HEIGHT, LABEL_CORNER_RADIUS } = LABEL_CONSTANTS;
  const { BOARD_WIDTH } = BOARD_CONSTANTS;
  return (
    <g>
      <rect
        x={BOARD_WIDTH - HEADER_PADDING - LABEL_WIDTH} y={HEADER_PADDING}
        rx={LABEL_CORNER_RADIUS}
        width={LABEL_WIDTH} height={LABEL_HEIGHT}
        style={{fill: '#bbad9f'}}
      />
      <text
        textAnchor="middle"
        x={BOARD_WIDTH - HEADER_PADDING - LABEL_WIDTH/2}
        y={HEADER_PADDING + LABEL_HEIGHT*0.23}
        alignmentBaseline="baseline"
        style={{fontSize: `0.8em`, fontFamily: 'clear_sansbold', fill: '#ebe2d7'}}
      >
        SCORE
      </text>
      <text
        textAnchor="middle"
        x={BOARD_WIDTH - HEADER_PADDING - LABEL_WIDTH/2}
        y={HEADER_PADDING + LABEL_HEIGHT*0.7}
        alignmentBaseline="baseline"
        style={{
          fontSize: `${1.8 - 0.07*(String(score).length - 1)}em`,
          fontFamily: 'clear_sansbold',
          fill: '#ffffff'
        }}
      >
        {score}
      </text>
    </g>
  );
}