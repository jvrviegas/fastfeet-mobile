import { combineReducers } from 'redux';

import auth from './auth/reducer';
import reload from './reload/reducer';

export default combineReducers({
  auth,
  reload,
});
