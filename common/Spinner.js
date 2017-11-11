import React, { Component } from 'react';
import { ActivityIndicator, Text } from 'react-native';

class Spinner extends Component{
    render(){
        return(
            <ActivityIndicator>
                <Text>
                    Loading...
                </Text>
            </ActivityIndicator>
        )
    }
}

export default Spinner;