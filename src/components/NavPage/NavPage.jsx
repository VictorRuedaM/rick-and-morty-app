import React,{useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {getCharacters} from '../../redux/actions/actions';
import './NavPage.css'

function NavPage() {

    const dispatch = useDispatch();
    const [page, setPage] = useState(1);

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
  return (
    <div>
        <h1 className='title text-center display-1 py-4 '>The Rick and Morty App</h1>
        <div className='d-flex justify-content-between align-items-center p-3'>
            
            <button className='btn btn-warning btn-sm' name='previus'
                onClick={(e) => handlePage(e)}>
                 <span>{'<-- '}</span>Page {page !== 1 ? page-1 : '...'}
            </button>
            <p><span>Page: {page}</span></p>
            <button className='btn btn-warning btn-sm' name='next'
                onClick={(e) => handlePage(e)}>
                Page {page === 43 ? '...' : page+1} <span>{' -->'}</span>
            </button>
        </div>
    </div>
  )
}

export default NavPage