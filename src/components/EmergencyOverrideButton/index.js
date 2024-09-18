import React from 'react';
import { useTrafficLight } from '../../context/TrafficLightContext';
import './index.css';

const EmergencyOverrideButton = () => {
  const { dispatch } = useTrafficLight();

  const handleClick = () => {
    dispatch({ type: 'EMERGENCY_OVERRIDE' });
  };

  return (
    <button className="emergency-button" onClick={handleClick}>
      Emergency Override
    </button>
  );
};

export default EmergencyOverrideButton;
