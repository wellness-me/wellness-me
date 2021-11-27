import React from "react";
import moment from "moment";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import CustomizationBox from "./CustomizationBox";

const allNonDataInputValues = ['_id', 'createdAt', 'userID', '__v', 'updatedAt']

class UserCustomizableChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategories: [],
            startTimestampIndex: 0,
            endTimestampIndex: this.props.data.length,
        }

        this.updateSelectedCategories = this.updateSelectedCategories.bind(this)
        this.updateTimeRange = this.updateTimeRange.bind(this)

    }

    updateSelectedCategories(selectedCategories) {//take in a list, we trust lower component to manage 
        this.setState({ selectedCategories: selectedCategories });
    }

    updateTimeRange(startIndex, endIndex) {
        console.log('updatin to', startIndex, endIndex);
        this.setState({
            startTimestampIndex: startIndex,
            endTimestampIndex: endIndex,
        })
    }

    //!depracted
    handleCheckboxChange(e) {
        //alert("handleChange is called")
        console.log(e.target)
        //negate the membership of the element in the array
        this.setState((this.state.selectedCategories.includes(e.target.value) ? { selectedCategories: this.state.selectedCategories.filter((value) => value !== e.target.value) }
            : { selectedCategories: this.state.selectedCategories.push(e.target.value) }))
    }

    render() {
        return (
            <>

                <ResponsiveContainer width="100%" aspect={3}>
                    <LineChart
                        width={500}
                        height={300}
                        data={this.props.data}

                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis range={[this.state.startTimestampIndex, this.state.endTimestampIndex]} dataKey="createdAt" tickFormatter={timeStr => moment(timeStr).format('MMM-D-YY')} />
                        {console.log([this.state.startTimestampIndex, this.state.endTimestampIndex])}
                        <YAxis width={80} yAxisId="left" tick={{ fontSize: 10 }}>
                            <Label
                                value={this.state.selectedCategories[0]}
                                angle={-90}
                                position='outside'
                                fill='#FF6347'
                                fontSize={14}
                            />
                        </YAxis>
                        <YAxis width={80} yAxisId="right" orientation="right" tick={{ fontSize: 10, }}>
                            <Label
                                value={this.state.selectedCategories[1]}
                                angle={-90}
                                position='outside'
                                fill='#808000'
                                fontSize={14}
                            />
                        </YAxis>
                        <Tooltip content={<CustomTooltip />} formatter={(value) => value} />
                        <Legend />
                        <Line yAxisId="left" type="monotone" dataKey={this.state.selectedCategories[0]} stroke={'#FF6347'} />

                    </LineChart>
                </ResponsiveContainer>
                <CustomizationBox
                    data={this.props.data}
                    updateSelectedCategories={this.updateSelectedCategories}
                    updateTimeRange={this.updateTimeRange}
                >
                </CustomizationBox>
            </>
        )
    }
}

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length > 0) {
        return (
            <div className="custom-tooltip" style={{
                border: '3px solid black',
                borderRadius: '3%',
                padding: '10px'
            }}>
                <p className="date">{moment(payload[0].payload.createdAt).format('MMM-D-YY')}</p>
                {payload.map((value) => {
                    return (
                        <p key={value.dataKey} className="display-data-key">{value.dataKey}: {value.value}</p>
                    )
                })}
                <p className="">and journaled:</p>
                <p className="journal">{payload[0].payload.journal !== "" ? payload[0].payload.journal : "No journal for today"}</p>
            </div>
        );
    }
    else {
        return (<p>nothing to see!</p>)
    }
}
export default UserCustomizableChart;
