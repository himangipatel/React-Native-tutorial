import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Blink extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowingText: true
        };

        //To toggle isShowingText value every second
        setInterval(() => (
            this.setState(previousState => (
                { isShowingText: !previousState.isShowingText }
            ))
        ), 1000);
    }
    render() {
        if(!this.state.isShowingText) {
            return null;
        }

        return(
            <Text>{this.props.text}</Text>
        );
    }
}

export default class StateBlinkScreen extends Component {
    static navigationOptions = {
        title: 'Blink'
    }
    render() {
        return (
            <View>
                <Blink text='I love to blink' />
                <Blink text='Yes blinking is so great' />
                <Blink text='Why did they ever take this out of HTML' />
                <Blink text='Look at me look at me look at me' />
            </View>
        );
    }
}