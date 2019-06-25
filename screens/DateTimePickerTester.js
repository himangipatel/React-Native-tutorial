import React, { Component } from 'react';
import { Button, View,TouchableOpacity ,Text} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Dialog from "react-native-dialog";
import Moment from 'moment';


export default class DateTimePickerTester extends Component {
    constructor(props) {
    super(props);
    this.state = {
        isDateTimePickerVisible: false,
        time:'Show DatePicker',
        dialogVisible: false
    };
    }

    showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {
        this.setState({
            time : Moment(date).format("HH:mm")
        })
    Moment.locale('en');
    console.log("A date has been picked: ", Moment(date).format('LT'));
    this.hideDateTimePicker();
    };

    showDialog = () => {
        this.setState({ dialogVisible: true });
    };
    
    handleCancel = () => {
        this.setState({ dialogVisible: false });
    };
    
    handleDelete = () => {
        // The user has pressed the "Delete" button, so here you can do your own logic.
        // ...Your logic
        this.setState({ dialogVisible: false });
    };

    render() {
    return (
        <>
        <Button title={this.state.time} onPress={this.showDateTimePicker} />
        <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
            mode={'time'}
        />
        <TouchableOpacity onPress={this.showDialog}>
            <Text>Show Dialog</Text>
            </TouchableOpacity>
            <Dialog.Container visible={this.state.dialogVisible}>
            <Dialog.Title>Account delete</Dialog.Title>
        
            <Dialog.Input
            placeholder='Type Here'
            keyboardType='email-address'/>
            <Dialog.Description>
                Do you want to delete this account? You cannot undo this action.
            </Dialog.Description>
            <Dialog.Button label="Cancel" onPress={this.handleCancel} />
            <Dialog.Button label="Delete" onPress={this.handleDelete} />
        </Dialog.Container>
        </>
    );
    }
}