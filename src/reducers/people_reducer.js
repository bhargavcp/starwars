import {FETCHED_CHARACTERS} from '../actions/getCharacters';

export default function (state = [], action) {
    switch (action.type){
        case FETCHED_CHARACTERS:
            return action.payload;
    }
    return state;
}