import React from 'react';
import { Button } from 'semantic-ui-react';
import Logout from './Logout';
import DeleteUser from './DeleteUser';

const SettingsPage = () => {

    return (
        <div className = "setting-columns" style= {{ display: "flex" }}>
            <h1 className="greeting">Settings</h1>
            <div className = "logout-box" style= {{ flexBasis: "100%", borderColor: "gray", borderStyle: "solid", borderWidth: "1px", borderRadius: "10px", padding: "30px", marginLeft: "30px", marginRight: "30px"}}>
                <div style = {{ display: "flex", justifyContent: "left" }}>
                    <Logout />
                </div>
            </div>
            <div className = "delete-box" style= {{ flexBasis: "100%", borderColor: "gray", borderStyle: "solid", borderWidth: "1px", borderRadius: "10px", padding: "30px", marginLeft: "30px", marginRight: "30px", marginTop: "50%"}}>
                <div style = {{ display: "flex"}}>
                    <Button onClick={DeleteUser} style={{backgroundColor: 'rgb(209, 26, 42)', color: 'white', justifyContent: "left", fontSize: "90%"}}>DELETE ACCOUNT</Button>
                    <div style = {{marginLeft: "10%", fontSize: "110%", verticalAlign: "middle", marginTop: "5px"}}>
                        <p>Are you sure you want to delete all your data stored at wellness.me?</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default SettingsPage;
