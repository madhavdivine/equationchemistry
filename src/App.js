import React from 'react';
import Home from './Home';
import Que1 from './Que1';
import Que2 from './Que2';
import Que3 from './Que3';
import Que4 from './Que4';
import Que5 from './Que5';
// import ArtificialVideo from './Artificial';
// import Overfishing from './overfishing';
// import Home from './Home';
// import  FontAwesomeIcon from '@fortawesome/react-fontawesome'

import './App.css';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
      <>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Que1' element={<Que1/>}></Route>
          <Route path='/Que2' element={<Que2/>}></Route>
          <Route path='/Que3' element={<Que3/>}></Route>
          <Route path='/Que4' element={<Que4/>}></Route>
          <Route path='/Que5' element={<Que5/>}></Route>
          {/* <Route path='/artificial' element={<ArtificialVideo/>}></Route> */}
          {/* <Route path='/overfishing' element={<Overfishing/>}></Route> */}
        </Routes>

      </>
    );
}

export default App;
