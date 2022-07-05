import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link} from 'react-router-dom'
import './details.css'

import {getCharacterDetails} from '../../redux/actions/actions'
function Details() {

  const {id} = useParams();
  const dispatch = useDispatch();
  
  const character = useSelector((state) => state.characters);
  
  useEffect(() => {

    dispatch(getCharacterDetails(id));

  },[])

 
  




  return (
    <div className='box'>
        <div className='card bg-dark'>
            <img className='image1' src={character[0].image} alt="image" />
            <h2 className='title'>Name: {character[0].name}</h2>
            <h3 className='textP'>Gender: {character[0].gender}</h3>
            <h3 className='textP'>Species: {character[0].species}</h3>
            <h3 className='textP'>Status: {character[0].status}</h3>
            <h3 className='textP'>Origin: {character[0].origin.name}</h3>
            <Link to={'/home'} >
                <button className='button1' >Get back</button>
            </Link>  
            
        </div> 
         

    </div>
  )
}

export default Details