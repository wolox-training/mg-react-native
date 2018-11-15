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

  // cambiar el nombre a objects por algo que diga lo que es.
  render() {
    const renderData = objects =>
      objects.map(object => (
        <div>
          <p>ID game: {object.id}</p>
          <p>Jugador 1: {object.player_one}</p>
          <p>Jugador 2: {object.player_two}</p>
          <p>Quien gano?: {this.winner(object)}</p>
          <p>Fecha del partido: {object.createdAt}</p>
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

// PrevGames.propTypes = {
//   history: PropTypes.string.isRequired,
//   stepNumber: PropTypes.number.isRequired,
//   xIsNext: PropTypes.bool.isRequired,
//   onClick: PropTypes.func.isRequired,
//   jumpTo: PropTypes.func.isRequired
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrevGames);
