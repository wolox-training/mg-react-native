import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { matchesSuccess } from '../../../redux/PrevGames/actions';
import MatchesService from '../../../services/MatchesService';

import styles from './styles.scss';

const winner = game => {
  if (game.winner === 'tie') {
    return 'Empate';
  }
  return game[game.winner];
};

class PrevGames extends React.Component {
  componentDidMount() {
    MatchesService.getMatches().then(response => {
      this.props.matchesSuccess(response.data);
    });
  }

  renderGames() {
    return this.props.matches.map(game => (
      <div key={game.id}>
        <p>ID game: {game.id}</p>
        <p>Jugador 1: {game.player_one}</p>
        <p>Jugador 2: {game.player_two}</p>
        <p>Quien gano?: {winner(game)}</p>
        <p>Fecha del partido: {game.createdAt}</p>
      </div>
    ));
  }

  render() {
    return (
      <div className={styles.list}>
        <p>Partidos Anteriores: {this.renderGames()} </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  matches: state.prevGames.matches
});

const mapDispatchToProps = dispatch => ({
  matchesSuccess: matches => dispatch(matchesSuccess(matches))
});

PrevGames.propTypes = {
  matches: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      player_one: PropTypes.string.isRequired,
      player_two: PropTypes.string.isRequired,
      winner: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired
    })
  ).isRequired,
  matchesSuccess: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrevGames);
