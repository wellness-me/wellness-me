import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import SleepChart from './SleepChart';
import ExerciseChart from './ExerciseChart';
import UserCustomizableChart from './UserCustomizableChart'

const Analytics = () => {
    const [data, setData] = useState([])
    const [username, setUsername] = useState("")
    
    const getData = async () => {
        const cookies = new Cookies();
        const userid = cookies.get("userid");
        const token = cookies.get("token");
        const username = cookies.get("username");
        setUsername(username)

        const url = `http://localhost:5000/v1/data/${userid}`
        const r = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token
            },
        })
        const json = await r.json();
        setData(json)
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <div>
            <h3 className="greeting">hi {username}, here's your data</h3>
            <UserCustomizableChart data={data}></UserCustomizableChart>
        </div>
    )
}

export default Analytics;
