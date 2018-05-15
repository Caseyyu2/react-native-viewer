/* @flow */
import React from 'react';
import { Text, ImageBackground, StyleSheet, View, Button, ScrollView } from 'react-native';
import { IUserStoryInfo } from '../page/MainPage';
import { Font } from 'expo';

//TODO: linking react-native-vector icon
//https://github.com/facebook/react-native/issues/18781
export default class UpdateInfo extends React.Component<IStoryUpdateProps,IStoryUpdateState> {

    constructor() {
        super();
        this.state = {
            fontLoaded: false
        }
    }

    //TODO: Adding those as a util function for boot
    async componentDidMount() {
        await Font.loadAsync({
          awesome:
            require('react-native-vector-icons/Fonts/FontAwesome.ttf'),
        });
        this.setState({ fontLoaded: true });
    }

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
                    
                {this.state.fontLoaded ? (
                    <Text
                        style={{
                        fontFamily: 'awesome',
                        fontSize: 40,
                        color: '#52AEF4',
                        }}>
                        {'\uf0ab'}
                    </Text>
                    ) : null}
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
        height: 40,
        width: 40,
    },
    buttonStyle: {
        display: 'flex',
        color: 'yellow',
    }
})

export interface IStoryUpdateProps {
    storyUpdateProps: IUserStoryInfo[];
} 

export interface IStoryUpdateState {
    fontLoaded: boolean;
}