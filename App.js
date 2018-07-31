
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator,createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen'
import FavoritesScreen from './src/screens/FavoritesScreen'
console.disableYellowBox = true
import { updateFocus, getCurrentRouteKey } from 'react-navigation-is-focused-hoc'

const BottomTab = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen
    },
  
    FavoritesScreen : {
      screen : FavoritesScreen
    },
    LoginScreen :{
      screen : LoginScreen
    },   
  }, { 
    swipeEnabled : true,
    headerMode : 'none',
    initialRouteName:'LoginScreen'
  }
);

const Root = createStackNavigator(
  {
    LoginScreen: 
    {
      screen: LoginScreen
    },
    BottomTab:{
      screen: BottomTab
    }
  },
    { 
      swipeEnabled : true,
      headerMode : 'none',
      initialRouteName:'LoginScreen'
    }

)

export default class App extends Component {
  render() {
    return (
      <Root 
      onNavigationStateChange={(prevState, currentState) => {
        updateFocus(currentState)
      }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
