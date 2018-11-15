import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { matchesSuccess } from '../../../redux/PrevGames/actions';
import MatchesService from '../../../services/MatchesService';

import styles from './styles.scss';

class PrevGames extends React.Component {
  componentDidMount() {
    MatchesService.getMatches().then(response => {
      this.props.matchesSuccess(response.data);
    });
  }

  winner(game) {
    if (game.winner === 'tie') {
      return 'Empate';
    }
    return game[game.winner];
  }

  render() {
    const renderData = games =>
      games.map(game => (
        <div>
          <p>ID game: {game.id}</p>
          <p>Jugador 1: {game.player_one}</p>
          <p>Jugador 2: {game.player_two}</p>
          <p>Quien gano?: {this.winner(game)}</p>
          <p>Fecha del partido: {game.createdAt}</p>
        </div>
      ));

    return (
      <div className={styles.list}>
        <p>Partidos Anteriores: {renderData(this.props.matches)} </p>
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
  matches: PropTypes.list.isRequired,
  matchesSuccess: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrevGames);
