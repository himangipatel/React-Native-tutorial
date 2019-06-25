import React, {
    Component
} from 'react';
import {
    View,
    Text,StyleSheet,ImageBackground
} from 'react-native';
import ImageOverlay from './ImageOverlay';

export default class CustomImage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return ( 
            <View>
                <ImageBackground
                    source={this.props.imageSource}
                    style={styles.image}>
                    <ImageOverlay
                        header={this.props.header}
                        paragraph={this.props.paragraph}/>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:200,
        alignItems: 'center',
        justifyContent:'center',
    }
})