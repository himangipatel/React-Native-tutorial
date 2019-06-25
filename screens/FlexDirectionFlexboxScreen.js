import React, { Component } from 'react'
import { View } from 'react-native'

export default class FlexDirectionFlexboxScreen extends Component {
    static navigationOptions = {
        title: 'Flexbox Flex Direction'
    }
    render() {
        return(
            <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flex: 0.2, flexDirection: 'row'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
            <View style={{flex: 0.8, flexDirection: 'column'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
            </View>
        );
    }
}