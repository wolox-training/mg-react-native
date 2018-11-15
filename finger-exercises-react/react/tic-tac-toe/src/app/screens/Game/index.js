import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { jumpTo, handleClick } from '../../../redux/actions';

import Board from './components/Board';
import styles from './styles.scss';
import { calculateWinner } from './components/Board/utils';

class Game extends React.Component {
  state = { history: [{ squares: Array(9).fill(null) }], stepNumber: 0, xIsNext: true };

  handleClick(i) {
    const history = this.props.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    this.props.onClick(i);
  }

  render() {
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.props.jumpTo(move)}> {desc} </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.props.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className={styles.gameInfo}>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stepNumber: state.game.stepNumber,
  xIsNext: state.game.stepNumber,
  history: state.game.history
});

const mapDispatchToProps = dispatch => ({
  onClick: i => dispatch(handleClick(i)),
  jumpTo: state => dispatch(jumpTo(state))
});

Game.propTypes = {
  history: PropTypes.string.isRequired,
  stepNumber: PropTypes.number.isRequired,
  xIsNext: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  jumpTo: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
