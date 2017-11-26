import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, ListView } from 'react-native'

const ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
//send in data through brewerydb
export default class BeerPicker extends Component {
    constructor(props){
      super(props);

      this.state = {
        beer: [],
        beerDataSource: ds.cloneWithRows([]),
        dataSource: ds.cloneWithRows(['string1', 'string2', 'string3']), //It seems to be not needed...
        items: [
          {label: 'Choose Beer', value: 'none'}, 
          {label: 'IPA', value: 'ipa'}, 
          {label: 'Pilsner', value: 'pilsner'}, 
          {label: 'Stout', value: 'stout'}
        ],
        selectedItem: 'none'
      };

      this.addBeer = this.addBeer.bind(this);
    }

    addBeer(itemValue, itemIndex){ 
      let newBeerArray = [...this.state.beer, itemValue];
      this.setState({
        beer: newBeerArray,
        selectedItem: itemValue,
        beerDataSource: ds.cloneWithRows(newBeerArray),
      });
    }

    renderRow(data) {
      return (
        <Text>{`\u2022 ${data}`}</Text>
      );
    }

    render() {
      let items = this.state.items.map((item, index) => {
        return (<Picker.item label={item.label} value={item.value} key={index}/>);
      });

      return (
        <View>
          <Picker selectedValue={this.state.selectedItem} onValueChange = {this.addBeer}>
            {items}
          </Picker>
          <ListView
            dataSource={this.state.beerDataSource}
            renderRow={this.renderRow}/>
        </View>
      )
    }
}

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'black'
   }
});