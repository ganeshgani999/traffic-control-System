import React from 'react';
import { TrafficLightProvider } from './context/TrafficLightContext';
import TrafficLightManager from './components/TrafficLightManager';

const App = () => {
  return (
    <TrafficLightProvider>
      <TrafficLightManager />
    </TrafficLightProvider>
  );
};

export default App;
