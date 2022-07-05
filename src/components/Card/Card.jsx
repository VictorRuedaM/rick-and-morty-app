import React from 'react';
import './card.css'

function Card(props) {

    const {id, image, name, species} = props;
   
  return (
  
    <div className='container '>
        <div className='text-center p-5'>
            <img src={image} className='image img-fluid rounded-pill'/>
            <h2>{name}</h2>
            <h4>Species: {species}</h4>
        </div>
    </div>
  
  )
}

export default Card