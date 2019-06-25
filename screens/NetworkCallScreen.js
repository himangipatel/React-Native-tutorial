import React, { Component } from 'react'
import { View,StyleSheet, ActivityIndicator, Text, FlatList } from 'react-native'
import { CustomNetworkRow } from './components/CustomRow';
import { CustomNetworkListview } from './components/CustomListview';


export default class NetworkCallScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                }, function() {
                });
            }).catch((error) => {
                console.error(error);
            });
    }

    static navigationOptions = {
        title: "Network"
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
        <View style={{flex: 1, padding: 20}}>
                {/* <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text style={{padding: 10}}>{item.title}, {item.releaseYear}</Text>}
                    keyExtractor={({id}, index) => index}
                /> */}

                <CustomNetworkListview
                    itemList={this.state.dataSource}
                    onPress={() =>{
                        this.props.navigation.navigate('HelloWorld');} }
                    />

                    {/* <View style={styles.container}>
                        <FlatList
                                data={this.state.dataSource}
                                renderItem={({ item }) =>
                                <CustomNetworkRow
                                    title={item.title}
                                    description={item.releaseYear}
                                    image_url={'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}
                                    _key ={item.id}
                                />
                                }
                            />

                    </View> */}


            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});