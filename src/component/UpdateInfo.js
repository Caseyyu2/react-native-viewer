/* @flow */
import React from 'react';
import { Text, ImageBackground, StyleSheet, View, Button, ScrollView } from 'react-native';
import { IUserStoryInfo } from '../page/MainPage';
import Icon from 'react-native-vector-icons/FontAwesome';

//TODO: linking react-native-vector icon
//https://github.com/facebook/react-native/issues/18781
export default class UpdateInfo extends React.Component<storyUpdateProps,{}> {
    
    renderUpdateInfo(storyUpdateProps: IUserStoryInfo[]) {
        let updateInfo = [];
        //<Button title='down' onPress={() => {console.log('todo')}}/>
        storyUpdateProps.forEach((storyUpdateProp: IUserStoryInfo) => {
            updateInfo.push(
            <View key={storyUpdateProp.accountName} style={styles.containerStyle}>
                <ImageBackground source={require('../../resource/benny.jpg')} imageStyle={styles.Image} style={styles.Image}/>
                <View style={styles.InfoContainerStyles}>
                    <Text style={styles.textStyle}>{storyUpdateProp.accountName}</Text>
                    <Text style={styles.textStyle}>{storyUpdateProp.lastUpdateInfo}</Text>
                </View>
                <View style={styles.buttonContainerStyle}>
                    
                    <Icon name="rocket" size={30} color="#900" />
                </View>
            </View>
            )
        })
        return updateInfo;      
    }

    render() {
        return <ScrollView style={{display: 'flex', height: '78%'}}>{this.renderUpdateInfo(this.props.storyUpdateProps)}</ScrollView>;
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        display: 'flex', 
        flexDirection: 'row',
        margin: 10,
    },
    Image: {
        display: 'flex',
        backgroundColor:'blue',
        borderRadius: 24,
        height: 48,
        width: 48,
    },
    InfoContainerStyles: {
        marginTop: 7,
        marginLeft: 20,
        width: '70%',
        flexDirection: 'column',
    },
    buttonContainerStyle:{
        display:'flex', 
        backgroundColor: '#87CEEA',
        height: 40,
        width: 40,
    },
    buttonStyle: {
        display: 'flex',
        color: 'yellow',

    }
})

export interface storyUpdateProps {
    storyUpdateProps: IUserStoryInfo[];
} 