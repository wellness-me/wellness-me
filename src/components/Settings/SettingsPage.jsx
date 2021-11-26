import React from 'react';
import { Button } from 'semantic-ui-react';
import Logout from './Logout';

const SettingsPage = () => {

    return (
        <div className = "setting-columns" style= {{ display: "flex" }}>
            <div className = "setting-box" style= {{ flexBasis: "100%", borderColor: "gray", borderStyle: "solid", borderWidth: "1px", borderRadius: "10px", padding: "30px", marginLeft: "30px", marginRight: "30px"}}>
                <h3 className="greeting">you can use this page to change your user settings</h3>
                <Logout />
                <Button>Delete all data</Button>
            </div>
        </div>
        
    )
}

export default SettingsPage;
