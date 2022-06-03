import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory, NavLink } from "react-router-dom";
import * as sessionActions from '../../store/session';
import './Navigation.css';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')

  };

  return (
    <>
      <button id='home-button' onClick={openMenu}>
        <i className="fa-solid fa-house-user fa-2xl"></i>
      </button>
      {showMenu && (
        <div className="dropDown-container">
          <ul className="profile-dropdown">
            <li className="nav-low-text">Hello</li>
            <li className="nav-head-text">{user.username}</li>
            <hr></hr>
            <li className="nav-low-text">Logged in as</li>
            <li className="nav-head-text">{user.email}</li>
            <hr></hr>
            <li className="nav-profile-buttons">
              <NavLink style={{ color: 'inherit', textDecoration: 'inherit'}} to="/user">Profile</NavLink>
            </li>
            <hr></hr>
            <li className="nav-profile-buttons">
              <button className='nav-log-out' onClick={logout}>Log Out</button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
