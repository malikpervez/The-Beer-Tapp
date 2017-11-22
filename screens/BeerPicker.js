import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

class BeerPicker extends Component {
  constructor(props){
      super(props);
      this.state = {
          beer: []
      };
      this.addBeer = this.addBeer.bind(this);
  }
  addBeer(newbeer){ 
    this.setState({
        beer: [...this.state.beer, newbeer]
    });
}
   render() {
      return (
         <View>
            <Picker selectedValue = {this.state.beer} onValueChange = {this.addBeer}>
               <Picker.Item label = "IPA" value = "ipa" />
               <Picker.Item label = "Pilsner" value = "pilsner" />
               <Picker.Item label = "Stout" value = "stout" />
            </Picker>
            <Text style = {styles.text}>{this.state.beer}</Text>
         </View>
      )
   }
}
export default BeerPicker;

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   }
})