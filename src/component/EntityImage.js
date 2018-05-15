/* @flow */
import React from 'react';
import { Text, ImageBackground, StyleSheet, View } from 'react-native';
import { IUserStoryInfo } from '../page/MainPage';

export default class EntityImage extends React.Component<IUserStoryInfo, {}>
{
    render() {
            //TODO: Uncomment and sorting based on timeStamp
            //<ImageBackground source={{uri: this.props.source}} imageStyle={{ borderRadius: 30 }} style={styles.Image}/>
            return (<View style={styles.CircleConatiner}>
                
                <ImageBackground source={require('../../resource/benny.jpg')} imageStyle={styles.Image} style={styles.Image}/>
                <Text>{this.props.accountName}</Text>
        </View> );
    }
}

const styles = StyleSheet.create({
    Image: {
        borderRadius: 30,
        height: 60,
        width: 60,
    },
    CircleConatiner: {
        padding: 10,
        display: 'flex',
    }
});