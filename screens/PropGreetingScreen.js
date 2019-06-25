import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Greeting extends Component {
    render() {
        return (
            <View style={{ alignItems:'center' }}>
                <Text>Hello {this.props.userName}!</Text>
            </View>
        );
    }
}

export default class PropGreetingScreen extends Component {
    static navigationOptions = {
        title: 'Greeting'
    }
    render() {
        return(
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around'}}>
                <Greeting userName='Himangi' />
                <Greeting userName='Patel' />
                <Greeting userName='React-Native' />
            </View>
        );
    }
}