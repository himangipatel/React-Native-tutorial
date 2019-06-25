import React, {
    Component
} from 'react';
import {
    View,
    Text,StyleSheet,ImageBackground
} from 'react-native';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import CustomImage from './CustomImage';
import { Directions } from 'react-native-gesture-handler';
import ImageOverlay from './ImageOverlay';


export default class ViewPagerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { navigation } = this.props;
        let viewpager =[]
        let imageList = navigation.getParam('item',[])
        

        for(let i=0;i<imageList.length;i++){

            viewpager.push(
                <View key={imageList[i].imageDesc.charAt(3)}>
                    <ImageBackground
                        source={{uri: imageList[i].imageURL}}
                        style={styles.image}>
                        <ImageOverlay
                            header=''
                            paragraph={imageList[i].imageDesc}/>
                    </ImageBackground>
                </View>
            )
        }

        return (
            <View style={{flex:1}}>

                <IndicatorViewPager
                    style={{flex:1}}
                    indicator={this._renderDotIndicator(imageList.length)}>
                    
                    {viewpager}

                    {/* <View style={{backgroundColor:'cadetblue'}}>
                        <Text>page one</Text>
                    </View>

                    <View style={{backgroundColor:'cornflowerblue'}}>
                        <Text>page two</Text>
                    </View>

                    <View style={{backgroundColor:'#1AA094'}}>
                        <Text>page three</Text>
                    </View> */}

                </IndicatorViewPager>
            </View>
        );
    }

    _renderDotIndicator(pages) {
        return <PagerDotIndicator pageCount={pages} />;
    }

    _renderTabIndicator(pages) {
        let tabs =[]

        for(let i=0;i<pages;i++){
            tabs.push({
                text:'One'
            })
        }

        return <PagerTabIndicator tabs={tabs} />;
    }



}


const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:'100%',
        alignItems: 'center',
        justifyContent:'center',
    }
})