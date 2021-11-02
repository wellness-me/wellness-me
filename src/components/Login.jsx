import React, { useState } from 'react';
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loginFailed, setLoginFailed] = useState(false)

    const history = useHistory()

    const handleSubmit = async () => {
        const data = {
            username: username,
            password: password
        }
        const r = await fetch("http://localhost:5000/v1/users/login/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })

        if (r.status === 200) {
            const json = await r.json()
            const cookies = new Cookies();

            console.log(r.cookies)

            cookies.set("token", json.token)
            cookies.set("username", json.username)
            cookies.set("userid", json._id)
            
            setLoginFailed(false)
            history.push("/form")
        }
        else {
            console.log("login failed")
            setLoginFailed(true)
        }
    }

    const messageFailed = () => {
        if (loginFailed) {
            return (
                <div>
                    <p>Login failed, please retry</p>
                </div>
            )
        }
    }

    return (
        <div>
            <h1>Login to Wellness-Me</h1>
            {messageFailed()}
            <div>
                <p>Username</p>
                <Input focus placeholder='Username' onChange={(e) => setUsername(e.target.value) } />
            </div>

            <div>
                <p>Password</p>
                <Input focus placeholder='Password' onChange={(e) => setPassword(e.target.value) } />
            </div>

            <div>
                <Button primary onClick={handleSubmit}>Login</Button>
            </div>
        </div>
    )
}

export default Login;
