import React, { useState } from 'react';
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

const LoginPage = () => {

    const [page, setPage] = useState(null)
    
    const routing = () => {
        if (page === null) {
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
    }
    return (
        <div>
        {routing()}
            




        </div>
    )
}

export default LoginPage;
