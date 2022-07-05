import axios from 'axios';


import {GET_CHARACTERS, GET_CHARACTE_DETAILS} from './actionsName';



const URL_API = "https://rickandmortyapi.com/api/character?page=";

export function getCharacters(page){

    return async function(dispatch){

        try {
            let characters = await axios.get(`${URL_API}${page}`);
            // console.log('characters:', characters.data.results)
            
            return dispatch({
                type: GET_CHARACTERS,
                payload: characters.data.results
            })
        } catch (error) {
            
        }
    }
}

export function getCharacterDetails(id){
   
    return {

        type: GET_CHARACTE_DETAILS,
        payload: id
    }
}