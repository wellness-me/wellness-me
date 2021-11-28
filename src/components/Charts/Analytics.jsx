import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import SleepChart from './SleepChart';
import ExerciseChart from './ExerciseChart';
import 'bootstrap/dist/css/bootstrap.css';
import DateRangeSelector from './DateRangeSelector';
import JournalDisplay from './JournalDisplay';
import HappinessChart from './HappinessChart';

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
                <p>Great job! You're on a <b>{streak}-day streak</b>.</p>

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

    console.log(data)

    return (
        <div>
            <h3 className="greeting">Hello {username}, here's your progress!</h3>

            {printStreak()}
            <br/>
            <div className="graphs">
                <div className="sleep graph">
                    <h5>Sleep</h5>
                    <br/>
                    <SleepChart data={data}></SleepChart>
                    <br/>
                    <DateRangeSelector/>
                    <p>Your average sleep time over this period was x hours.</p>
                </div>
                <div className="exercise graph">
                    <h5>Exercise</h5>
                    <br/>
                    <ExerciseChart data={data}></ExerciseChart>
                    <br/>
                    <DateRangeSelector/>
                    <p>Your average time during exercise over this period was x minutes.</p>
                </div>

            </div>
            <div classname="graphs">
                <div className="happiness-graph">
                    <h5>Happiness</h5>
                    <br/>
                    <HappinessChart data={data}></HappinessChart>
                    <br/>
                    <DateRangeSelector/>
                    <p>Your average happiness over this period was 70/100.</p>
                </div>
            </div>
            <br/><hr/><br/>
            <h5>Journal Entries</h5>
            <br/>
            <JournalDisplay data={data} />
            <br/><br/><br/>
        </div>
    )
}

export default Analytics;
