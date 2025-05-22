import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    // when the component unmounts or the effect re-runs
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <header>
      <Link to='/'>
        <img
          src='/images/rmdb-high-resolution-logo-transparent.png'
          alt='rmdb-logo'
          className='rmdb-logo'
        />
      </Link>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link
          to='/'
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          onClick={handleClick}
        >
          Home
        </Link>
        <Link
          to='/about'
          className={`nav-link ${
            location.pathname === '/about' ? 'active' : ''
          }`}
          onClick={handleClick}
        >
          About
        </Link>
        <Link
          to='/favourites'
          className={`nav-link ${
            location.pathname === '/favourites' ? 'active' : ''
          }`}
          onClick={handleClick}
        >
          Favourites
        </Link>
      </div>
    </header>
  );
}
