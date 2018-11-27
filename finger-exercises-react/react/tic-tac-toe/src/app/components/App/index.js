import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import Game from '../../screens/Game';
import PrevGames from '../../screens/PrevGames';

class App extends Component {
  render() {
    if (!this.props.log) {
      return <Redirect to="/login" />;
    }
    return (
      <Fragment>
        <Game />
        <PrevGames />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  log: state.logged.log
});

App.propTypes = {
  log: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(App);
