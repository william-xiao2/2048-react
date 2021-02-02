import { FOOTER_HEIGHT, ORIGINAL_2048_URL } from './consts'

export default function Footer(props) {
  return (
    <g>
      <text
        textAnchor="middle"
        x={0}
        y={FOOTER_HEIGHT/3}
        alignmentBaseline="central"
        style={{fontSize: `1.0em`, fontFamily: 'clear_sansbold', fill: '#776e65'}}
      >
        {"A simple clone of 2048,"}
      </text>
      <a href={ORIGINAL_2048_URL}>
        <text
          textAnchor="middle"
          x={0}
          y={FOOTER_HEIGHT/2}
          alignmentBaseline="central"
          style={{fontSize: `1.0em`, fontFamily: 'clear_sansbold', fill: '#776e65'}}
        >
          {"based off of Gabriele Cirulli's game."}
        </text>
      </a>
      <text
          textAnchor="middle"
          x={0}
          y={FOOTER_HEIGHT * 2/3}
          alignmentBaseline="central"
          style={{fontSize: `1.0em`, fontFamily: 'clear_sansbold', fill: '#776e65'}}
        >
          {"Implemented with React."}
        </text>
    </g>
  );
}