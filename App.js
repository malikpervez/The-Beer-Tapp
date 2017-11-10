import React, { Component } from 'react'; 
import { StackNavigator } from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import HomeScreen from './screens/HomeScreen';


const BeerTapp = StackNavigator({
  Home: { screen: HomeScreen },

});

export default class App extends Component{
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