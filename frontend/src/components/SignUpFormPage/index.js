import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import * as sessionActions from "../../store/session";
import './SingupForm.css';

function SignUpFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [nationality, setNationality] = useState("American")
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, name, bio, nationality, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  const logInDemo = (e) => {
    e.preventDefault();
    let credential = "demo@user.io";
    let password = "password"
    return dispatch(sessionActions.loginDemo({credential, password}))
}

  return (
    <div className='form-container-signin'>
      <div className='form-container-content-holder'>
        <form onSubmit={handleSubmit}>
          <Helmet>
            <title>Sign-Up</title>
          </Helmet>
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
            <div className='top-head-form-holder'>
              <div className='top-head-form-main-title'>
                  <span className='top-form-title'>Welcome to </span>
                  <span className='top-form-logo-title'> HipResort</span>
              </div>
              <p>Sign-Up to get started!</p>
            </div>
            <div className='form-container-content'>
              <div className='form-container-middle-input-content'>
                <div className='login-label-cont'>
                    <label className='loginLabel'> Email </label>
                    <div class='input-login-div'>
                      <i class="fa-solid fa-envelope fa-lg"></i>
                      <input
                        className='login-table-input Btn'
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                </div>
                <div className='login-label-cont'>
                  <label className='loginLabel'> Username </label>
                  <div class='input-login-div'>
                    <i class="fa-solid fa-user fa-lg"></i>
                    <input
                      className='login-table-input Btn'
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className='login-label-cont'>
                  <label className='loginLabel'> Name </label>
                  <div class='input-login-div'>
                    <i class="fa-solid fa-address-card fa-lg"></i>
                    <input
                      className='login-table-input Btn'
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className='login-label-cont'>
                  <label className='loginLabel'> About You!  </label>
                  <div class='input-login-div'>
                    <i class="fa-solid fa-person-circle-question fa-lg"></i>
                    <input
                      className='login-table-input Btn'
                      type="textArea"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className='login-label-cont'>
                  <label className='loginLabel'> Nationality </label>
                  <div class='input-nationality-div'>
                    <i class="fa-solid fa-flag fa-lg"></i>
                    <select className='login-table-input Btn' onChange={(e) => setNationality(e.target.value)}>
                      <option selected value="American">USA</option>
                      <option value="Mexican">Mexico</option>
                      <option value="Canadian">Canada</option>
                    </select>
                    </div>
                </div>
                <div className='login-label-cont'>
                  <label className='loginLabel'> Password  </label>
                  <div class='input-login-div'>
                    <i class="fa-solid fa-key fa-lg"></i>
                    <input
                      className='login-table-input Btn'
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className='login-label-cont'>
                  <label className='loginLabel'> Confirm Password </label>
                  <div class='input-login-div'>
                    <i class="fa-solid fa-check fa-lg"></i>
                    <input
                      className='login-table-input Btn'
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='form-container-button-section-signup'>
              <div className='form-container-buttons'>
               <button className="form-log-in-button" type="submit">Sign Up</button>
               <button className="form-log-in-button" onClick={logInDemo}>Demo User</button>
              </div>
            </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpFormPage;
