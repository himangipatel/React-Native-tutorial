import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
    },
});

const CustomRow = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.container}>
        <Image source={{ uri: props.image_url }} style={styles.photo}  />
        <View style={styles.container_text}>
            <Text style={styles.title}>
                {props._key+"  "+ props.title}
            </Text>
            <Text style={styles.description}>
                {props.description}
            </Text>
        </View>

    </View>
    </TouchableOpacity>
);


const CustomNetworkRow = ({ title, description, image_url,_key}) => (
    <View style={styles.container}>
        <Image source={{ uri: image_url }} style={styles.photo}  />
        <View style={styles.container_text} onPress={(e) => alert(title)} >
            <Text style={styles.title} >
                {"-->"+title}
            </Text>
            <Text style={styles.description} >
                {description}
            </Text>
        </View>

    </View>
);


export{
    CustomRow,
    CustomNetworkRow
}
