import React, {
    Component
} from 'react';
import {
    View,
    Text,StyleSheet,ImageBackground,Dimensions,Image
} from 'react-native';
import CustomImage from './CustomImage';
import Banner from './Banner';
import ImageOverlay from './ImageOverlay'

export default class ContentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.contentContainer}>

                <View style={styles.col2}>
                    <CustomImage
                        header='Shoes'
                        imageSource={{uri: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}}/>
                </View>

                <View style={styles.col1}>
                    <CustomImage 
                        paragraph='accessories'
                        imageSource={{uri: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80'}}/>
                </View>


                <ImageBackground
                    source={{uri:'https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}}
                    style={styles.contentBanner}>
                        {/* <ImageOverlay
                            header='Shoes'
                            paragraph='accessories'
                        /> */}
                </ImageBackground>
            
                <View style={styles.col2}>
                    <CustomImage imageSource={{uri: 'https://images.unsplash.com/photo-1518946222227-364f22132616?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'}}/>
                </View>

                <View style={styles.col1}>
                    <CustomImage imageSource={{uri: 'https://images.unsplash.com/photo-1547822280-d923f07fffbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80'}}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contentContainer:{
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
    },
    col1:{
        flex:1,
        padding:5
    },
    col2:{
        flex:2,
        padding:5
    },
    contentBanner:{
        width:'100%',
        height:200,
        alignItems: 'center',
        justifyContent:'center',
        padding:5

    }
})