import React from 'react';
import { View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from '~/pages/Home';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
// import { Container } from './styles';

export default (signed) =>
  createAppContainer(
    createSwitchNavigator({
      Sign: createSwitchNavigator({
        Home,
        SignIn,
        SignUp,
      }),
      App: createSwitchNavigator({
        Dashboard
      })
    },
      {
        initialRouteName: signed ? 'App' : 'Sign',
      }
    )
  )
