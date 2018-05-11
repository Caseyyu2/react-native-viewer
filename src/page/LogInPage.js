import React from 'react';
import { TextInput,Text, View, Button, StyleSheet } from 'react-native';

const APP_TITILE = 'IG Story Subscriber';

export default class LogInPage extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            password: '',
        };
    }

    onChangeTextUserName(value) {
        this.setState({
            userName: value
        })
    }

    onChangeTextPassword(value) {
        this.setState({
            password: value
        })
    }

    render() {
       return (
            <View style={{display:'flex', flexDirection: 'column', backgroundColor: 'white', height: '100%', width: '100%'}}>
                <View style={styles.textContainerStyle}>
                    <Text style={styles.textStyle}  fontFamily='Cochin'>{APP_TITILE}</Text>
                </View>
                <View style={styles.containerStyle}>
                    <View style={styles.textinputContainerStyle}><TextInput style={styles.textinputStyle} onChangeText={(text) => this.setState({userName: text})} clearButtonMode={'while-editing'} placeholder={'Phone number, user name or email address'} value={this.state.userName}/></View>
                    <View style={styles.textinputContainerStyle}><TextInput style={styles.textinputStyle} onChangeText={(text) => this.setState({pass: text})} clearButtonMode={'while-editing'} placeholder={'Password'} value={this.state.password}/></View>
                    <View style={styles.buttonContainerStyle}><Button onPress={()=> {console.log('to be impemented')}} color='white' title={'Log In'}/></View>
                </View>
            </View>
       ) 
    }
}

const styles = StyleSheet.create({
    textContainerStyle: {
        display: 'flex',
        height: '10%',
        marginLeft: 25,
        marginTop: 110,
    },
    textStyle: {
        fontSize: 40,
    },
    containerStyle: {
        display: 'flex',
        marginTop: 60, 
        marginLeft:10, 
        marginRight:10, 
        justifyContent: 'center'
    },
    textinputContainerStyle: {
        display: 'flex',
        borderColor: '#edebe6',
        backgroundColor: 'pink',
        borderWidth:2,
        margin: 4,
    },
    buttonContainerStyle: {
        display: 'flex',
        width: '80%',
        marginLeft: '10%',
        justifyContent: 'center',
        backgroundColor: '#2196f3',
        marginTop: 8,
        margin:4
    },
    textinputStyle: {
        borderWidth: 5,
        borderColor: 'white',
        height: 40,
        backgroundColor:'white',
    }
})