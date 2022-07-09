import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getCharacters, getSpecies, getStatus} from '../../redux/actions/actions';

import './NavPage.css'

function NavPage() {

    const dispatch = useDispatch();
    const species = useSelector((state) => state.species);
    // console.log('state species', species);
    const [page, setPage] = useState(1);
    let key = 0;
    useEffect(() => {
       
        dispatch(getCharacters(page))
        
    },[page])


    function handlePage(e){
        e.preventDefault();
        
        if(e.target.name === 'previus'){
            if(page !== 1){
                setPage(page - 1);
            }
        }else{
            if(page !== 43){
                setPage(page + 1);
            }
            
        }

    } 
    
    function handleSelectStatus(e){
        e.preventDefault();
        dispatch(getStatus(e.target.value));
    }

    function handleSelectSpecies(e){

        e.preventDefault();
        console.log(e.target.value);
        dispatch(getSpecies(e.target.value))

    }




  return (
    <div >
        <h1 className='title text-center display-1 py-4 '>The Rick and Morty App</h1>

        <div className='container'>
            
            <section className='selection'>
                <select className='selection' onChange={handleSelectStatus}>
                        <option value={''}>Select Status</option>
                        <option value={'alive'}>Alevi</option>
                        <option value={'dead'}>Dead</option>
                        <option value={'unknown'}>Unknown</option>
                </select>
            </section>

            <section className='selection'>
                <select className='selection' onChange={handleSelectSpecies}>
                        <option value={''}>Select Species</option>
                        {
                            species && species.map(e => 
                                
                                <option key={key++} value={e}>{e}</option>
                            )
                        }
                </select>   
            </section>
        </div>

        <div className='d-flex justify-content-between align-items-center p-3'>

            
            
            <button className='btn btn-warning btn-sm' name='previus'
                onClick={(e) => handlePage(e)}>
                 <span>{'<-- '}</span>Page {page !== 1 ? page-1 : '...'}
            </button>
            <p><span>Current Page: {page}</span></p>
            <button className='btn btn-warning btn-sm' name='next'
                onClick={(e) => handlePage(e)}>
                Page {page === 43 ? '...' : page+1} <span>{' -->'}</span>
            </button>
        </div>
    </div>
  )
}

export default NavPage