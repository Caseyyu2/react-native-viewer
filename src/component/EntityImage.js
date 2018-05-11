import React from 'react';
import { TextInput,Text, View, Button, ImageBackground, StyleSheet } from 'react-native';


//TODO: image source pass in through props
export const EntityImage = (props, context) => {
    return (<View style={styles.CircleConatiner}>
        <ImageBackground source={require('.../../../resource/benny.jpg')} imageStyle={{ borderRadius: 30 }} style={styles.Image}/>
   </View> );
}

const styles = StyleSheet.create({
    Image: {
        height: 60,
        width: 60,
    },
    CircleConatiner: {
        backgroundColor: 'pink',
        padding: 10,
        display: 'flex',
    }
})
