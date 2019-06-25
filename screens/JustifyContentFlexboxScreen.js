import React, { Component } from 'react';
import { View } from 'react-native';

export default class JustifyContentFlexboxScreen extends Component {
    static navigationOptions = {
        title: 'Flexbox Justify Content'
    }
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-evenly'
            }}>
                <View style={{width: 50, height: 50, backgroundColor:'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} /> 
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}