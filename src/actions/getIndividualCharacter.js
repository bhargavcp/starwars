import axios from 'axios';

export const FETCHED_INDIVIDUAL = 'FETCHED_INDIVIDUAL';
export const FETCHED_STARSHIPS = 'FETCHED_STARSHIPS';

export function getIndividualCharacter(url) {
    return (dispatch) => {
        axios.get(url).then( (response) => {
            dispatch({
                type: FETCHED_INDIVIDUAL,
                payload: response.data
            });
            if (response.data.starships.length > 0){
                response.data.starships.map( (url) => {
                    return (dispatch) => {
                        console.log(response.data.starships);
                        axios.get(url).then( (response) => {
                            dispatch({
                                type: FETCHED_STARSHIPS,
                                payload: response
                            })
                        });
                    }
                })
            }
        });
        axios.get()
    }
}