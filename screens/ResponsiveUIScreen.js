import React, {
    Component
} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,Dimensions,TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Dialog } from 'react-native-simple-dialogs';


export default class ResponsiveUIScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enabled:true
        };
    }

    render() {
        return ( 
            <ScrollView
            scrollEnabled={this.state.enabled}>
            <View style={styles.container}>
                <View style={styles.top}>
                    <Image 
                        style={styles.profileImage} 
                        source={require('../assets/splash.jpg')}/>
                    {/* <View style={styles.profileImage}></View> */}
                </View>

                <View style={styles.center}></View>

                <View style={styles.bottom}>
                    <View style={styles.footer}>
                        <View style={styles.bottomItem}>

                            <View style={styles.bottomItemInner}>
                            <TouchableOpacity onPress={()=>this.setState({dialogVisible: true,
                                dialogImage:'http://images.animalpicturesociety.com/images/03/china_wildlife_panda.jpg'})}>
                                <Image
                                    source={{uri: 'http://images.animalpicturesociety.com/images/03/china_wildlife_panda.jpg'}} 
                                    style={{width:Dimensions.get('window').width/2,height:150}}/>
                            </TouchableOpacity>
                            </View>

                            <View style={{width:5,height:150}}></View>

                            <View style={styles.bottomItemInner}>
                            <TouchableOpacity onPress={()=>this.setState({dialogVisible: true,
                                dialogImage:'http://images.animalpicturesociety.com/images/00/knoxville-zoo-red-panda.jpg'})}>
                                <Image
                                    source={{uri: 'http://images.animalpicturesociety.com/images/00/knoxville-zoo-red-panda.jpg'}} 
                                    style={{width:Dimensions.get('window').width/2,height:150}}/>
                            </TouchableOpacity>
                            </View>

                        </View>

                        <View style={styles.bottomItem}>

                            <View style={styles.bottomItemInner}>
                            <TouchableOpacity onPress={()=>this.setState({dialogVisible: true,
                                dialogImage:'http://images.animalpicturesociety.com/images/00/cute-baby-panda.jpg'})}>
                                <Image 
                                    source={{uri: 'http://images.animalpicturesociety.com/images/00/cute-baby-panda.jpg'}} 
                                    style={{width:Dimensions.get('window').width/2,height:150}}/>            
                            </TouchableOpacity>
                            </View>

                            <View style={{width:5,height:150}}></View>

                            <View style={styles.bottomItemInner}>
                            <TouchableOpacity onPress={()=>this.setState({dialogVisible: true,
                                dialogImage:'http://images.animalpicturesociety.com/images/00/red_panda.jpg'})}>
                                <Image 
                                    source={{uri: 'http://images.animalpicturesociety.com/images/00/red_panda.jpg'}} 
                                    style={{width:Dimensions.get('window').width/2,height:150}}/>
                            </TouchableOpacity>
                            </View>

                        </View>

                        <View style={styles.bottomItem}>
                            <View style={styles.bottomItemInner}>
                            <TouchableOpacity onPress={()=>this.setState({dialogVisible: true,
                                dialogImage:'http://images.animalpicturesociety.com/images/39/giant_pandas_playing.jpg'})}>
                            <Image 
                                source={{uri: 'http://images.animalpicturesociety.com/images/39/giant_pandas_playing.jpg'}} 
                                style={{width:Dimensions.get('window').width/2,height:150}}/>
                            </TouchableOpacity>
                            </View>

                            <View style={{width:5,height:150}}></View>

                            <View style={styles.bottomItemInner}>
                            <TouchableOpacity onPress={()=>this.setState({dialogVisible: true,
                                dialogImage:'http://images.animalpicturesociety.com/images/03/red-panda1.jpg'})}>
                                <Image 
                                    source={{uri: 'http://images.animalpicturesociety.com/images/03/red-panda1.jpg'}} 
                                    style={{width:Dimensions.get('window').width/2,height:150}}/>
                            </TouchableOpacity>
                            </View>

                        </View>
                        <View style={styles.bottomItem}>

                            <View style={styles.bottomItemInner}>
                            <TouchableOpacity onPress={()=>this.setState({dialogVisible: true,
                                dialogImage:'http://csis.msu.edu/sites/csis.msu.edu/files/Munching%20panda_0.jpg'})}>
                            <Image 
                                source={{uri: 'http://csis.msu.edu/sites/csis.msu.edu/files/Munching%20panda_0.jpg'}} 
                                style={{width:Dimensions.get('window').width/2,height:150}}/>
                            </TouchableOpacity>
                            </View>

                            <View style={{width:5,height:150}}></View>

                            <View style={styles.bottomItemInner}>
                            <TouchableOpacity onPress={()=>this.setState({dialogVisible: true,
                                dialogImage:'http://images.animalpicturesociety.com/images/01/panda.jpg'})}>
                            <Image 
                                source={{uri: 'http://images.animalpicturesociety.com/images/01/panda.jpg'}} 
                                style={{width:Dimensions.get('window').width/2,height:150}}/>
                            </TouchableOpacity>
                            </View>

                        </View>
                        <View style={styles.bottomItem}>

                            <View style={styles.bottomItemInner}>
                            <TouchableOpacity onPress={()=>this.setState({dialogVisible: true,
                                dialogImage:'http://images.animalpicturesociety.com/images/me/baby-pandas-hd-wallpaper-1440x900.jpg'})}>
                            <Image 
                                source={{uri: 'http://images.animalpicturesociety.com/images/me/baby-pandas-hd-wallpaper-1440x900.jpg'}} 
                                style={{width:Dimensions.get('window').width/2,height:150}}/>
                            </TouchableOpacity>
                            </View>

                            <View style={{width:5,height:150}}></View>

                            <View style={styles.bottomItemInner}>
                            <TouchableOpacity onPress={()=>this.setState({dialogVisible: true,
                                dialogImage:'http://1.bp.blogspot.com/-51YU-f6BBrc/UAg7sz_4G_I/AAAAAAAABF8/ygeR1XLUuQ0/s1600/Cute+Panda+2.jpg'})}>
                            <Image 
                                source={{uri: 'http://1.bp.blogspot.com/-51YU-f6BBrc/UAg7sz_4G_I/AAAAAAAABF8/ygeR1XLUuQ0/s1600/Cute+Panda+2.jpg'}} 
                                style={{width:Dimensions.get('window').width/2,height:150}}/>
                            </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
                        <Dialog
                            visible={this.state.dialogVisible}
                            animationType='fade'
                            onTouchOutside={() => this.setState({dialogVisible: false})} >
                                <View>
                                    <Image
                                        source={{uri: this.state.dialogImage}}
                                        resizeMode='contain'
                                        style={{width:Dimensions.get('window').width-100,height:200}}/>
                                </View>
                        </Dialog>
            </ScrollView>

            
        );
        
    }
    static navigationOptions = {
        header: null,
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 25,
    },
    top:{
        flex:3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#98d2c1'
    },
    profileImage:{
        width:150,
        height:150,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: '#fff',
        backgroundColor:'#eee',
        margin: 20,
    },
    center:{
        flex:1,
        backgroundColor:'#7fbcac'
    },
    bottom:{
        flex:6,
        backgroundColor:'#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    footer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    bottomItem:{
        flexDirection: 'row',
        padding: 2,
    },
    bottomItemInner:{
        width:Dimensions.get('window').width/2,
        height:150,
        backgroundColor:'#292929',
        
    }
});