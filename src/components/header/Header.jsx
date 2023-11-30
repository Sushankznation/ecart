import React from 'react';
import { Navbar, Link, Cart } from './imports';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from '@firebase/auth';
import auth from '../../firebase';

function Header() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <Navbar color="black" className='header'> 
        <Link to={'/'}>
          <Navbar.Brand style={{ color: '#fff' }} className='header_text'>
            E-Shop
          </Navbar.Brand>
        </Link> 
        {user ? (
          <>
            <p style={{ color: '#fff', marginRight: '10px' }}>Welcome, {user.email}</p>
            <button onClick={() => signOut(auth)} style={{ color: '#fff', cursor: 'pointer' }}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={'/login'} style={{ color: '#fff', marginLeft: 'auto' }}>
              Login
            </Link>
            <Link to={'/signup'} style={{ color: '#fff', marginLeft: '20px',marginRight: '20px'  }}>
              Sign Up
            </Link>
          </>
        )}
        <Link to={'/cart'}>
          <img src={Cart} alt="cart" />
        </Link> 
      </Navbar>
    </div>
  );
}

export default Header;
