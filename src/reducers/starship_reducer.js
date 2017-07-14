import {FETCHED_STARSHIPS} from '../actions/getIndividualCharacter';

export default function (state = {}, action) {
    switch (action.type){
        case FETCHED_STARSHIPS:
            console.log("Starships: ", action.payload);
            return action.payload;
    }
    return state;
}