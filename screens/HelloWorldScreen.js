import React, {Component} from 'react'
import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';


export default class HelloWorldScreen extends Component {
    
    static navigationOptions = {
        title: 'HelloWorld'
    };

    constructor(){
        super()
        this.state={}
        this.state.customStyle={
            color:'green'
        }


        setInterval(() => {
            if (this.state.customStyle.color=='red') {
                this.setState({
                    customStyle:{
                        color:'blue'
                    }
                })       
            }else{
                this.setState({
                    customStyle:{
                        color:'red'
                    }
                })
            }
        }, 5000);

    }

    componentDidMount(){
        this.storeData()
    }

    storeData = async () => {
        try {
            console.log('value stored')
            await AsyncStorage.setItem('@isLogin', 'true')
        } catch (e) {
          // saving error
        }
    }

    getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@isLogin')
            if(value !== null) {
                alert(value)
            }else{
                alert('value')
                this.storeData()
            }
        } catch(e) {
            alert('catch')
            this.storeData()
        }
        }

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');
    
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.getData()}>
                <Text style={[styles.textStyle,this.state.customStyle]}>Hello World</Text>
                </TouchableOpacity>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
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
    textStyle:{
        color:'black',
        fontSize:20
    }
})
