import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Form from 'react-bootstrap/Form';


import { Home } from './views/Home';
import { Manager } from './views/Manager';
import { CellBoard } from './views/CellBoard';
import { AutoBoard } from './views/AutoBoard';
import { Register } from './views/Register';
import { NavBar } from './components/NavBar';
import { useState } from 'react';
import AppInfo from './components/AppInfo';

function App(props) {
  const [showInfo,setShowInfo] = useState('')
  const [selectedArea,setSelectedArea] = useState('')
  const [selectedName,setSelectedName] = useState('')
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar setShowInfo={setShowInfo}/>
            {
              showInfo === '/cell'
              ? 
                <AppInfo Mode={showInfo} 
                  selectedArea={selectedArea}
                  setSelectedArea={setSelectedArea}
                  selectedName={selectedName}
                  setSelectedName={setSelectedName} 
                />
              : null
            }
        </header>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/cell-board' element={ 
            <CellBoard 
              selectedArea={selectedArea}
              selectedName={selectedName}
            /> 
          }/>
          <Route path='/auto-board' element={ 
            <AutoBoard
            selectedArea={selectedArea}
            selectedName={selectedName}
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
