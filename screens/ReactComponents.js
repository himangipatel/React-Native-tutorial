import React, { Component } from 'react'
import { View, Button, ScrollView,StyleSheet} from 'react-native'

export default class ReactComponents extends Component{
    static navigationOptions = {
        title: 'Introduction to Components'
    };

    render(){
        const {navigate} = this.props.navigation;
        return(
            <ScrollView>
                <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
                <View style={{marginTop: 10}}>
                    <Button
                        onPress={() =>{this.props.navigation.navigate('TextInput');} }
                        title={'TextInput'}/>
                    </View>
                </View>
            </ScrollView>
        )
    }
}