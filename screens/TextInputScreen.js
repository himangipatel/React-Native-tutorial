import React, { Component } from 'react'
import { View, Button, ScrollView,StyleSheet,TextInput,Text} from 'react-native'


export default class TextInputScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
        this.handleEmailTextChange= this.handleEmailTextChange.bind(this)
        this.handlePasswordTextChange= this.handlePasswordTextChange.bind(this)
    }

    handleEmailTextChange(newText){
        console.log(newText)
        this.setState({
            email:newText
        })
    }

    handlePasswordTextChange(newText){
        this.setState({
            password:newText
        })
    }

    render(){
        const {navigate} = this.props.navigation;
        return(
            <ScrollView>
                <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
                <Text style={{ marginLeft: 10,color:'black'}}>User Email</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Enter Email'
                        keyboardType='email-address'
                        // onChangeText={(email)=>this.setState({email})}
                        onChangeText={this.handleEmailTextChange}
                    />


                <Text style={{ marginLeft: 10,color:'steelblue'}}>User Mobile</Text>

                <TextInput
                    style={styles.textInput}
                    placeholder='Enter Mobile'
                    keyboardType='phone-pad'
                    onChangeText={(text)=>this.setState({phoneNumber:text})}
                    // onChangeText={this.handlePasswordTextChange}
                    />
                    
                <Text style={{ marginLeft: 10,color:'steelblue'}}>User Password</Text>

                    <TextInput
                        secureTextEntry={true}
                        style={styles.textInput}
                        placeholder='Enter Password'
                        keyboardType='default'
                        onChangeText={(text)=>this.setState({password:text})}
                        // onChangeText={this.handlePasswordTextChange}
                        />

                    {/* <Text style={{width:'200',height:'200',backgroundColor:'#841584'}}>
                    LOGIN
                    </Text> */}


                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button 
                        title="LOGIN"
                        onPress={()=>console.log("btn pressed")}
                        color="#841584" 
                    />
                </View>
                    <Text style={styles.textStyle}>Email is: {this.state.email} :--> {this.state.phoneNumber}</Text>
                    <Text style={styles.textStyle}>Password is: {this.state.password}</Text>
                </View>
            </ScrollView>
        )
    }

}

const styles= StyleSheet.create({
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