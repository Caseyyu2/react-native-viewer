import React from 'react';
import MainPage from './src/page/MainPage';
import { ActivityIndicator, Text, View, Button  } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  render(){

    // if(this.state.isLoading){
    //   return(
    //     <View style={{flex: 1, padding: 20}}>
    //     <Button onPress={() => { this.setState({isLoading: !this.state.isLoading})}} title={"flip the state"} />
    //       <ActivityIndicator/>
    //     </View>
    //   )
    // }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <MainPage />
      </View>
    );
  }
}
