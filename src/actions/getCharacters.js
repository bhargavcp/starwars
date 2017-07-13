import axios from 'axios';

export const GET_CHARACTERS = 'GET_CHARACTERS';
export const ITEM_IS_LOADING = 'ITEM_IS_LOADING';
const ROOT_URL = 'http://swapi.co/api/';
// let characterArray = [];

// const getAllPages = (response) => {
//     const nextUrl = response.data.next;
//     characterArray = [...characterArray, ...response.data.results];
//
//     if (nextUrl != null){
//         axios.get(nextUrl).then(function (response){getAllPages(response)});
//     }
//     else {
//         return characterArray;
//     }
// };
//
// export default function peopleFetchedSuccess(people) {
//     return {
//         type: GET_CHARACTERS,
//         people
//     };
// }
// const url = `${ROOT_URL}people/`;
// const request = axios.get(url).then(function(response){getAllPages(response)});
// console.log("Char array: ", characterArray);
// return{
//     type: GET_CHARACTERS,
//     payload: request
// };
// export function getCharacters() {
//     const url = `${ROOT_URL}people/`;
//     const req = axios.get(url).then(function (response) {
//
//     });
//     return{
//         type: GET_CHARACTERS,
//         payload: [1,2,3,4]
//     };
//
// }

// export function setStatus(bool){
//     return{
//         type: ITEM_IS_LOADING,
//         isLoading: bool
//     }
// }

export function getCharacters() {
    const url = `${ROOT_URL}people/`;
    return (dispatch) => {
        axios.get(url).then((response) => {
            console.log("Sending from action: ", response.data.results);
            dispatch({
                type: GET_CHARACTERS,
                payload: response.data.results
            })
        })
    }
    
}