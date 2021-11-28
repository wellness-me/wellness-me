import React from "react";
import moment from "moment";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SleepChart = (props) => {
    return (
        <ResponsiveContainer width="100%" aspect={1.25}>
            <LineChart
                width={"auto"}
                height={"auto"}
                data={props.data}
                margin={{
                    top: 5,
                    right: 60,
                    left: 20,
                    bottom: 5,
                }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="createdAt" tickFormatter={timeStr => moment(timeStr).format('MMM D, YYYY')} />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sleep" stroke="#8884d8" unit=" hours"/>
            </LineChart>
        </ResponsiveContainer>
    )
}

export default SleepChart;
