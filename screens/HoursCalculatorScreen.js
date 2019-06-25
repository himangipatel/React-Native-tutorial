import React,{Component} from 'react'
import {StyleSheet,Text,View,Button,TextInput,Dimensions,ScrollView,TouchableOpacity} from 'react-native'

import DateTimePicker from 'react-native-modal-datetime-picker';
import Moment from 'moment';


export default class HoursCalculatorScreen extends Component{

    state={
        mon: '0',
        tue: '0',
        wed: '0',
        thur: '0',
        fri: '0',
        totalHour:0,
        isMonDateTimePickerVisible: false,
        isTueDateTimePickerVisible: false,
        isWedDateTimePickerVisible: false,
        isThuDateTimePickerVisible: false,
        isFriDateTimePickerVisible: false,
        time:'Show DatePicker',
        selectedDay:''
    }   
    

    showMonDateTimePicker  = () => {
        this.setState({ 
            isMonDateTimePickerVisible: true 
            });
    }
    
    showTueDateTimePicker  = () => {
        this.setState({ 
            isTueDateTimePickerVisible: true 
            });
    }

    showWedDateTimePicker  = () => {
        this.setState({ 
            isWedDateTimePickerVisible: true 
            });
    }
    
    showThuDateTimePicker  = () => {
        this.setState({ 
            isThuDateTimePickerVisible: true 
            });
    }

    showFriDateTimePicker  = () => {
        this.setState({ 
            isFriDateTimePickerVisible: true 
            });
    }

    hideDateTimePicker = () => {
            this.setState({
                isMonDateTimePickerVisible: false,
                isTueDateTimePickerVisible: false,
                isWedDateTimePickerVisible:false,
                isThuDateTimePickerVisible:false,
                isFriDateTimePickerVisible:false,
                });
    };
    
    handleMondayDatePicked = date => {
        
            Moment.locale('en');
            // console.log("A date has been picked: ", Moment(date).format("HH:mm"));
            this.setState(
                {  
                    mon:Moment(date).format("HH.mm")
                }
            )
            this.calculateWeekHours(parseFloat(Moment(date).format("HH.mm")),parseFloat(this.state.tue),parseFloat(this.state.wed),parseFloat(this.state.thur),parseFloat(this.state.fri))
            this.hideDateTimePicker();
    };
        

    handleTueDatePicked = date => {
        
        Moment.locale('en');
        this.setState(
            {  
                tue:Moment(date).format("HH.mm")
            }
        )
        this.calculateWeekHours(parseFloat(this.state.mon),parseFloat(Moment(date).format("HH.mm")),parseFloat(this.state.wed),parseFloat(this.state.thur),parseFloat(this.state.fri))
        this.hideDateTimePicker();
};

    handleWedDatePicked = date => {
            
        Moment.locale('en');
        this.setState(
            {  
                wed:Moment(date).format("HH.mm")
            }
        )
        this.calculateWeekHours(parseFloat(this.state.mon),parseFloat(this.state.tue),parseFloat(Moment(date).format("HH.mm")),parseFloat(this.state.thur),parseFloat(this.state.fri))
        this.hideDateTimePicker();
    };

    handleThuDatePicked = date => {
            
        Moment.locale('en');
        this.setState(
            {  
                thur:Moment(date).format("HH.mm")
            }
        )
        this.calculateWeekHours(parseFloat(this.state.mon),parseFloat(this.state.tue),parseFloat(this.state.wed),parseFloat(Moment(date).format("HH.mm")),parseFloat(this.state.fri))
        this.hideDateTimePicker();
    };

    handleFriDatePicked = date => {
            
        Moment.locale('en');
        this.setState(
            {  
                fri:Moment(date).format("HH.mm")
            }
        )
        this.calculateWeekHours(parseFloat(this.state.mon),parseFloat(this.state.tue),parseFloat(this.state.wed),parseFloat(this.state.thur),parseFloat(Moment(date).format("HH.mm")))
        this.hideDateTimePicker();
    };

    changeWedValue(val){
        if(val==null||val==''){
            this.setState(
                {wed:'0'}
            )
            this.calculateWeekHours(parseFloat(this.state.mon),parseFloat(this.state.tue),'0',parseFloat(this.state.thur),parseFloat(this.state.fri))
            return
        }
        this.setState(previousState => (
            { 
                wed:val,
                totalHour: parseFloat(this.state.mon)
                        +parseFloat(this.state.tue)
                        +parseFloat(val)
                        +parseFloat(this.state.thur)
                        +parseFloat(this.state.fri) 
            }
        ))
    }
    

