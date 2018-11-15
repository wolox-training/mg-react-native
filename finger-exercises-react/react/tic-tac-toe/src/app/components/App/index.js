import React, { Component, Fragment } from 'react';

import '../../../scss/application.scss';
import Game from '../../screens/Game';
import PrevGames from '../../screens/PrevGames';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Game />
        <PrevGames />
      </Fragment>
    );
  }
}

export default App;
