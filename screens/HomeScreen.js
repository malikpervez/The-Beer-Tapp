import React, { Component } from 'react';
import {
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    ImageBackground,
  } from 'react-native';
  

export default class HomeScreen extends Component{
    static navigationOptions = {
        title: 'welcome',
        header: null
     
    }
    render(){
        const { navigate } = this.props.navigation;
        return(
            <ImageBackground
            source={require('../assets/images/beer.jpg')}
            style={styles.container}
            >
                <Text style ={styles.welcome}>
                The Beer Tapp
                </Text>
                <Button
                    onPress = { () => navigate('Main')}
                    title = 'Get Started'
                    color = 'purple'
                />
            </ImageBackground>
       
    
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor:'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
      fontSize: 40,
      textAlign: 'center',
      margin: 10,
      color: 'white'
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

