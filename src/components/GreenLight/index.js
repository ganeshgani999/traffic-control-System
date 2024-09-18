import React from 'react';
import { useTrafficLight } from '../../context/TrafficLightContext';
import './index.css'; 

const GreenLight = () => {
  const { state } = useTrafficLight();
  const lightClass = state.currentLight === 'Green' ? 'green-light active' : 'green-light inactive';

  return (
    <div className={lightClass} />
  );
};

export default GreenLight;


