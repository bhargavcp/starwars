import axios from 'axios';

export const FETCHED_INDIVIDUAL = 'FETCHED_INDIVIDUAL';
export const FETCHED_STARSHIPS = 'FETCHED_STARSHIPS';

export function getIndividualCharacter(personUrl) {
    return (dispatch) => {
        axios.get(personUrl).then( (response) => {
            dispatch({
                type: FETCHED_INDIVIDUAL,
                payload: response.data
            });
            if (response.data.starships.length > 0){
                response.data.starships.map( (url) => {
                    axios.get(url).then( (response) => {
                        response.data.personUrl = personUrl;
                        dispatch({
                            type: FETCHED_STARSHIPS,
                            payload: response.data
                        })
                    });
                })
            }
        });
    }
}