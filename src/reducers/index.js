import {combineReducers} from 'redux';
import basketReducer from './basketReducer';

const Reducers = combineReducers({
    basket: basketReducer,
});

export default Reducers;

