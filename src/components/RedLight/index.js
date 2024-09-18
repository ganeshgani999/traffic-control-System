import React from 'react';
import { useTrafficLight } from '../../context/TrafficLightContext';
import './index.css';

const RedLight = () => {
  const { state } = useTrafficLight();
  const lightClass = state.currentLight === 'Red' ? 'red-light active' : 'red-light inactive';

  return (
    <div className={lightClass} />
  );
};

export default RedLight;



