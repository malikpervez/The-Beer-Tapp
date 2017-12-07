import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, ListView, Button } from 'react-native'

const ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});

export default class BeerPicker extends Component {
    constructor(props){
      super(props);

      this.state = {
        beer: [],
        beerDataSource: ds.cloneWithRows([]),
        items: [
          {label: 'Choose Beer', value: 'none'}, 
          {label: 'IPA', value: 'ipa'}, 
          {label: 'Pilsner', value: 'pilsner'}, 
          {label: 'Stout', value: 'stout'}
        ],
        selectedItem: 'none',
        apiData: {}
      };

      this.addBeer = this.addBeer.bind(this);
    }

    componentWillMount(){
      var url = 'http://api.brewerydb.com/v2/categories?key=5053c1b1adbf78f4fad3f09b45add87c'
    }

    addBeer(itemValue, itemIndex){ 
      let newBeerArray = [...this.state.beer, itemValue];
      this.setState({
        beer: newBeerArray,
        selectedItem: itemValue,
        beerDataSource: ds.cloneWithRows(newBeerArray),
      });
      fetchBeerFromApi = async (beerId) => {
        let response = await fetch(`5053c1b1adbf78f4fad3f09b45add87c/beer/${beerId}`);
        response = await response.json();
      
        if (response.error) {
          console.error('Error with brewery api beer request', response.error);
          return false;
        }
        const apiData = this.state.apiData;
        apiData[beerId] = response;
        // Or handle storing apiData somewhere else... I usually use immutable data
        // structures to avoid deeply nested data not triggering re-rendering issues
        // so this may or may not be problematic...
        // Here is the immutablejs alternative to those last two lines:
        // const apiData = this.state.apiData.set(beerId, response);
      
        // Here we store it back to state where you can handle rendering the data if
        // it is available
        this.setState({apiData});
      }
    }

    renderRow(data) {
      return (
        <Text>{`\u2022 ${data}`}</Text>
      );
    }

    render() {
      const { navigate } = this.props.navigation;
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
          <Button
            onPress = { () => navigate('Home')}
            title = 'Next'
            color = 'purple'/>
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