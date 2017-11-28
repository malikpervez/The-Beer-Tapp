import React, { Component } from 'react'; 
import { StackNavigator } from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import firebase from 'firebase';
import HomeScreen from './screens/HomeScreen';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import Beer from './screens/BeerPicker'


const BeerTapp = StackNavigator({
  Home: { screen: HomeScreen },
  Main: { screen: Beer },

});

export default class App extends Component{
  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyD9x22CTli_AZ3oV17HijGZQ66YNztcN0A',
      authDomain: 'thebeertapp.firebaseapp.com',
      databaseURL: 'https://thebeertapp.firebaseio.com',
      projectId: 'thebeertapp',
      storageBucket: 'thebeertapp.appspot.com',
      messagingSenderId: '342136934396'
    })
  }
  render(){
    return <BeerTapp/>
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});