import React, {
    Component
} from 'react';
import {
    View,
    Text
} from 'react-native';
import TODOView from './components/TODOView';


export default class TODOScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <TODOView/>
        );
    }
    
    static navigationOptions = {
        header: null,
    }
}