import React from 'react';
import { Button } from 'semantic-ui-react';
import './LoginPage.css';

const LoginPage = () => {
    return (
        <div className = "at-form">
            <div class = "at-title">
                <h1>Login to Wellness-Me</h1>
            </div>
            <div class = "at-login">
                <p>Have an account: Login</p>
            </div>
            <div class = "at-auth">
                <Button primary onClick={(e) =>  window.location.href='/login'}>Login</Button>
            </div>
            <div class = "at-sep">
                <p>Don't have an account: Register</p>
            </div>    
            <div class = "at-register">
                <Button onClick={(e) =>  window.location.href='/register'}>Register</Button>
            </div>
        </div>
    )
}

export default LoginPage;
