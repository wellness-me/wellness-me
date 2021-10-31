import React, { useState } from "react";
import { Slider } from "react-semantic-ui-range";

const App = props => {

  const settings = {
    start: [5, 15],
    min: 0,
    max: 20,
    step: 1
  };

  return (
    <Slider multiple color="red" settings={settings}/>
  );
};

export default App;