import {combineReducers} from 'redux';

import widgets from './widgets';
import pageViews from './pageViews';
import messages from './messages';

export default combineReducers({widgets, pageViews, messages})