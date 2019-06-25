import React, { Component } from 'react'
import { View, Button, Image,Dimensions,StyleSheet} from 'react-native'

export default class SplashScreen extends React.Component {
    componentDidMount(){
    const {navigate} = this.props.navigation;
        setTimeout(() => {
            navigate('Welcome')
            }, 2000);
    }

    render() {
    return (
        <Image 
        source={
                require('../assets/splash.jpg')
            }
            style={styles.welcomeImage}
            />
        );

    }
    static navigationOptions = {
        header: null,
    }
}


const styles = StyleSheet.create({
    container: {
    backgroundColor: '#fff',
    },
welcomeImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'contain'
}
});