import React, { createContext, useReducer, useContext } from 'react';


const initialState = {
  currentLight: 'Green',
  remainingTime: 10,
  pedestrianRequested: false,
  emergencyOverride: false,
};

const trafficLightReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_LIGHT':
      return {
        ...state,
        currentLight: action.payload,
        remainingTime: getRemainingTime(action.payload),
      };
    case 'DECREMENT_TIME':
      return {
        ...state,
        remainingTime: state.remainingTime - 1,
      };
    case 'REQUEST_CROSSING':
      return {
        ...state,
        pedestrianRequested: true,
        currentLight: 'Red',
        remainingTime: 7, 
      };
    case 'RESET_PED_REQUEST':
      return {
        ...state,
        pedestrianRequested: false,
      };
    case 'EMERGENCY_OVERRIDE':
      return {
        ...state,
        emergencyOverride: true,
        currentLight: 'Red',
        remainingTime: state.remainingTime + 5, 
      };
    case 'RESET_TIMER':
      return {
        ...state,
        remainingTime: getRemainingTime(state.currentLight),
      };
    default:
      return state;
  }
};

const getRemainingTime = (light) => {
  switch (light) {
    case 'Green':
      return 10;
    case 'Yellow':
      return 3;
    case 'Red':
      return 7;
    default:
      return 10;
  }
};

const TrafficLightContext = createContext();

export const TrafficLightProvider = ({ children }) => {
  const [state, dispatch] = useReducer(trafficLightReducer, initialState);

  return (
    <TrafficLightContext.Provider value={{ state, dispatch }}>
      {children}
    </TrafficLightContext.Provider>
  );
};

export const useTrafficLight = () => {
  return useContext(TrafficLightContext);
};


