import React, { Component } from 'react'
import { View, Button, Alert, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default class BasicButtonsScreen extends Component {
    static navigationOptions = {
        title: 'Basic Buttons'
    }

    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    render() {
        return ( 
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Press Me"
                        onPress={this._onPressButton} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Press Me"
                        onPress={this._onPressButton}
                        color="#841584" /> 
                </View>
                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button 
                        title="this looks Great!"
                        onPress={this._onPressButton}
                    />
                    <Button 
                        title="OK!"
                        onPress={this._onPressButton}
                        color="#841584" 
                    />
                </View>
            </View>
        );
    }
}