import {

    GET_CHARACTERS,
    GET_CHARACTE_DETAILS,
    GET_SPECIES,
    GET_STATUS,
    
    } from '../actions/actionsName';


const Species = [
    'Human',
    'Alien',
    'Humanoid',
    'unknown',
    'Poopybutthole',
    'Mythological Creature',
    'Robot',
    'Animal',
    'Cronenberg',
    'Disease',
]

const initialState = {

    characters:[],
    charactersAll: [],
    species: Species,

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

        case GET_SPECIES:

            state.characters= state.charactersAll;
            const filterSpecies = state.characters.filter(e => e.species === action.payload)
            

            return{
                ...state,
                characters: filterSpecies.length ? filterSpecies : state.characters
            }

        case GET_STATUS:

            state.characters= state.charactersAll;
            const filterStatus = state.characters.filter(e => e.status === action.payload)

            return{
                ...state,
                characters: filterStatus.length ? filterStatus : state.characters
            }

        default:
            return{...state}
    }
}