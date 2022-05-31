import React, {useState} from 'react'
import * as sessionActions from '../../store/session';
import './LoginForm.css';
import {useDispatch, useSelector} from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet'

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user.user);
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

    return (
        <form onSubmit={handleSubmit}>
            <Helmet>
            <title>Login</title>
            </Helmet>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label class='loginLabel'>
                Username or Email
                <input
                    type="text"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    required
                />
            </label>
            <label class='loginLabel'>
                Password
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Log In</button>
        </form>
    )
}

export default LoginFormPage;
