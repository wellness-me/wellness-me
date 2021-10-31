import React from 'react';

class DataInputPage extends React.Component {
    constructor(props) {
        super(props);
        this.getRequestData();
    }

    async getRequestData() {
        const rawUserData = await fetch('our api');
        const parsedUserData = await rawUserData.json();
        this.setState({ fieldsToCollect: parsedUserData.fieldsToCollect }) /**where each field to collect is an object that contains name and type of firld to collect */
    }

    render() {
        const inputFields = this.state.fieldsToCollect.map((field) => {
            <inputField name={field.name} type={field.type}></inputField>
        });
        return (
            <div className="data-input-page-container">
                {inputFields}
            </div>
        );
    }
}

export default DataInputPage;
