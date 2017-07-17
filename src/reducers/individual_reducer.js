import {FETCHED_INDIVIDUAL} from '../actions/getIndividualCharacter';

export default function (state = {}, action) {
    switch (action.type){
        case FETCHED_INDIVIDUAL:
            return action.payload;
    }
    return state;
}