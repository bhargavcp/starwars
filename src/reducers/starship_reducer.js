import {FETCHED_STARSHIPS} from '../actions/getIndividualCharacter';

export default function (state = [], action) {
    switch (action.type){
        case FETCHED_STARSHIPS:
            if (state.length > 0 && action.payload.personUrl === state[0].personUrl){
                let tempState = state.slice(0);
                tempState.push(action.payload);
                return tempState;
            }
            else{
                return [action.payload];
            }
    }
    return state;
}