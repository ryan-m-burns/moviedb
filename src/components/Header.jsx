import './Header.css';
import { Link } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setOpen(false);
    }
  };
  window.addEventListener('resize', handleResize);
  return (
    <header>
      <img
        src='/images/rmdb-high-resolution-logo-transparent.png'
        alt='rmdb-logo'
        className='rmdb-logo'
      />
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
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
