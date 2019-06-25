import React from 'react'
import {StyleSheet,Text,View,Button} from 'react-native'

export default class AddSubtractScreen extends React.Component{

state={
counter: 0
}   

changeCounter(val){
    this.setState(prevState => (
        {
            counter : prevState.counter+val
        }
    ))
}

addOne(){
    this.changeCounter(1);
}

subtractOne(){
    this.changeCounter(-1);
}

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>{this.state.counter}</Text>
                <Button title="Add One" onPress={()=>this.addOne()}/>
                <Button title="Subtract One"onPress={()=>this.subtractOne()}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
container:{
flex:1,
},
welcome: {
fontSize: 30,
textAlign: 'center',
margin: 10,
},
instructions: {
textAlign: 'center',
color: '#333333',
marginBottom: 5,
},  
})