    changeThursValue(val){
        if(val==null||val==''){
            this.setState(
                {mon:'0'}
            )
            this.calculateWeekHours(parseFloat(this.state.mon),parseFloat(this.state.tue),parseFloat(this.state.wed),'0',parseFloat(this.state.fri))
            return
        }
        this.setState(previousState => (
            { 
                thur:val,
                totalHour: parseFloat(this.state.mon)
                        +parseFloat(this.state.tue)
                        +parseFloat(this.state.wed)
                        +parseFloat(val)
                        +parseFloat(this.state.fri) 
            }
        ))
    }
    

    changeFridayValue(val){
        if(val==null||val==''){
            this.setState(
                {fri:'0'}
            )
            this.calculateWeekHours(parseFloat(this.state.mon),parseFloat(this.state.tue),parseFloat(this.state.wed),parseFloat(this.state.thur),'0')
            return
        }
        this.setState(previousState => (
            { 
                fri:val,
                totalHour: parseFloat(this.state.mon)
                        +parseFloat(this.state.tue)
                        +parseFloat(this.state.wed)
                        +parseFloat(this.state.thur)
                        +parseFloat(val) 
            }
        ))
    }
    
    calculateWeekHours(mon,tue,wed,thur,fri){
        this.setState({
                totalHour: parseFloat(mon)
                        +parseFloat(tue)
                        +parseFloat(wed)
                        +parseFloat(thur)
                        +parseFloat(fri) 
        })
    }

    
    render(){

        return(
    <ScrollView>
        <View style={{flex:1,flexDirection: 'column'}}>
            <View style={{flexDirection: 'row',margin:10}}>
            
            <DateTimePicker
                isVisible={this.state.isMonDateTimePickerVisible}
                onConfirm={this.handleMondayDatePicked}
                onCancel={this.hideDateTimePicker}
                mode={'time'}/>

            <Text style={{alignContent:'center', paddingLeft:10}}>Monday: </Text>
    
            <TouchableOpacity onPress={()=>this.showMonDateTimePicker()}>
            <Text style={styles.textInputStyle}>{this.state.mon}</Text>
            </TouchableOpacity>
        
            </View>

            <View style={{flexDirection: 'row',margin:10}}>

            <DateTimePicker
                isVisible={this.state.isTueDateTimePickerVisible}
                onConfirm={this.handleTueDatePicked}
                onCancel={this.hideDateTimePicker}
                mode={'time'}/>

            <Text style={{alignContent:'center', paddingLeft:10}}>Tuesday: </Text>
            
            <TouchableOpacity onPress={()=>this.showTueDateTimePicker()}>
            <Text style={styles.textInputStyle}>{this.state.tue}</Text>
            </TouchableOpacity>

            </View>

            <View style={{flexDirection: 'row',margin:10}}>

            <DateTimePicker
                isVisible={this.state.isWedDateTimePickerVisible}
                onConfirm={this.handleWedDatePicked}
                onCancel={this.hideDateTimePicker}
                mode={'time'}/>

            <Text style={{alignContent:'center', paddingLeft:10}}>Wednesday: </Text>

            <TouchableOpacity onPress={()=>this.showWedDateTimePicker()}>
            <Text style={styles.textInputStyle}>{this.state.wed}</Text>
            </TouchableOpacity>

            </View>

            <View style={{flexDirection: 'row',margin:10}}>

            <DateTimePicker
                isVisible={this.state.isThuDateTimePickerVisible}
                onConfirm={this.handleThuDatePicked}
                onCancel={this.hideDateTimePicker}
                mode={'time'}/>

            <Text style={{alignContent:'center', paddingLeft:10}}>Thursday: </Text>
    
            <TouchableOpacity onPress={()=>this.showThuDateTimePicker()}>
            <Text style={styles.textInputStyle}>{this.state.thur}</Text>
            </TouchableOpacity>

            </View>

            <View style={{flexDirection: 'row',margin:10}}>

            <DateTimePicker
                isVisible={this.state.isFriDateTimePickerVisible}
                onConfirm={this.handleFriDatePicked}
                onCancel={this.hideDateTimePicker}
                mode={'time'}/>

            <Text style={{alignContent:'center', paddingLeft:10}}>Friday: </Text>

            <TouchableOpacity onPress={()=>this.showFriDateTimePicker()}>
            <Text style={styles.textInputStyle}>{this.state.fri}</Text>
            </TouchableOpacity>

            </View>

            <Text
            numberOfLines={1}
            style={styles.bigBlue}>Your Working Hours: {this.state.totalHour}</Text>

            <Text
            numberOfLines={1}
            style={styles.bigBlue}>Remaining Hours: {45-this.state.totalHour}</Text>

        </View>
        
    </ScrollView>
    )
}

}



const styles = StyleSheet.create({
    container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    padding: 16,
    },
    contentContainer: {
        paddingVertical: 20
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
        alignContent:'center'
    },
    textInputStyle: {
    width: 200,
    height: 40,
    resizeMode: 'contain',
    borderColor: 'gray', borderWidth: 1,
    marginLeft:10,
    paddingLeft:10
    }
});