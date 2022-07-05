import React, {useEffect, useState} from 'react';
import {getCharacters} from '../../redux/actions/actions';
import {useDispatch, useSelector} from 'react-redux';
import Card from '../Card/Card';
import NavPage from '../NavPage/NavPage';
import { Link } from 'react-router-dom';
import './characters.css'

function Characters() {

    const dispatch = useDispatch();

    const characterState = useSelector((state) => state.characters);
    const [loading, setLoading] = useState(true)



    return (
        <div className='bg-dark text-white '>
            <div className='page'>
                <NavPage/>
            </div>
           
            
            <div className='row  align-items-center titleHome'>
            {
                characterState.length < 1 ?
                <img src="https://cdn.dribbble.com/users/2346349/screenshots/9246147/media/06971345603f8422d664fa0ea362b3a5.gif" alt="Loading" />
                :
                characterState.map(c => {
                    return(
                        <div key={c.id} className='col-md-3 '>
                            
                           <Link className='linkCard' to={`/details/${c.id}`}>
                                <Card
                                        id={c.id}
                                        image={c.image}
                                        name={c.name}
                                        species={c.species}
                                />
                           </Link>
                        
                        </div>
                    )
                    
                })
                
               
            

                // characterState.length > 1 ?
                // characterState.map(c => {
                //     return(
                //         <div key={c.id} className='col-md-4 bg-danger'>
                            
                //             <Card
                //                 id={c.id}
                //                 image={c.image}
                //                 name={c.name}
                //                 species={c.species}
                //             />
                        
                //         </div>
                //     )
                    
                // })
                // :
                // <h3>Loading</h3>
            }
            </div>
        </div>
    )
}

export default Characters