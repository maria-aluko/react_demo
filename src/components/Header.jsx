import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">React demo app</Link>
      </h1>
      <nav>
        <ul>          
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/list'>List</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;