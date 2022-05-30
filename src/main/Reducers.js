import { combineReducers } from 'redux';
import CogsReducer from '../invasions/CogsReducer';
import SpinnerReducer from '../common/SpinnerReducer';

const rootReducer = combineReducers({
    invasions: CogsReducer,
    spinner: SpinnerReducer,
});

export default rootReducer;