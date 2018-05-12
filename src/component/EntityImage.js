/* @flow */
import React from 'react';
import { Text, ImageBackground, StyleSheet, View } from 'react-native';

//TODO: image source pass in through props
export default class EntityImage extends React.Component<IEntityImageProps, {}>
{
    render() {
            return (<View style={styles.CircleConatiner}>
                <ImageBackground source={require('../../resource/benny.jpg')} imageStyle={{ borderRadius: 30 }} style={styles.Image}/>
                <Text>{this.props.accountName}</Text>
        </View> );
    }
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

//@flow
export interface IEntityImageProps{
    source: string,
    accountName: string,
}
