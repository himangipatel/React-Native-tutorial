import React, {
    Component
} from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';

export default class NestedScrollScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enabled:true
        };
    }

    render() {
        return (
            <ScrollView 
            scrollEnabled={this.state.enabled}
                            >
                            <View style={{height:600,backgroundColor:'violet'}}></View>
                                <View style={{ height: 2000, backgroundColor: 'red' }} >
                                    <ScrollView
                                        onTouchStart={(ev) => { 
                                        this.setState({enabled:false }); }}
                                        onMomentumScrollEnd={(e) => { this.setState({ enabled:true }); }}
                                        onScrollEndDrag={(e) => { this.setState({ enabled:true }); }}
                                        style={{ margin: 10, maxHeight: 200 }} >
                                        <View style={{ height: 200, backgroundColor: 'blue' }} />
                                        <View style={{ height: 200, backgroundColor: 'pink' }} />
                                        <View style={{ height: 200, backgroundColor: 'blue' }} />
                                        <View style={{ height: 200, backgroundColor: 'pink' }} />
                                        <View style={{ height: 200, backgroundColor: 'blue' }} />
                                        <View style={{ height: 200, backgroundColor: 'pink' }} />
                                        <View style={{ height: 200, backgroundColor: 'blue' }} />
                                        <View style={{ height: 200, backgroundColor: 'pink' }} />
                                        <View style={{ height: 200, backgroundColor: 'blue' }} />
                                        <View style={{ height: 200, backgroundColor: 'pink' }} />
                                        <View style={{ height: 200, backgroundColor: 'blue' }} />
                                        <View style={{ height: 200, backgroundColor: 'pink' }} />
                                    </ScrollView>
                                </View>
                            </ScrollView>
        );
    }
}