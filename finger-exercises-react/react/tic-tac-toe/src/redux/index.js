import { combineReducers } from '../../node_modules/redux';

import game from './reducer';
import prevGames from './PrevGames/reducer';

export default combineReducers({
  game,
  prevGames
});
