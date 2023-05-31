import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <header>
      <div className='header-container'>
        <Link to='/' className='logo'>
          P
        </Link>
        <nav className='nav'>
          <ul>
            <Link className='nav-link' to='/'>
              Stats
            </Link>
            <Link className='nav-link' to='products'>
              Products
            </Link>
            <Link className='nav-link' to='post'>
              Post
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
