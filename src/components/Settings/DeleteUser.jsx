import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

import Cookies from 'universal-cookie';


const DeleteUser = () => {
    const history = useHistory()

    const handleDelete = async () => {
        const cookies = new Cookies();

        const userID = cookies.get("userid")
        console.log(userID)
        const token = cookies.get("token");


        const r = await fetch(`/v1/data/${userID}`, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + token

            },
        })

        cookies.set("token", "")
        cookies.set("username", "")
        cookies.set("userid", "")
        history.push("/")
    }

    return (
        <div>

            <h4 className="greeting">Delete your user data</h4>
            <p>Wellness.me believes in protecting your user data.  If you choose, you can delete all your user data by clicking below.
            Your username and password will still exist</p>
            

            <Button onClick={handleDelete} >Delete</Button>
            
        </div>
    )
}

export default DeleteUser;
