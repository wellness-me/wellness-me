import React, { Component } from 'react';
import DoubleSlider from './DoubleSlider.jsx'

class Sleep extends React.Component {
    render() { 
        return (
        <div
            className="daily-goals"
            style={{marginTop: '20px', marginBottom:'20px'}}
        >
            <label>How was your sleep?</label>
            <br/>
            <small class="text-muted">Click and drag bars to match your sleep and wake times from the previous night.</small>
            <br/><br/>
            <DoubleSlider />
        </div>
        );
    }
}
 
export default Sleep;