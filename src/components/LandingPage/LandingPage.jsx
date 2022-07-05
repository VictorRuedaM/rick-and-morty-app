import React from 'react'
import { Link } from 'react-router-dom'
import imageBackground from '../../image/rick-and-morty-wallpaper.jpg'
import './landignPage.css'

function LandingPage() {


  return (
    <div className='text-center'>

        {/* <img src={imageBackground} alt="image" className='imgBackground'/> */}
        <h1 className='titleL'>The Rick and Morty App</h1>
        <Link to={'/home'}>
            <button className='buttonL'>START</button>
        </Link>

    </div>
  )
}

export default LandingPage