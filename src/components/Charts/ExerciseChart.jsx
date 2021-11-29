import React from "react";
import moment from "moment";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ExerciseChart = (props) => {
    return (
        <ResponsiveContainer width="100%" aspect={2}>
            <AreaChart
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
            <defs>
                <linearGradient id="colorExercise" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="createdAt" tickFormatter={timeStr => moment(timeStr).format('MMM D, YYYY')} />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="exercise" stroke="#82ca9d" fillOpacity={1} fill="url(#colorExercise)" unit=" minutes"/>
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default ExerciseChart;
