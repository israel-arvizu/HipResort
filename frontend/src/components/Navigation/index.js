import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className='loggedin-navLinks'>
        <ProfileButton user={sessionUser} />
      </div>
    );
  } else {
    sessionLinks = (
      <>
        <div className='left-side-head'>
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
      </>
    );
  }

  return (
    <div className='navigation-container'>
        <div className='right-side-head'>
          logo
        </div>
        <div className='left-side-head'>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/resort">Resorts</NavLink>
          {isLoaded && sessionLinks}
        </div>
    </div>
  );
}

export default Navigation;
