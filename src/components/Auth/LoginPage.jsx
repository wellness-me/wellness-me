import { Button } from 'semantic-ui-react';
import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router-dom';
import login_graphic from '../images/login_graphic.svg'

const LoginPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loginFailed, setLoginFailed] = useState(false)

    const history = useHistory()

    const handleLoginSubmit = async () => {
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

    const handleRegisterSubmit = async () => {
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
        <div className = "login-columns" style= {{ display: "flex" }}>
            <div style= {{ flexBasis: "100%" , justifyContent: "center", margin: "auto" }}>
                <div className = "login-visual">
                    <img src= { login_graphic } className= "login-graphic"/>
                    <blockquote style= {{ color: "gray"}} className= "quote"><i>"What you do makes a difference, and you have to decide what kind of difference you want to make."</i></blockquote>
                </div> 
            </div>
    
            <div className = "login-box" style= {{ flexBasis: "100%", borderColor: "gray", borderStyle: "solid", borderWidth: "1px", borderRadius: "10px", padding: "30px", marginLeft: "30px", marginRight: "30px"}}>
                <h1>This is Wellness.me!</h1>
                <br/>
                <p>Wellness.me is a personal wellness tracker, allowing you to record and track critical metrics from your day-to-day life,
                including but not limited to your consistency of exercise, duration of sleep, quality of diet, and overall happiness.</p>
                <p>As your personal dataset grows over time, you will be able to reflect back on your success and challenges and marvel at
                your growth through the application's statistical analysis and charts. Through this self-comprehension alongside the assistance
                of our goal setter, allow us to help you strive and reach a fuller life.</p>
                
                {messageFailed()}

                <div className= "login-field" style= {{ display: "flex",  justifyContent: "center", margin: "auto"}}>
                    <div style= {{ margin: "5px" }}>
                        <p className= "omittable-text">Username</p> <Input focus placeholder='Username' onChange={(e) => setUsername(e.target.value) }/>
                    </div>
                    <div style = {{ margin: "5px" }} >
                        <p className= "omittable-text">Password</p> <Input focus placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value) }/>
                    </div>
                </div>
                <br/>
                <p><i>Let's get started!</i></p>
                <div style = {{ display: "flex", justifyContent: "right" }}>
                    <Button primary onClick={handleLoginSubmit}>Login</Button>
                    <Button onClick={handleRegisterSubmit}>Register</Button>
                </div>
            </div>
        </div>
        
    )
}

export default LoginPage;
