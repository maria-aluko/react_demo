import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div>
      <h1>React demo app</h1>
      <nav>
        <ul>          
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/list'>List</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;