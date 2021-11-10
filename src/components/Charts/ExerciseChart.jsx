import React from "react";
import moment from "moment";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ExerciseChart = (props) => {
    return (
        <ResponsiveContainer width="100%" aspect={3}>
            <LineChart
                width={500}
                height={300}
                data={props.data}
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
            <Line type="monotone" dataKey="exercise" stroke="#82ca9d" unit=" minutes"/>
            </LineChart>
        </ResponsiveContainer>
    )
}

export default ExerciseChart;
