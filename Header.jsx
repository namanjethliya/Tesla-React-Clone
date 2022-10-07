import React, {useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import HeaderStyle from './HeaderStyle.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='navBar'>
        <div className="logo">
          <img src="tesla-images/logo.svg" />
        </div>
        <div className="modelsBar">
          <ul className="mBar">
            <li><a href="">Model S</a></li>
            <li><a href="">Model 3</a></li>
            <li><a href="">Model X</a></li>
            <li><a href="">Model Y</a></li>
            <li><a href="">Solar Roof</a></li>
            <li><a href="">Solar Panel</a></li>
          </ul>
        </div>
        <div className="profileBar">
          <ul className="pBar">
            <li><a href="">Shop</a></li>
            <li><a href="">Account</a></li>
            <button onClick={() => setMenuOpen(true)}>Menu</button>
          </ul>
          <ul className="menuBar" style={{right: (menuOpen) ? 0 : '-300px'}}>
            <CloseIcon onClick={() => setMenuOpen(false)} /> 
            <li><a href=''>Model S</a></li>
            <li><a href=''>Model 3</a></li>
            <li><a href=''>Model X</a></li>
            <li><a href=''>Model Y</a></li>
            <li><a href=''>Solar Roof</a></li>
            <li><a href=''>Solar Panel</a></li>
            <li><a href=''>Existing Inventory</a></li>
            <li><a href=''>Used Inventory</a></li>
            <li><a href=''>Trade In</a></li>
            <li><a href=''>Test Drive</a></li>
            <li><a href=''>Power Wall</a></li>
            <li><a href=''>Commercial Energy</a></li>

          </ul>
        </div>
    </div>
  )
}

export default Header