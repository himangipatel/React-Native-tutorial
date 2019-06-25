import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class FlexboxPropsScreen extends Component {
    static navigationOptions = {
        title: 'Flexbox'
    }
    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
                <View>
                    <Button title='Flex Direction'
                            onPress={() => navigate('FlexDirectionFlexbox')} />
                </View>
                <View style={{marginTop: 10}}>
                    <Button title='Justify Content'
                            onPress={() => navigate('JustifyContentFlexbox')} />
                </View>
                <View style={{marginTop: 10}}>
                    <Button title='Align Items'
                            onPress={() => navigate('AlignItemsFlexbox')} />
                </View>
            </View>
        );
    }
}

