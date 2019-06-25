import React, { Component } from 'react'
import { View, Button, ScrollView,StyleSheet} from 'react-native'



export default class WelcomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome'
    };
    render() {
        let imageList =[
            {
                imageURL:'https://images.pexels.com/photos/919436/pexels-photo-919436.jpeg?cs=srgb&dl=adolescent-beautiful-brunette-919436.jpg&fm=jpg',
                imageDesc:'If you do build a great experience, customers tell each other about that. Word of mouth is very powerful.'
            },
            {
                imageURL:'https://images.pexels.com/photos/1260305/pexels-photo-1260305.jpeg?cs=srgb&dl=apple-buy-buying-1260305.jpg&fm=jpg',
                imageDesc:'You should learn from your competitor, but never copy. Copy and you die.'
            },
            {
                imageURL:'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?cs=srgb&dl=classic-clothes-commerce-298863.jpg&fm=jpg',
                imageDesc:'It isn’t just that E-commerce depends on express mail; there’s a sense in which E-commerce is express mail. Right now, billions of dollars are being spent around the country on so-called “last-mile delivery systems.'
            },
            {
                imageURL:'https://images.pexels.com/photos/975250/pexels-photo-975250.jpeg?cs=srgb&dl=attractive-bags-beautiful-975250.jpg&fm=jpg',
                imageDesc:'Create content that teaches. You can’t give up. You need to be consistently awesome.'
            },
            {
                imageURL:'https://images.pexels.com/photos/1390534/pexels-photo-1390534.jpeg?cs=srgb&dl=adult-clothes-commerce-1390534.jpg&fm=jpg',
                imageDesc:'I don’t create companies for the sake of creating companies, but to get things done.'
            }
        ]   
        const {navigate} = this.props.navigation;
        return (
            <ScrollView>
                <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
                    <View style={{marginTop: 10}}>
                    <Button
                        onPress={() =>{this.props.navigation.navigate('HelloWorld', {
                                            itemId: 86,
                                            otherParam: 'anything you want here'});} }
                        title={'Hello World'}/>
                    </View>

                    <View style={{marginTop: 10}}>
                    <Button
                        onPress={() =>{this.props.navigation.navigate('Calculator');} }
                        title={'Calculator'}/>
                    </View>

                    <View style={{marginTop: 10}}>
                    <Button
                        onPress={() =>{this.props.navigation.navigate('ToDoScreen');} }
                        title={'TODO List'}/>
                    </View>
            
                    <View style={{marginTop: 10}}>
                    <Button
                        onPress={() =>{this.props.navigation.navigate('Ecommerce');} }
                        title={'E-Commerce'}/>
                    </View>

                    <View style={{marginTop: 10}}>
                    <Button
                        onPress={() =>{this.props.navigation.navigate('ResponsiveUI');} }
                        title={'ResponsiveUI'}/>
                    </View>

                    <View style={{marginTop: 10}}>
                    <Button
                        onPress={() =>{this.props.navigation.navigate('SharePrefExmple');} }
                        title={'Share-Preference'}/>
                    </View>

                    <View style={{marginTop: 10}}>
                    <Button
                        onPress={() =>{this.props.navigation.navigate('ViewPager',{
                            item:imageList
                        });} }
                        title={'ViewPager'}/>
                    </View>
                    
                    <View style={{marginTop: 10}}>
                        <Button 
                            title='Add Subtract' 
                            onPress={() => navigate('AddSubtract')}/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <Button 
                            title='Prop Source' 
                            onPress={() => navigate('PropSource')}/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <Button
                            title="Prop Greeting"
                            onPress={() => navigate('PropGreeting')}/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <Button
                            title="State Blink"
                            onPress={() => navigate('StateBlink')}/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <Button
                            title="Design Style"
                            onPress={() => navigate('DesignStyle')}/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <Button
                            title="Fixed Dimensions"
                            onPress={() => navigate('FixedDimensions')}/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <Button
                            title="Flex Dimensions"
                            onPress={() => navigate('FlexDimensions')}/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <Button
                            title="Flexbox"
                            onPress={() => navigate('FlexboxProps')}/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <Button
                            title="Pizza Translator"
                            onPress={() => navigate('TextPizzaTranslator')}/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <Button
                            title="Play with Buttons"
                            onPress={() => navigate("PlayWithButtons")} />
                    </View>
                    <View style={{marginTop: 10}}>
                        <Button
                            title="Lists"
                            onPress={() => navigate("Listing")} />
                    </View>
                    <View style={{marginTop: 10}}>
                        <Button
                            title="Cutsom List"
                            onPress={() => navigate("CutomListing")} />
                    </View>
                    <View style={{marginTop: 10}}>
                        <Button
                            title="Network"
                            onPress={() => navigate("NetworkCall")} />
                    </View>
                    
                    <View style={{marginTop: 10}}>
                        <Button
                            title="Hours Calculation"
                            onPress={() => navigate("HoursCalculator")} />
                    </View>

                    <View style={{marginTop: 10}}>
                        <Button
                            title="Pagination"
                            onPress={() => navigate("Pagination")} />
                    </View>

            

                    <View style={{marginTop: 10}}>
                    <Button
                        onPress={() =>{this.props.navigation.navigate('ReactCompo');} }
                        title={'React-Designing-Component'}/>
                    </View>
            
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    
    },
    form: {
    marginTop: 20
    },
    footer: {
        height: 100,
        justifyContent: 'center'
    },
    loginButton: {
    backgroundColor: 'white'
    },
    loginButtonText: {
    color: '#3E464D',
    fontWeight: 'bold'
    },
    signupLink: {
    color: 'rgba(255,255,255,0.6)',
    alignSelf: 'center',
    padding: 20
    }
})
