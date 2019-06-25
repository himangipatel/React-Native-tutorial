import React, {Component} from 'react';
import {View,Text,ScrollView,StyleSheet,Image} from 'react-native';


export default class EHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return ( 
            <View style={styles.header}>
                <Image 
                    style={styles.cart} 
                    source={require('../assets/shoppingcart.png')}/>
                <Text style={styles.logo}>E-Commerce</Text>
            </View>
        );
    }

    static navigationOptions = {
        header: null,
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000',
    },
    header:{
        height:80,
        backgroundColor:'#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        padding: 20,
        borderBottomWidth: 4,
        borderBottomColor: '#ccc',
    },
    cart:{
        width:25,
        height:25
    },
    logo:{
        fontSize:20,
        marginLeft: 10,
        fontStyle: 'italic',
        color:'#292929'
    }
})