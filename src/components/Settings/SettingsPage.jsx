import React from 'react';
import Logout from './Logout';
import DeleteUser from './DeleteUser';

const SettingsPage = () => {

    return (
        <div>
            <h3 className="greeting">you can use this page to change your user settings</h3>

            <Logout />
            <DeleteUser />
        </div>
    )
}

export default SettingsPage;
