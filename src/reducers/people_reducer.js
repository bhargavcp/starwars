import {GET_CHARACTERS} from '../actions/getCharacters';

export default function (state = [], action) {
    console.log("Action received: ", action);
    switch (action.type){
        case GET_CHARACTERS:
            console.log("Action inside switch body: ", action);
            return action.payload;
    }
    return state;
}