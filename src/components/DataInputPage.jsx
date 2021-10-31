import React from 'react';
import InputField from './formComponent/InputField';

class DataInputPage extends React.Component {
    constructor(props) {
        super(props);
        this.getRequestData();
        this.state = {
            fieldsToCollect: []
        }
    }

    async getRequestData() {
        const rawUserData = await fetch('our api');
        const parsedUserData = await rawUserData.json();
        //this.setState({ fieldsToCollect: parsedUserData.fieldsToCollect }) /**where each field to collect is an object that contains name and type of firld to collect */
        this.setState({
            fieldsToCollect: [{
                name: 'describe your day in 2 sentences',
                type: 'text'
            }, {
                name: 'How was you day in a number 1 through 10',
                type: 'number'
            }]
        })
    }

    render() {
        const inputFields = this.state.fieldsToCollect.map((field) => {
            <InputField name={field.name} type={field.type}></InputField>
        });
        return (
            <div className="data-input-page-container">
                {inputFields}
            </div>
        );
    }
}

export default DataInputPage;
