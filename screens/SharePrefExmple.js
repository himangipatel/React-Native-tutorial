import React, {Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,TextInput,Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class SharePrefExmple extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue : '',
            prefValue:''
        };
        this.handleValue= this.handleValue.bind(this)
    }

    componentDidMount(){
        this.getData()
    }

    handleValue(newText){
        this.setState({
            inputValue:newText
        })
    }

    storeData = async () => {
        try {
            await AsyncStorage.setItem('@randomValue', this.state.inputValue)
            this.getData()
        } catch (e) {
          // saving error
        }
    }

    getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@randomValue')
                this.setState({
                    prefValue:value
                })
        } catch(e) {
            alert('catch')
            this.storeData()
        }
        }


    render() {
        return ( 
            <View style={styles.container}>
                <Text style={{ marginLeft: 10,color:'black'}}>Enter Value to store in share-pref</Text>
                <TextInput
                        style={styles.textInput}
                        placeholder='Enter Value'
                        onChangeText={this.handleValue}/>

                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button 
                        title="Save Preference"
                        onPress={()=>this.storeData()}
                        color="#841584" 
                    />
                </View>

                <Text style={styles.textStyle}>SharePref Value: {this.state.prefValue}</Text>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        alignSelf: 'stretch',
        marginLeft: 10,
        marginRight:10,
        marginTop:10,
        borderBottomColor: 'steelblue', // Add this to specify bottom border color
        borderBottomWidth: 2     // Add this to specify bottom border thickness
    },
    textStyle:{
        fontSize:20,
        color:'steelblue',
        marginTop:20
    },
    alternativeLayoutButtonContainer: {
        paddingLeft:30,
        paddingRight:30,
        marginTop:50,
        // flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    }
})