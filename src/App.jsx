import { Board, NumberTile } from './BoardElements'
import {
  ANIMATION_DURATIONS,
  BOARD_CONSTANTS, BOARD_COLOR,
  FOOTER_HEIGHT, HEADER_HEIGHT,
  MOVEMENT_DIRECTION_OF_EVENT_KEY,
} from './consts';
import { ScoreLabel, Title } from './HeaderElements'
import Footer from './Footer'
import React from 'react';
import { Animate, NodeGroup } from "react-move";
import {
  canMoveInDirection,
  collapse,
  extendWithNewEntry,
  getPositionFlat,
  gameOver,
} from './utils';
import './style/index.css';

// The main driver code for the game
export default class App extends React.Component {

  // Set up the game
  constructor(props) {
      super(props);
      this.state = {
        filledData: [],
        tileNumber: 0,
        score: 0,
      };
      this.addNewEntry = this.addNewEntry.bind(this);
      this.processKeyPress = this.processKeyPress.bind(this);
      this.keyOfEntry = this.keyOfEntry.bind(this);
  }

  // Initialize game state once window open
  componentDidMount() {
    this.addNewEntry();
    document.addEventListener("keydown", this.processKeyPress, false);
    setTimeout(this.addNewEntry, 200);
  }

  // Stop updating if component unmounting
  componentWillUnmount() {
    document.removeEventListener("keydown", this.processKeyPress, false);
  }

  // Process left, right, up, down keypress and update state as applicable
  processKeyPress(event) {
    let direction = MOVEMENT_DIRECTION_OF_EVENT_KEY[event.key];
    if (direction === undefined) {
      return;
    }

    this.setState(state => {
      const oldFilledData = state.filledData;
      if (!canMoveInDirection(oldFilledData, direction)) {
        return {};
      }
      const { filledData, additionalScore } = collapse(oldFilledData, direction);
      setTimeout(this.addNewEntry, ANIMATION_DURATIONS.MOVE_DURATION);
      return {
        filledData: filledData,
        score: state.score + additionalScore,
      }
    });
    if (gameOver(this.state.filledData)) {
      document.removeEventListener("keydown", this.processKeyPress, false);
    }
  }

  // Returns the unique ID for an active tile.
  keyOfEntry(data) {
    return String(data.id);
  }

  // Adds a new active tile to the game board.
  addNewEntry() {
    this.setState(state => {
      return {
        filledData: extendWithNewEntry(state.filledData, state.tileNumber),
        tileNumber: state.tileNumber + 1,
      }
    });
  }

  // Starts transition for the active tile.
  startTransition(d, i) {
    const { position } = d;
    const { x, y } = getPositionFlat(position);
    return {
      x: x,
      y: y,
      scale: 0.0,
    };
  }

  // The tile entering transition - gradually gets larger.
  enterTransition(d, i) {
    return {
      scale: [1.0],
      timing: {
        duration: ANIMATION_DURATIONS.ENTER_DURATION
      },
    };
  }

  // The updating tile transition - slides across screen.
  updateTransition(d, i) {
    const { position } = d;
    const {x, y} = getPositionFlat(position);
    return {
      x: [x],
      y: [y],
      timing: {
        duration: ANIMATION_DURATIONS.MOVE_DURATION,
      },
    };
  }

  // The leaving tile transition - moves a little faster to make animation look "smooth"
  updateLeave(d, i) {
    const { position } = d;
    const {x, y} = getPositionFlat(position);
    return {
      x: [x],
      y: [y],
      timing: {
        duration: ANIMATION_DURATIONS.MOVE_DURATION/1.35,
      },
    }
  }

  // Render everything to the screen.
  render() {
    const { BOARD_WIDTH, BOARD_HEIGHT } = BOARD_CONSTANTS;
    document.body.style = 'background: #faf8ef;';
    return (
      <div>
        <svg width={BOARD_WIDTH} height={HEADER_HEIGHT + BOARD_HEIGHT + FOOTER_HEIGHT} align="center">
          <Title />
          <Animate
            show
            start={{
              value: 0
            }}
            update={{
              value: [this.state.score],
              timing: { duration: ANIMATION_DURATIONS.SCORE_INCREASE_DURATION },
            }}
          >
            { ({ value }) => {
              return (
                <ScoreLabel score={value} />
              );
            }}
          </Animate>
          <g transform={`translate(${0},${HEADER_HEIGHT})`}>
            <Board x={0} y={0} />
            <NodeGroup
              data={this.state.filledData}
              keyAccessor={this.keyOfEntry}
              start={this.startTransition}
              enter={this.enterTransition}
              update={this.updateTransition}
              leave={this.updateLeave}
              >
              {(nodes) => (
                <g>
                  {nodes.map(({ key, data, state }) =>
                    <NumberTile key={data.id} data={data} state={state} />
                  )}
                </g>
              )}
            </NodeGroup>
            <Animate
              show={gameOver(this.state.filledData)}
              start={{
                opacity: 0,
                backgroundColor: BOARD_COLOR,
              }}
              enter={{
                opacity: [0.7],
                timing: { duration: 1000 },
              }}
            >
              { ({backgroundColor, opacity}) => {
                return (
                  <g>
                    <rect
                      x={0} y={0}
                      width={BOARD_WIDTH} height={BOARD_HEIGHT}
                      style={{opacity: opacity, fill: backgroundColor}}
                    />
                    <text
                      textAnchor="middle"
                      x={BOARD_WIDTH/2}
                      y={BOARD_HEIGHT/2}
                      alignmentBaseline="central"
                      style={{fontSize: `4em`, fontFamily: 'clear_sansbold', fill: '#776e65', opacity: opacity}}
                    >
                      You Lose!
                    </text>
                  </g>
                );
              }}
            </Animate>
          </g>
          <g transform={`translate(${BOARD_WIDTH/2},${HEADER_HEIGHT + BOARD_HEIGHT})`}>
            <Footer />
          </g>
        </svg>
      </div>
    );
  }
}

