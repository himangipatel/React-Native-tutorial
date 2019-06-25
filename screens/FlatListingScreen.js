import React, { Component } from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    }
})

ListViewItemSeparatorLine = () => {
    return (
    <View
        style={{
        height: .5,
        width: "100%",
        backgroundColor: "#000",
        }}
    />
    );
}


export default class FlatListingScreen extends Component {
    static navigationOptions = {
        title: "Flat List"
    }
    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'}
                    ]}
                    renderItem={({item}) => 
                    <Text style={styles.item} 
                    onPress={() =>{
                                this.props.navigation.navigate('HelloWorld', {
                                    itemId: item.key,
                                    otherParam: item.key,
                                    });} }>
                        {item.key}
                    </Text>} />
            </View>
        );
    }
}