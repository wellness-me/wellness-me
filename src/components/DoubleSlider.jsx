import React, { useState } from "react";
import { Slider } from "react-semantic-ui-range";

const DoubleSlider = (props) => {
  // TODO: depricate in favor of SleepSlider
  const [sliderVals, setSliderVals] = useState([5, 15])
  
  console.log(sliderVals)
  const settings = {
    start: sliderVals,
    min: 0,
    max: 20,
    step: 1,
    onChange: value => {
        setSliderVals(value);
    }
  };

  return (
    <Slider multiple color="red" settings={settings}/>
  );
};

export default DoubleSlider;
