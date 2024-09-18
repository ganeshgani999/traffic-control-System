import React from 'react';
import { useTrafficLight } from '../../context/TrafficLightContext';
import './index.css';

const YellowLight = () => {
  const { state } = useTrafficLight();
  const lightClass = state.currentLight === 'Yellow' ? 'yellow-light active' : 'yellow-light inactive';

  return (
    <div className={lightClass} />
  );
};

export default YellowLight;


