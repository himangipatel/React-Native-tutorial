import React, { Component } from 'react';
import {CustomListview} from './components/CustomListview'
import {
StyleSheet,
View,FlatList,Text
} from 'react-native';
import {CustomRow,CustomNetworkRow} from './components/CustomRow';
import { Dialog } from 'react-native-simple-dialogs';

export default class CustomListviewScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            enabled:true,
            title:''
        };
    }

  /* Return object for populate the list */
    getData() {
        return [
        {
            key: 1, title: 'Albert Einstein',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
        },
        {
            key: 2,
            title: 'Isaac newton',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
        },
        {
            key: 3, title: 'Albert Einstein',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
        },
        {
            key: 4,
            title: 'Isaac newton',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
        },
        {
            key: 5, title: 'Albert Einstein',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
        },
        {
            key: 6,
            title: 'Isaac newton',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
        },
        {
            key: 7, title: 'Albert Einstein',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
        },
        {
            key: 8,
            title: 'Isaac newton',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
        },
        {
            key: 9, title: 'Albert Einstein',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
        },
        {
            key: 10,
            title: 'Isaac newton',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
        },
        ]
    }


    render() {
        return (
        <View style={styles.container}>
            {/* <CustomListview
                itemList={this.getData()}
            /> */}

            <FlatList
                    data={this.getData()}
                    renderItem={({ item }) => 
                    <CustomRow
                        title={item.title}
                        description={item.description}
                        image_url={item.image_url}
                        _key ={item.key}
                        onItemPressed={()=>this.setState({
                            title:item.title,
                            dialogVisible:true
                        })}
                    />}
                />
                            <Dialog
                                visible={this.state.dialogVisible}
                                animationType='fade'
                                onTouchOutside={() => this.setState({dialogVisible: false})} >
                                    <View>
                                        <Text>{this.state.title}</Text>
                                    </View>
                            </Dialog>
        </View>
        );
    }
    }

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
}
});