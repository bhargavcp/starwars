import { combineReducers } from 'redux';
import peopleReducer from './people_reducer';
import individualReducer from './individual_reducer';
import starshipReducer from './starship_reducer'

const rootReducer = combineReducers({
    people : peopleReducer,
    individualPerson: individualReducer,
    starShips: starshipReducer
});

export default rootReducer;
