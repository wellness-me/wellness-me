import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import moment from "moment";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Analytics = () => {
    const [data, setData] = useState([])
    
    const getData = async () => {
        const cookies = new Cookies();
        const userid = cookies.get("userid");
        const token = cookies.get("token");

        const url = `http://localhost:5000/v1/data/${userid}`
        const r = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token
            },
        })
        const json = await r.json();
        console.log(json)
        setData(json)
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <div>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="createdAt" tickFormatter={timeStr => moment(timeStr).format('MMM-D-YY')} />
                <YAxis />
                <Tooltip />
                <Legend />
                {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
                <Line type="monotone" dataKey="exercise" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    )
}

export default Analytics;
