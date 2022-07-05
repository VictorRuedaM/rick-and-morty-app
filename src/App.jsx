import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Characters from './components/Characters/Characters';
import LandingPage from './components/LandingPage/LandingPage';
import Details from './components/Details/Details';


function App() {



  
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/home' element={<Characters/>}/>
          <Route path='/details/:id' element={<Details/>}/>
        </Routes>
       
      </div>
    </BrowserRouter>
  )
}

export default App