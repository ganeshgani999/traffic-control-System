import React from 'react';
import { useTrafficLight } from '../../context/TrafficLightContext';
import './index.css';

const PedestrianButton = () => {
  const { dispatch } = useTrafficLight();

  const handleClick = () => {
    dispatch({ type: 'REQUEST_CROSSING' });
  };

  return (
    <button className="pedestrian-button" onClick={handleClick}>
      Request Crossing
    </button>
  );
};

export default PedestrianButton;


