import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, ListView } from 'react-native'

class BeerPicker extends Component {
  constructor(props){
      super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
        this.state = {
            beer = [],
            dataSource: ds.cloneWithRows(['row1', 'row2']),
        };
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