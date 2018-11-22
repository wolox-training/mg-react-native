import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';

import { combineReducers } from '../../node_modules/redux';

import game from './reducer';
import prevGames from './PrevGames/reducer';

export default combineReducers({
  game,
  prevGames,
  form
});

// creo que aca me falta el form:
