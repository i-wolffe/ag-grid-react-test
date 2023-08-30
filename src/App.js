import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import logo from './images/icon.png';

import { Home } from './views/Home';
import { Manager } from './views/Manager';
import { CellBoard } from './views/CellBoard';
import { AutoBoard } from './views/AutoBoard';

function App() {
  let getDate = () => {
    // get and format date
    return 'abv. YYYY-MM-DD'
  }
  let active = (idx) => {
    // try and toggle active? maybe use state? idfk
  }
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="App-nav">
            <div className='App-logo'>
              <Link to='/'>
                <img src={logo} className="Image-logo" alt="logo" />
              </Link>
            </div>
            <div className='App-link'>
              <Link onClick={() => active(0)} to='/cell-board'>Celda</Link>
            </div>
            <div className='App-link'>
              <Link onClick={() => active(1)} to='/auto-board'>Autoclave</Link>
            </div>
            <div className='App-link'>
              <Link onClick={() => active(2)} to='/manager'>Manager</Link>
            </div>
          </nav>
          <div className='App-info'>
            <div className='Info-container'>
              <p><strong>{getDate()}</strong></p>
              <p>
                <strong>Grupo: </strong><span id='idCell'>%CELL%</span>
                <span>{" | "}</span>
                <strong>Area: </strong><span id='idArea'>%CELL%</span>
              </p>
            </div>
            <div className='Info-container'>
              <p><strong>Responsable: </strong><span id='resName'>John Doe</span></p>
              <p><strong>Supervisa: </strong><span id='superName'>Jane Doe</span></p>
            </div>
          </div>
        </header>
        <Routes>
          <Route path='/' element={ <Home/> }>
          </Route>
          <Route path='/cell-board' element={ <CellBoard/> }>
          </Route>
          <Route path='/auto-board' element={ <AutoBoard/> }>
          </Route>
          <Route path='/manager' element={ <Manager/> }>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
