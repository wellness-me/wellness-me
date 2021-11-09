import React from 'react';
import { Button } from 'semantic-ui-react'

const LoginPage = () => {

    return (
        <div>
            <h1>Login to Wellness-Me</h1>
            <p>Don't have an account: Register</p>
            <Button onClick={(e) =>  window.location.href='/register'}>Register</Button>

            <p>Have an account: Login</p>
            <Button primary onClick={(e) =>  window.location.href='/login'}>Login</Button>
        </div>
    )
}

export default LoginPage;
