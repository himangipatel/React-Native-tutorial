import React, { Component } from 'react'
import { View, Alert, Text, StyleSheet, Platform, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingTop: 45,
        alignItems: 'center'
    },
    buttonContainer: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    }
});

export default class TouchableButtonsScreen extends Component {
    static navigationOptions = {
        title: 'Touchable Buttons'
    }

    _onPressButton() {
        Alert.alert("You tapped the button!")
    }

    _onLongPressButton() {
        Alert.alert("You long-pressed the button!")
    }

    render() {
        return(
            <View style={styles.container}>
                <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>
                            Touchable Highlight - Press
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableOpacity onPress={this._onPressButton}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>
                            Touchable Opacity
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableNativeFeedback 
                    onPress={this._onPressButton}
                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>
                            Touchable Native Feedback 
                        </Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableWithoutFeedback onPress={this._onPressButton}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>
                            Touchable Without Feedback
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableHighlight 
                    onLongPress={this._onLongPressButton}
                    onPress={this._onPressButton}
                    underlayColor="white">
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>
                            Touchable Highlight - Long Press
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}