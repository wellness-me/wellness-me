import React from 'react';

/* a standalone user box to be fixed to the top of left page. handles its own calles to our API to get user info and keeps that state 
will display with null data and update when API call is complete, can change that decision */

class UserBox extends React.Component {
    constructor(props) {
        super(props);
        this.makeAPICall();
        this.state = {
            name: '...',
            color: '...'
            /**Avatar, peraps later */
        }
    }

    async makeAPICall() {
        const rawUserData = await fetch('our api');
        const parsedUserData = await rawUserData.json();
        //this.setState({ name: parsedUserData.name, color: parsedUserData.color })
        this.setState({ name: 'SomeColin', color: 'brown' })
    }

    render() {
        return (
            <div className="user-box-container" style={{ backgroundColor: this.state.color }}>
                <p className="user-name">{this.state.name}</p>
                <div className="lower-bottom-right">
                    <img src="none" alt="USer Settings" />
                    <img src="none" alt="Trophies" />
                </div>
            </div>);
    }
}

export default UserBox;