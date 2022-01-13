import { combineReducers } from 'redux';
import stateReducer from './Hompage/Reducer';

const rootReducer = combineReducers({
    homeState:stateReducer,
})

export default rootReducer;
