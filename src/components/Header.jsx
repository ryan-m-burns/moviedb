import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className='header-logo'>🎥</div>
      <div className='nav-links'>
        <Link to='/' className='nav-link'>
          Home
        </Link>
        <Link to='/about' className='nav-link'>
          About
        </Link>
        <Link to='/favorites' className='nav-link'>
          Favorites
        </Link>
      </div>
    </header>
  );
}
