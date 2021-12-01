import React from "react";
import moment from "moment";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const HappinessChart = (props) => {
    console.log(props.dateRange ? props.dateRange[0] : 0, props.dateRange ? props.dateRange[1] + 1 : Number.MAX_SAFE_INTEGER);
    return (
        <ResponsiveContainer width="100%" aspect={2}>
            <AreaChart
                width={"auto"}
                height={"auto"}
                data={props.data.slice(props.dateRange ? props.dateRange[0] : 0, props.dateRange ? props.dateRange[1] + 1 : Number.MAX_SAFE_INTEGER)}
                margin={{
                    top: 5,
                    right: 60,
                    left: 20,
                    bottom: 5,
                }}
            >
                <defs>
                    <linearGradient id="colorHappiness" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#e6c730" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#e6c730" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="createdAt" tickFormatter={timeStr => moment(timeStr).format('MMM D, YYYY')} />
                <YAxis />
                <Tooltip labelFormatter={(timeStr) => moment(timeStr).format('MMM D, YYYY')} />
                <Area type="monotone" dataKey="happiness" stroke="#e6c730" fillOpacity={1} fill="url(#colorHappiness)" unit="%" />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default HappinessChart;
