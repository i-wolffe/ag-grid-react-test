import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Form from 'react-bootstrap/Form';

import logo from './images/icon.png';

import { Home } from './views/Home';
import { Manager } from './views/Manager';
import { CellBoard } from './views/CellBoard';
import { AutoBoard } from './views/AutoBoard';
import { Register } from './views/Register';

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
            <div className='App-link'>
              <Link onClick={() => active(3)} to='/register'>Registrar</Link>
            </div>
          </nav>
          <div className='App-info'>
            <div className='Info-container'>
              <p><strong>{getDate()}</strong></p>
              <p>
                <strong>Grupo: </strong><Form.Control type="text" placeholder="Grupo" />
                <span>{" | "}</span>
                <strong>Area: </strong><Form.Control type="text" placeholder="Area" />
              </p>
            </div>
            <div className='Info-container'>
              <p><strong>Responsable: </strong><span id='resName'><Form.Control type="text" placeholder="John Doe" /></span></p>
              <p><strong>Supervisa: </strong><span id='superName'><Form.Control type="text" placeholder="Jane Doe" /></span></p>
            </div>
          </div>
        </header>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/cell-board' element={ <CellBoard/> }/>
          <Route path='/auto-board' element={ <AutoBoard/> }/>
          <Route path='/manager' element={ <Manager/> }/>
          <Route path='/register/:type?/:method?/:id?' element={ <Register/> }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
