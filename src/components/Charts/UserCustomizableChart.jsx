import React from "react";
import moment from "moment";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CustomizationBox from "./CustomizationBox";

const allNonDataInputValues = ['_id', 'createdAt', 'userID', '__v', 'updatedAt']

class UserCustomizableChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectableCategories: {}
        }

        if (this.props.data.length > 0) {
            alert('filtering through the data')
            //alert("the props arte", props.data[this.props.data.length - 1]);
            const possibleValues = Object.keys(props.data[this.props.data.length - 1]).filter((item) => {
                return allNonDataInputValues.indexOf(item) === -1;
            })
            for (let i = 0; i < possibleValues.length; i++) {
                console.log(possibleValues[i]);
                this.state.selectableCategories[possibleValues[i]] = false;
            }
            this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
        }
    }

    handleCheckboxChange(event) {
        alert("handleChange is called")
        const selectableCategoriesDummy = this.state.selectableCategories
        selectableCategoriesDummy[event.target.value] = !selectableCategoriesDummy[event.target.value];
        this.setState({ selectableCategories: selectableCategoriesDummy })
    }

    render() {
        return (
            <>
                <h1>sleep is {this.state.selectableCategories.sleep ? "true" : "false"}</h1>

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
                        <XAxis dataKey="createdAt" tickFormatter={timeStr => moment(timeStr).format('MMM-D-YY')} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sleep" stroke="#8884d8" unit=" hours" />
                    </LineChart>
                </ResponsiveContainer>
                {console.log(this.state.selectableCategories)}
                <CustomizationBox
                    selectableCategories={this.state.selectableCategories}
                    data={this.props.data}
                    handleCheckboxChange={this.handleCheckboxChange}>
                </CustomizationBox>
            </>
        )
    }
}

export default UserCustomizableChart;
