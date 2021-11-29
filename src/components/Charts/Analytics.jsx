import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import SleepChart from './SleepChart';
import ExerciseChart from './ExerciseChart';
import 'bootstrap/dist/css/bootstrap.css';
import DateRangeSelector from './DateRangeSelector';
import JournalDisplay from './JournalDisplay';
import HappinessChart from './HappinessChart';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

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

    const sum = (arr, key) => {
        let sum = 0;
        let i;
        for (i = 0; i < arr.length; i++) {
            const el = arr[i]
            // if attribute doesn't exist then set to 0
            sum += el.hasOwnProperty(key) ? el[key] : 0
        }

        const avg = sum / arr.length;
        return avg.toFixed(1)
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
            <br/>
            <h3 className="greeting">Hello {username}, here's your progress!</h3>
            <hr/><br/>
            <div classname="graphs" style={{display: "flex", margin: "auto"}}>
                <div className="happiness-graph" style={{flex: 1}}>
                    <h5>Happiness</h5>
                    <br/>
                    <HappinessChart data={data}></HappinessChart>
                    <br/>
                    <DateRangeSelector/>
                    <p>Your average happiness over this period was {sum(data, "happiness")}/100.</p>
                </div>
                <div style={{flex: 1, marginLeft: "65px"}}>
                {printStreak()}
                <Calendar/>
                </div>
            </div>
            <br/><hr/><br/>
            <div className="graphs">
                <div className="sleep graph">
                    <h5>Sleep</h5>
                    <br/>
                    <SleepChart data={data}></SleepChart>
                    <br/>
                    <DateRangeSelector/>
                    <p>Your average sleep time over this period was {sum(data, "sleep")} hours.</p>
                </div>
                <div className="exercise graph">
                    <h5>Exercise</h5>
                    <br/>
                    <ExerciseChart data={data}></ExerciseChart>
                    <br/>
                    <DateRangeSelector/>
                    <p>Your average time during exercise over this period was {sum(data, "exercise")} minutes.</p>
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
