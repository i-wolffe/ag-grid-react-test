import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from './views/Home';
import { Manager } from './views/Manager';
import { CellBoard } from './views/CellBoard';
import { AutoBoard } from './views/AutoBoard';
import { Register } from './views/Register';
import { NavBar } from './components/NavBar';
import { useState, useRef } from 'react';

function App(props) {
  const [showInfo,setShowInfo] = useState('')
  const isFirstRender = useRef(true)
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar setShowInfo={setShowInfo}/>
        </header>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/cell-board' element={ 
            <CellBoard 
              showInfo={showInfo}
            /> 
          }/>
          <Route path='/auto-board' element={ 
            <AutoBoard
            /> 
          }/>
          <Route path='/manager' element={ <Manager/> }/>
          <Route path='/register/:type?/:method?/:id?' element={ <Register/> }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
