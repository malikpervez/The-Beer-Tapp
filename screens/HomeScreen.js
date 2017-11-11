import React, { Component } from 'react';
import {
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    View,
    Button
  } from 'react-native';
  

export default class HomeScreen extends Component{
    static navigationOptions = {
        title: 'welcome',
        header: null
     
    }
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <Text style ={styles.welcome}>
                    The Beer Tapp
                </Text>
                <Button
                    onPress = { () => navigate('Login')}
                    title = 'Login/Signup'
                    color = 'purple'
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'grey',
    },
    welcome: {
      fontSize: 40,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

