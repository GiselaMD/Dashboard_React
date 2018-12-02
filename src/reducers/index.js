import {combineReducers} from 'redux';

import widgets from './widgets';
import pageViews from './pageViews';

export default combineReducers({widgets, pageViews})