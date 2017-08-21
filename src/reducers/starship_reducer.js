import {FETCHED_STARSHIPS, NO_STARSHIPS} from '../actions/getIndividualCharacter';

export default function (state = [], action) {
    switch (action.type){
        case FETCHED_STARSHIPS:
            if (state.length > 0 && 'personUrl' in action.payload && action.payload.personUrl === state[0].personUrl){
                let tempState = state.slice(0);
                tempState.push(action.payload);
                return tempState;
            }
            else{
                return [action.payload];
            }
        case NO_STARSHIPS:
            return [action.payload]
    }
    return state;
}