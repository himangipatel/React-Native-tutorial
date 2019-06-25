import React, { Component } from 'react';
import { View ,StyleSheet,Text} from 'react-native';

export default class FlexDimensionsScreen extends Component {
    static navigationOptions = {
        title: 'Flex Dimensions'
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.half1}>
                    <Text style={{fontSize:20,color:'white'}}>This is First half</Text>
                </View>

                <View style={styles.half2}>
                    <View style={styles.half21}>
                    <Text style={{fontSize:20,color:'white'}}>This is Seconf half 1</Text>
                    </View>

                    <View style={styles.half22}>
                    <Text style={{fontSize:20,color:'white'}}>This is Seconf half 2</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5FCFF'
    },
    half1:{
        flex:1,
        backgroundColor:'steelblue',
        justifyContent:'center',
        alignItems:'center'
    },
    half2:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'powderblue'
    },
    half21:{
        flex:1.5,
        backgroundColor :'skyblue',
        justifyContent:'center',
        alignItems:'center'
    },
    half22:{
        flex:0.5,
        backgroundColor:'gray',
        justifyContent:'center',
        alignItems:'center'
    }
})