import React from 'react';
import { StatusBar, View } from 'react-native';
import Index from './src';

export default function App() {
  return (
    <View >
      <StatusBar backgroundColor="#2851D3" barStyle="light-content" />
      <Index />
    </View>
  );
}

