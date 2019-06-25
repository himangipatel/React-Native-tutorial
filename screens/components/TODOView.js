import React, {Component} from 'react';
import {View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity} from 'react-native';
import Note from './Note';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FlatList } from 'react-native-gesture-handler';

export default class TODOView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noteArray:[],
            noteText:'',
            key:-1
        };
    }

    render() {
        
        let notes = this.state.noteArray.map((val,key)=>{
            return <Note key={key} keyval={key} val={val}
                deleteMethod={()=>this.deleteNote(key)}
                editItem={()=>this.editItem(key)}
            />
        })

        let notesList = this.state.noteArray;

        return ( 
            // <KeyboardAwareScrollView >
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>- Noter -</Text>
                </View>

                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>

                {/* <FlatList
                data={this.state.noteArray}
                renderItem={({item}) => 
                <TouchableOpacity style={styles.note} onPress={this.deleteNote(notesList.indexOf(item))}>
                    <Text style={styles.noteText}>{item.date+item.note}</Text>
                </TouchableOpacity>
                }/> */}


                <View style={styles.footer}>
                    <TextInput style={styles.textInput}
                    placeholder='Enter your note'
                    placeholderTextColor='black'
                    onChangeText={(noteText)=>this.setState({noteText})}
                    value={this.state.noteText}>

                    </TextInput>
                </View>

                <TouchableOpacity 
                    style={styles.addButton} 
                    onPress={this.addNotes.bind(this)}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
            // </KeyboardAwareScrollView>
        );
    }

    addNotes(){
        if(this.state.noteText){
                var date = new Date();
            if(key=-1){
                this.state.noteArray.push({
                    'date': date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate() 
                    +" "+ date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(),
                    'note':this.state.noteText
                });
            }else{
                this.state.noteArray[key] = {
                    'date': date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate() 
                    +" "+ date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(),
                    'note':this.state.noteText
                }
            }
                this.setState({ noteArray:this.state.noteArray })
                this.setState({ noteText:'' })
            
        }
    }

    deleteNote(key){
        alert(key)
        this.state.noteArray.splice(key,1);
        this.setState({noteArray:this.state.noteArray})
    }

    editItem(key){
        this.setState({
            noteText : this.state.noteArray[key],
            key:key
        })
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        backgroundColor:'#E91E63',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth:10,
        borderBottomColor: '#ddd',
    },
    headerText:{
        color:'white',
        fontSize:18,
        padding: 26,
    },
    scrollContainer:{
        flex:1,
        marginBottom: 100,
    },
    footer:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        zIndex:10,

    },
    textInput:{
        alignSelf:'stretch',
        color:'#000',
        padding:20,
        borderTopWidth: 2,
        borderTopColor: '#ededed',
    },
    addButton:{
        position:'absolute',
        zIndex:11,
        right:20,
        bottom:90,
        backgroundColor:'#E91E63',
        width:70,
        height:70,
        borderRadius:50,
        alignItems:'center',
        justifyContent: 'center',
        elevation:8
    },
    addButtonText:{
        color:'#fff',
        fontSize:24
    },
    note:{
        position:'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',

    },
    noteText:{
        paddingLeft:20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63',
    }
})