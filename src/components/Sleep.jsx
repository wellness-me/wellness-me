import React from 'react';
// import DoubleSlider from './DoubleSlider.jsx'
import SleepSlider from './SleepSlider.jsx';

const Sleep = (props) => {
    return (
        <div
            className="daily-goals"
            style={{marginTop: '20px', marginBottom:'20px'}}
        >
            <label>How was your sleep?</label>
            <br/>
            {/* <small class="text-muted">Click and drag bars to match your sleep and wake times from the previous night.</small> */}
            <small class="text-muted">Click and drag slider to match your hours of sleep from the previous night.</small>

            <br/><br/>
            {/* <DoubleSlider /> */}
            <SleepSlider value={props.value} setValue={props.setValue} />
        </div>
        );
}
 
export default Sleep;
