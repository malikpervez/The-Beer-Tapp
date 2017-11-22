import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, ListView } from 'react-native'

class BeerPicker extends Component {
  constructor(props){
      super(props);
      this.state = {
          dataSource: new ListView.DataSource({
              rowHasChanged: (row1, row2) => row1 !== row2,
          }).cloneWithRows(['string1', 'string2', 'string3']),
      }; // need to render into list view
      this.addBeer = this.addBeer.bind(this);
  }
  addBeer(itemValue, itemIndex){ 
    this.setState({
        beer: [...this.state.beer, itemValue]
    });
  }

  renderRow(data) {
    return (
      <Text>{`\u2022 ${data}`}</Text>
    );
  }

   render() {
      return (
         <View>
            <Picker selectedValue = {this.state.dataSource} onValueChange = {this.addBeer}>
               <Picker.item label = 'Choose Beer' value = 'none' />
               <Picker.Item label = "IPA" value = "ipa" />
               <Picker.Item label = "Pilsner" value = "pilsner" />
               <Picker.Item label = "Stout" value = "stout" />
            </Picker>
            <ListView
            dataSource={this.state.beer}
            renderRow={this.renderRow}
            />
            
         </View>
      )
   }
}
export default BeerPicker;

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'black'
   }
})