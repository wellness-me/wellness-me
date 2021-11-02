import React from 'react';
import RangeSlider from 'react-bootstrap-range-slider';

const SleepSlider = (props) => {

  return (
    <RangeSlider
      value={props.value}
      min={0}
      max={10}
      onChange={changeEvent => props.setValue(changeEvent.target.value)}
      tooltip='on'
      tooltipPlacement='bottom'
      step={.25}
      variant='warning'
      style= {{marginTop: '25px'}}
    />
  );
};
export default SleepSlider;
