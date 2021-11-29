import React from "react";
import moment from "moment";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const HappinessChart = (props) => {
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
            <Line type="monotone" dataKey="happiness" stroke="#82ca9d" unit=""/>
            </LineChart>
        </ResponsiveContainer>
    )
}

export default HappinessChart;
