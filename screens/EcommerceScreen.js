import React, {Component} from 'react';
import {View,Text,ScrollView,StyleSheet,Image} from 'react-native';
import EHeader from './EHeader';
import Banner from './Banner';
import ContentContainer from './ContentContainer';


export default class EcommerceScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return ( 
        <ScrollView style={styles.container}>
                <EHeader/>
                <Banner/>
                <ContentContainer/>

        </ScrollView>
        );
    }

    static navigationOptions = {
        header: null,
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    }
})