import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';

import { combineReducers } from '../../node_modules/redux';

import game from './reducer';
import prevGames from './PrevGames/reducer';
import logged from './Login/reducer';

export default combineReducers({
  game,
  prevGames,
  form,
  logged
});
