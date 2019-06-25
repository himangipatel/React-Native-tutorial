import React from 'react';
import { View, ListView, FlatList, StyleSheet, Text } from 'react-native';
import {CustomRow,CustomNetworkRow} from './CustomRow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const CustomListview = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
                data={itemList}
                renderItem={({ item }) => 
                <CustomRow
                    title={item.title}
                    description={item.description}
                    image_url={item.image_url}
                    _key ={item.key}
                    onItemPressed={()=>alert(item.title)}
                />}
            />
    </View>
);

const CustomNetworkListview = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
                data={itemList}
                renderItem={({ item }) => 
                    <CustomNetworkRow
                    title={item.title}
                    description={item.releaseYear}
                    image_url={'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}
                    _key ={item.id}/>
                    }
            />

    </View>
);


export{
    CustomNetworkListview,
    CustomListview
}