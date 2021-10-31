import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';

const Slider = () => {

  const [ value, setValue ] = useState(50); 

  return (
    <RangeSlider
      value={value}
      onChange={changeEvent => setValue(changeEvent.target.value)}
      tooltip='auto'
      tooltipPlacement='bottom'
      step={10}
      variant='warning'
      style= {{marginTop: '25px'}}
    />
  );
};
export default Slider;