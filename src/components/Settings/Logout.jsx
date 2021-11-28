import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import Cookies from 'universal-cookie';


const Logout = () => {
    const history = useHistory()

    const handleClick = () => {
        const cookies = new Cookies();
        cookies.set("token", "")
        cookies.set("username", "")
        cookies.set("userid", "")
        history.push("/")
    }

    return (
        <div>
            <Button onClick={handleClick} >Logout</Button>
        </div>
    )
}

export default Logout;
