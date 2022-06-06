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
      <div className='nav-links-cont'>
        <ProfileButton user={sessionUser} />
      </div>
    );
  } else {
    sessionLinks = (
      <>
        <div className='nav-links-cont'>
            <NavLink style={{ color: 'inherit', textDecoration: 'inherit'}} to="/login">Log In</NavLink>
          </div>
          <div className='nav-links-cont'>
            <NavLink style={{ color: 'inherit', textDecoration: 'inherit'}} to="/signup">Sign Up</NavLink>
          </div>
      </>
    );
  }

  return (
    <div className='navigation-container'>
        <div className='right-side-head'>
          <div className='right-side-logo'>
            <p id='nav-logo'>HipResort</p>
            <img id='nav-logo-image' src='/HipResortLogoNew.png'></img>
          </div>
        </div>
        <div className='left-side-head'>
          <div className='nav-links-cont'>
            <NavLink style={{ color: 'inherit', textDecoration: 'inherit'}} classname='nav-navLink' exact to="/">Home</NavLink>
          </div>
          <div className='nav-links-cont'>
            <NavLink style={{ color: 'inherit', textDecoration: 'inherit'}} classname='nav-navLink' to="/resort">Resorts</NavLink>
          </div>
          {isLoaded && sessionLinks}
        </div>
    </div>
  );
}

export default Navigation;
