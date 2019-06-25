import React, { Component } from 'react'
import { View, Button } from 'react-native'

export default class PlayWithButtonsScreen extends Component {
    static navigationOptions = {
        title: 'Play with Buttons'
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
                <View>
                    <Button 
                        title='Basic Buttons'
                        onPress={() => navigate('BasicButtons')} />
                </View>
                <View style={{marginTop: 10}}>
                    <Button 
                        title='Touchable Buttons'
                        onPress={() => navigate('TouchableButtons')} />
                </View>
            </View>
        );
    }
}