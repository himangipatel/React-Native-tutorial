import React, { Component } from 'react'
import { Image, Dimensions } from 'react-native'

export default class PropSourceScreen extends Component {
    static navigationOptions = {
        title: 'PropSource'
    };
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={pic} style={{width: Dimensions.get('window').width, height: 200 }}/>
        );
    }
}