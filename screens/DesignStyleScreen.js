import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30
    },
    red: {
        color: 'red',
        fontSize: 20
    }
});

export default class DesignStyleScreen extends Component {
    static navigationOptions = {
        title: 'Design Styling'
    }
    render() {
        return(
            <View>
                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigBlue}>just bigBlue</Text>
                <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
                <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
            </View>
        );
    }
}