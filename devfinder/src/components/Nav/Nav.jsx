
import { useContext } from 'react';
import './Nav.css';
import {BsSunFill} from 'react-icons/bs';
import {MdDarkMode} from 'react-icons/md'
import ThemeContext from '../../context/ThemeContext';
const Nav = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <nav>
        <h1>devfinder</h1>
        <div className="theme">
        <h2 >{theme === 'light' ? 'Light' : 'Dark'} </h2>
        {theme === 'light'?
          <BsSunFill onClick={toggleTheme} className='sun'/>:
          <MdDarkMode onClick={toggleTheme} className='moon'/> }
    
        </div>
        
        
    </nav>
  )
}

export default Nav