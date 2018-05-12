import React from 'react';
import LogInPage from './src/page/LogInPage';
import HeaderComponent from './src/page/mainPage/HeaderComponent';
import { IEntityImageProps } from './src/component/EntityImage';
import { ActivityIndicator, Text, View, Button  } from 'react-native';


const tempStories: IEntityImageProps[] = [
  {
    source: '',
    accountName: 'Benny_Ben',
  },
  {
    source: '',
    accountName: 'Benny_Ben',
  },
  {
    source: '',
    accountName: 'Benny_Ben',
  },
  {
    source: '',
    accountName: 'Benny_Ben',
  },
  {
    source: '',
    accountName: 'Benny_Ben',
  },
]

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
        <Button onPress={() => { this.setState({isLoading: !this.state.isLoading})}} title={"flip the state"} />
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <HeaderComponent storyProps={tempStories} />
      </View>
    );
  }
}
