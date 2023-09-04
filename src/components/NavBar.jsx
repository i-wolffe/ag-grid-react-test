import React from 'react'
import { Link,useMatch, useResolvedPath } from 'react-router-dom'
import logo from '../images/icon.png';

export const NavBar = () => {
  return (
    <nav className="App-nav">
            <div className='App-logo'>
              <Link to='/'>
                <img src={logo} className="Image-logo" alt="logo" />
              </Link>
            </div>
            <div className='App-link'>
              <CustomLink to='/cell-board'><p>yes</p><p>Celda</p></CustomLink>
            </div>
            <div className='App-link'>
              <CustomLink to='/auto-board'><p>yes</p><p>Autoclave</p></CustomLink>
            </div>
            <div className='App-link'>
              <CustomLink to='/manager'><p>yes</p><p>Manager</p></CustomLink>
            </div>
            <div className='App-link'>
              <CustomLink to='/register'><p>yes</p><p>Registrar</p></CustomLink>
            </div>
          </nav>
  )
}

export default NavBar

let CustomLink = ({ to, children, ...props }) => {
  // convert absolute and relative paths into the same format to compare
  const resolvedPath = useResolvedPath(to)
  // Make sure path matches. "end" to make sure it compares entire path
  const isActive = useMatch({ path: resolvedPath.pathname, end: false })
  return (
      <li className={isActive ? "active" : ""}>
          <Link to={to} {...props}>
              <span >{children[1]}</span>
          </Link>
      </li>
  )
} 