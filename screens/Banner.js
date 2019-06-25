import React, {Component} from 'react';
import {View,Text,ScrollView,StyleSheet,Image,Dimensions,ImageBackground} from 'react-native';
import ImageOverlay from './ImageOverlay'

export default class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
        <ImageBackground
            source={require('../assets/shop2.jpeg')}
            style={styles.banner}>
            <ImageOverlay
                header='- React Native -'
                paragraph='- e-commerce -'
            />
        </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    banner:{
        width:Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent:'center',
        height:280,
        resizeMode: 'cover'
    }
})