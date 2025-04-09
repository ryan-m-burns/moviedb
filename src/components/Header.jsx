import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <img
        src='/images/rmdb-high-resolution-logo-transparent.png'
        alt='rmdb-logo'
        className='rmdb-logo'
      />
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
