import React, { useState } from 'react';
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const handleSubmit = async () => {
        const data = {
            "username": username,
            "password": password,
        }

        const r = await fetch("http://localhost:5000/v1/users/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if (r.status === 201) {
            const json = await r.json()
            const cookies = new Cookies();

            cookies.set("token", json.token)
            cookies.set("username", json.username)
            cookies.set("userid", json._id)

            history.push("/form")
        }
    }

    return (
        <div>
            <h1>Register for Wellness-Me</h1>

            <div>
                <p>Username</p>
                <Input focus placeholder='Username' onChange={(e) => setUsername(e.target.value) } />
            </div>

            <div>
                <p>Password</p>
                <Input focus placeholder='Password' onChange={(e) => setPassword(e.target.value) } />
            </div>

            <div>
                <Button primary onClick={handleSubmit}>Register</Button>
            </div>

        </div>
    )
}

export default Register;
