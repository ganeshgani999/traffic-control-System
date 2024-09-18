import React, { useEffect } from 'react';
import { useTrafficLight } from '../../context/TrafficLightContext';
import GreenLight from '../GreenLight';
import YellowLight from '../YellowLight';
import RedLight from '../RedLight';
import PedestrianButton from '../PedestrianButton';
import EmergencyOverrideButton from '../EmergencyOverrideButton';
import './index.css'; 

const TrafficLightManager = () => {
  const { state, dispatch } = useTrafficLight();

  useEffect(() => {
    if (state.emergencyOverride) {

      const timer = setInterval(() => {
        if (state.remainingTime > 0) {
          dispatch({ type: 'DECREMENT_TIME' });
        } else {
          
          const nextLight = 'Green'; 
          dispatch({ type: 'CHANGE_LIGHT', payload: nextLight });
        }
      }, 1000); 

      return () => clearInterval(timer); 
    } else if (state.pedestrianRequested) {
      const timer = setInterval(() => {
        if (state.remainingTime > 0) {
          dispatch({ type: 'DECREMENT_TIME' });
        } else {
          const nextLight = 'Green';
          dispatch({ type: 'CHANGE_LIGHT', payload: nextLight });
        }
      }, 1000);

      return () => clearInterval(timer); 
    } else if (state.remainingTime > 0) {
      const countdown = setInterval(() => {
        dispatch({ type: 'DECREMENT_TIME' });
      }, 1000);

      return () => clearInterval(countdown);
    } else {
      let nextLight;
      switch (state.currentLight) {
        case 'Green':
          nextLight = 'Yellow';
          break;
        case 'Yellow':
          nextLight = 'Red';
          break;
        case 'Red':
        default:
          nextLight = 'Green';
      }
      dispatch({ type: 'CHANGE_LIGHT', payload: nextLight });
    }
  }, [state.currentLight, state.remainingTime, state.pedestrianRequested, state.emergencyOverride, dispatch]);

  return (
    <div className="traffic-light-manager">
      <h2>{`Current Light: ${state.currentLight}`}</h2>
      <h3>{`Time remaining: ${state.remainingTime}s`}</h3>
      <div className="lights-container">
        {state.currentLight === 'Green' && <GreenLight />}
        {state.currentLight === 'Yellow' && <YellowLight />}
        {state.currentLight === 'Red' && <RedLight />}
      </div>
      <PedestrianButton />
      <EmergencyOverrideButton />
    </div>
  );
};

export default TrafficLightManager;
