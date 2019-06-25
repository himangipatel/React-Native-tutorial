import React, { Component } from 'react'
import { View, Button } from 'react-native'

export default class ListingScreen extends Component {
    static navigationOptions = {
        title: "Lists"
    }

    render() {
        const {navigate} = this.props.navigation 
        return(
            <View style={{flex: 1, padding: 20, justifyContent: 'center'}}>
                <View>
                    <Button
                        title="Flat List"
                        onPress={() => navigate('FlatListing')} />
                </View>
                <View style={{marginTop: 20}}>
                    <Button
                        title="Section List"
                        onPress={() => navigate('SectionListing')} />
                </View>
            </View>
        );
    }
}