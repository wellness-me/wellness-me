import React from 'react';
import InputField from './formComponent/InputField';

const testFieldsToCollect = [{
    name: 'describe your day in 2 sentences',
    type: 'text'
}, {
    name: 'How was you day in a number 1 through 10',
    type: 'number'
},
{
    name: 'describe your day in 3 sentences',
    type: 'text'
}, {
    name: 'describe your day in 4 sentences',
    type: 'text'
}, {
    name: 'describe your day in 5 sentences',
    type: 'text'
}];

class DataInputPage extends React.Component {
    constructor(props) {
        super(props);
        //this.getRequestData();
        this.state = {
            fieldsToCollect: testFieldsToCollect
        }
    }

    async getRequestData() {
        //const rawUserData = await fetch('our api');
        //const parsedUserData = await rawUserData.json();
        //this.setState({ fieldsToCollect: parsedUserData.fieldsToCollect }) /**where each field to collect is an object that contains name and type of firld to collect */
        this.setState({
            fieldsToCollect: testFieldsToCollect
        })
    }

    render() {
        console.log('fields to collect before needed: ', this.state.fieldsToCollect)
        const inputFields = this.state.fieldsToCollect.map((field, i) => {
            return <InputField
                name={field.name}
                type={field.type}
                index={i}
            ></InputField>
        });
        console.log(inputFields);

        if (inputFields.length % 2 === 1) {
            inputFields.push(<InputField type="empty"></InputField>);
        }
        console.log(inputFields.filter((fields, i) => i % 2 === 0));
        return (
            <div className="data-input-page-container">
                <div className="cols-in-row-flex-container">
                    <div className="col col-left">{inputFields.filter((fields, i) => i % 2 === 0)}</div>
                    <div className="col col-right">{inputFields.filter((fields, i) => i % 2 === 1)}</div>
                </div>

                <button
                    className="submit-input-fields"
                    onClick={() => {
                        this.sendRequestData(inputFields.map((field) => field.getValue()))
                    }
                    }
                >Submit</button>
            </div >
        );

    }

    async sendRequestData(listOfValues) {
        console.log(listOfValues);
    }

}



export default DataInputPage;
