import axios from 'axios';

export const FETCHED_CHARACTERS = 'FETCHED_CHARACTERS';
// export const ITEM_IS_LOADING = 'ITEM_IS_LOADING';
const ROOT_URL = 'http://swapi.co/api/';

export function getCharacters() {
    const url = `${ROOT_URL}people/`;
    return (dispatch) => {
        axios.get(url).then((response) => {
            dispatch({
                type: FETCHED_CHARACTERS,
                payload: response.data.results
            })
        })
    }
    
}