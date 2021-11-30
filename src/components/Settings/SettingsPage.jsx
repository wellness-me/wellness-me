import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import Logout from './Logout';
import Form from 'react-bootstrap/Form';
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router';
const download = require("downloadjs");

const SettingsPage = () => {
    const [newUsername, setNewUsername] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const history = useHistory();

    const cookies = new Cookies();
    const username = cookies.get("username")

    const updateProfile = async () => {
        const token = cookies.get("token")

        let data = {
            username: username
        }
        if (newUsername !== "") {
            data.newusername = newUsername;
        }
        if (newPassword !== "") {
            data.password = newPassword
        }

        const r = await fetch("/v1/users", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(data)
        })

        if (r.status === 200) {
            cookies.set("token", "")
            cookies.set("username", "")
            cookies.set("userid", "")
            history.push("/")
        }
    }

    const deleteAccount = async () => {
        const token = cookies.get("token")
        const userid = cookies.get("userid")

        const r = await fetch(`/v1/users/${userid}`, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + token
            },
        })
        if (r.status === 200) {
            cookies.set("token", "")
            cookies.set("username", "")
            cookies.set("userid", "")
            history.push("/")
        }
    }

    const deleteUserData = async () => {
        const cookies = new Cookies();

        const userID = cookies.get("userid")
        const token = cookies.get("token");

        const r = await fetch(`/v1/data/${userID}`, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + token

            },
        })

        if (r.status === 200) {
            cookies.set("token", "")
            cookies.set("username", "")
            cookies.set("userid", "")
            history.push("/")
        }
    }

    const downloadJsonFile = async () => {
        const token = cookies.get("token")
        const userid = cookies.get("userid")
        const r = await fetch(`/v1/data/json/${userid}`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token
            }
        })
        const blob = await r.blob()
        download(blob, "data.json");
    }

    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    
    return (
        <div>
            <br/>
            <h3 className="greeting">Settings</h3>
            <div className="settings-column" style={{display: "flex"}}>
                <div style={{flex: 1, marginLeft: "20px", marginRight: "20px"}}>
                    <Form>
                        <h4>Profile</h4>
                        <hr/>

                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Enter new username" onChange={(e) => setNewUsername(e.target.value)} />
                            <Form.Text className="text-muted">
                            Currently: {username}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Reset login credentials</Form.Label>
                            <Form.Control type="newPassword" placeholder="New password" onChange={(e) => setNewPassword(e.target.value)} />
                        </Form.Group>
                        <br/>
                        <Form.Label><i>Changes are not saved unless clicked below.</i></Form.Label>
                        <br/>
                        <button type="button" class="ui positive basic button" onClick={updateProfile}>
                            Update Profile
                        </button>
                    </Form>
                </div>

                <div style={{flex: 1, marginLeft: "20px", marginRight: "20px"}}>
                    <h4>Account</h4>
                    <hr/>
                    <p>Export all your data for your own analysis.</p>
                    <div>
                        <button class="ui secondary basic button" onClick={downloadJsonFile}>Export as .json</button>
                    </div>
                    
                    <br/>
                    <p>Sign out of your account.</p>
                    <Logout/>
                    <br/>
                    <p>Delete all data associated to you or completely scrap your account. Warning: cannot be undone!</p>
                    <div>
                        <button onClick={deleteUserData} class="ui negative basic button">Delete Data</button>
                        <br/>
                        <Button onClick={deleteAccount} style={{backgroundColor: 'rgb(209, 26, 42)', color: 'white', justifyContent: "left", marginTop: "5%"}}>Delete Account</Button>
                    </div>
                </div>

                <div style={{flex: 1, marginLeft: "20px", marginRight: "20px"}}>
                    <h4>Theme</h4>
                    <hr/>
                    <p>Toggle light/ dark theme</p>
                    <div>
                        <Button class="ui secondary basic button" onClick={themeToggler} style={{backgroundColor: 'black', color: 'white'}}>Switch Theme</Button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default SettingsPage;
