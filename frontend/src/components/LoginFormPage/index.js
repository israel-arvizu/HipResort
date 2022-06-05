import React, {useState} from 'react'
import * as sessionActions from '../../store/session';
import './LoginForm.css';
import {useDispatch, useSelector} from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet'

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to='/'/>
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password}))
        .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
        });

    }

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
                        <title>Login</title>
                        </Helmet>
                        <ul>
                            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                        </ul>
                        <div className='top-head-form-holder'>
                            <div className='top-head-form-main-title'>
                                <span className='top-form-title'>Welcome to </span>
                                <span className='top-form-logo-title'> HipResort</span>
                            </div>
                            <p>Please login below</p>
                        </div>
                        <div className='form-container-content'>
                            <div className='form-container-middle-input-content'>
                                <div className='login-label-cont'>
                                    <label className='loginLabel'> Email: </label>
                                    <div class='input-login-div'>
                                        <i class="fa-solid fa-envelope fa-lg"></i>
                                        <input
                                                className='login-table-input Btn'
                                                type="text"
                                                value={credential}
                                                onChange={(e) => setCredential(e.target.value)}
                                                required
                                            />
                                    </div>
                                </div>
                                <div className='login-label-cont'>
                                    <label className='loginLabel'> Password: </label>
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
                            </div>
                            <div className='form-container-button-section'>
                                <div className='form-container-buttons'>
                                    <button className="form-log-in-button" type="submit">Log In</button>
                                    <button className="form-log-in-button" onClick={logInDemo}>Demo User</button>
                                </div>
                            </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginFormPage;
