import {FETCHED_STARSHIPS, NO_STARSHIPS} from '../actions/getIndividualCharacter';

export default function (state = [], action) {
    switch (action.type){
        case FETCHED_STARSHIPS:
            if (state.length > 0 && 'personUrl' in action.payload && action.payload.personUrl === state[0].personUrl){
                console.log("Received this in reducer in if: ", action.payload);
                let tempState = state.slice(0);
                tempState.push(action.payload);
                return tempState;
            }
            else{
                console.log("Received this in reducer in else: ", action.payload);
                return [action.payload];
            }
        case NO_STARSHIPS:
            console.log('Default was called');
            return [action.payload]
    }
    return state;
}