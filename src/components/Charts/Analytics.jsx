import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import SleepChart from './SleepChart';
import ExerciseChart from './ExerciseChart';
import UserCustomizableChart from './UserCustomizableChart'

const Analytics = () => {
    const [data, setData] = useState([])
    const [username, setUsername] = useState("")
    const [streak, setStreak] = useState(0)

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
        if (data !== json) {
            setData(json)
        }
    }

    const getStreak = () => {
        if (data.length === 0) {
            return
        }

        let i;
        let streak = 1;
        let prev = new Date(data[data.length - 1].createdAt);
        for (i = data.length - 2; i >= 0; i--) {
            let cur = new Date(data[i].createdAt)
            const prevAdd1Day = new Date(prev.getTime() + (24*60*60*1000));
            if (prevAdd1Day > cur) {
                streak += 1
            }
            else {
                // only want to count the streak for recent days
                break
            }
            prev = cur
        }
        setStreak(streak)
    }

    const printStreak = () => {
        if (streak !== 0) {
            return (
                <p>Great Job! You're on a {streak} day streak</p>
            )
        }
    }

    useEffect(() => {
        // run fetch API once on load
        getData()
    }, []);

    useEffect(() => {
        // only recalculate the streak when data changes
        getStreak()
    }, [data])

    return (
        <div>
            <h3 className="greeting">hi {username}, here's your data</h3>
            {printStreak()}
            <UserCustomizableChart data={data}></UserCustomizableChart>
        </div>
    )
}

export default Analytics;
