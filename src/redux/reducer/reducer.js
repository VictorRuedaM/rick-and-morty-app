import {

    GET_CHARACTERS,
    GET_CHARACTE_DETAILS,
    
    } from '../actions/actionsName';


const initialState = {

    characters:[],
    charactersAll: [],

}



export default function rootReducer(state = initialState, action){


    switch(action.type){

        case GET_CHARACTERS:
           
            return{
                ...state,
                characters: action.payload,
                charactersAll: action.payload

            }
        
        case GET_CHARACTE_DETAILS:
           
            const characterD = state.characters.filter(e => e.id === parseInt(action.payload));
           
            return{
                ...state,
                characters: characterD
            }
            

        default:
            return{...state}
    }
}