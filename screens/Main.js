'use strict';
import {
  AppRegistry,
  ActivityIndicator,
  AsyncStorage,
  StyleSheet,
  Text,
  Picker,
  View,
  Image,
  TouchableHighlight,
  ToolbarAndroid
} from 'react-native';
import React, {Component} from 'react';
import MultiSelect from 'react-native-multiple-select';

//figure out MultiSelect 

class Beer extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedItems = [],
    };
  
    this.items = [{
      id: '92iijs7yta',
      name: 'Ondo',
    }, {
      id: 'a0s0a8ssbsd',
      name: 'Ogun',
    }, {
      id: '16hbajsabsd',
      name: 'Calabar',
    }, {
      id: 'nahs75a5sg',
      name: 'Lagos',
    }, {
      id: '667atsas',
      name: 'Maiduguri',
    }, {
      id: 'hsyasajs',
      name: 'Anambra',
    }, {
      id: 'djsjudksjd',
      name: 'Benue',
    }, {
      id: 'sdhyaysdj',
      name: 'Kaduna',
    }, {
      id: 'suudydjsjd',
      name: 'Abuja',
    }];
  }
 

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };


  render(){
    re const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Pick Items"
          searchInputPlaceholderText="Search Items..."
          altFontFamily="ProximaNova-Light"
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="#CCC"
          submitButtonText="Submit"
        />
        <View>
          {this.multiSelect.getSelectedItemsExt(selectedItems)}
        </View>
      </View>
     
      
    )
  }
}

export default Beer;