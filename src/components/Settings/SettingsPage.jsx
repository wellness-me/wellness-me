import React from 'react';
import { Button } from 'semantic-ui-react';
import Logout from './Logout';
import DeleteUser from './DeleteUser';
import Form from 'react-bootstrap/Form';

const SettingsPage = () => {
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
                            <Form.Label><b>Name</b></Form.Label>
                            <Form.Control type="nickname" placeholder="Enter nickname" />
                            <Form.Text className="text-muted">
                            This is how we address you in our application.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Enter new username" />
                            <Form.Text className="text-muted">
                            Currently: ______
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Reset login credentials</Form.Label>
                            <Form.Control type="oldPassword" placeholder="Old password" style={{marginBottom: "5px"}}/>
                            <Form.Control type="newPassword" placeholder="New password" />
                        </Form.Group>
                        <br/>
                        <Form.Label><i>Changes are not saved unless clicked below.</i></Form.Label>
                        <br/>
                        <button class="ui positive basic button">
                            Update Profile
                        </button>
                    </Form>
                </div>

                <div style={{flex: 1, marginLeft: "20px", marginRight: "20px"}}>
                    <h4>Account</h4>
                    <hr/><br/>
                    <p>Export all your data for your own analysis.</p>
                    <div>
                        <button class="ui secondary basic button">Export as .json</button>
                        <button class="ui secondary basic button">Export as .pdf</button>
                    </div>
                    
                    <br/>
                    <p>Sign out of your account.</p>
                    <Logout/>
                    <br/>
                    <p>Delete all data associated to you or completely scrap your account. Warning: cannot be undone!</p>
                    <div>
                    <button class="ui negative basic button">Delete Data</button>
                        <Button onClick={DeleteUser} style={{backgroundColor: 'rgb(209, 26, 42)', color: 'white', justifyContent: "left"}}>Delete Account</Button>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default SettingsPage;
