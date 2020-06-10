import React from 'react';
import { View, Text } from 'react-native';
import createRoutes from '~/Routes';

// import { Container } from './styles';

const App = () => {
  const signed = false;
  const Routes = createRoutes(signed);
  return (
    <Routes />
  );
}

export default App;