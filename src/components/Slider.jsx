import React from 'react';
import RangeSlider from 'react-bootstrap-range-slider';

const Slider = (props) => {
  
  return (
    <RangeSlider
      value={props.value}
      onChange={changeEvent => props.setValue(changeEvent.target.value)}
      tooltip='on'
      tooltipPlacement='bottom'
      step={10}
      variant='warning'
      style= {{marginTop: '25px'}}
    />
  );
};

export default Slider;