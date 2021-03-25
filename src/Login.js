import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import './Styling/Login.css';
import {auth} from './firebase';

function Login(){
    const history = useHistory();
    const[userEmail, setUserEmail] = useState('');
    const[userPassword, setUserPassword] = useState('');

    const loginUser = event => {
        event.preventDefault()
        auth.signInWithEmailAndPassword(userEmail,userPassword)
        .then((auth) => {
            history.push('/')
        })
        .catch(e => alert(e.message))
    }

    const registerUser = event => {
        event.preventDefault()
        auth.createUserWithEmailAndPassword(userEmail, userPassword)
        .then(auth => {
            history.push('/')
        })
        .catch(e => alert(e.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={userEmail} onChange={event => setUserEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={userPassword} onChange={event => setUserPassword(event.target.value)} type="password"/>
                    <button onClick={loginUser} type="submit" className="login__button">Sign In</button>
                </form>
                <p>By signing-in, you agree to Nozama's Terms and Conditions</p>
                <button onClick={registerUser} className="login__button">Create your Nozama Account</button>

            </div>
        </div>
    )
}

export default Login;