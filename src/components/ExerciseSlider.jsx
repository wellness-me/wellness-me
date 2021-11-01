import React from "react";
import RangeSlider from 'react-bootstrap-range-slider';

const ExerciseSlider = (props) => {
    return (
        <RangeSlider
            value={props.value}
            min={0}
            max={120}
            onChange={changeEvent => props.setValue(changeEvent.target.value)}
            tooltip='on'
            tooltipPlacement='bottom'
            step={5}
            variant='warning'
            style= {{marginTop: '25px'}}
        />
    );
};
export default ExerciseSlider;