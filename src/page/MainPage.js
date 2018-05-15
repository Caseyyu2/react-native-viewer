/* @flow */
import HeaderComponent from '../component/HeaderComponent';
import UpdateInfo from '../component/UpdateInfo';
import { View } from 'react-native';
import React from 'react';

const tempStories = [
    {
      source: '',
      accountName: 'Benny_Ben1',
      lastUpdateInfo: '1 hour ago',
    },
    {
      source: '',
      accountName: 'Benny_Ben2',
      lastUpdateInfo: '2 hour ago',
    },
    {
      source: '',
      accountName: 'Benny_Ben3',
      lastUpdateInfo: '3 hour ago',
    },
    {
      source: '',
      accountName: 'Benny_Ben4',
      lastUpdateInfo: '4 hour ago',
    },
    {
      source: '',
      accountName: 'Benny_Ben5',
      lastUpdateInfo: '5 hour ago',
    },
  ]

export default class MainPage extends React.Component<IMainPageProps, {}> {
    render() {
        return (
            <View>
                <HeaderComponent storyProps={tempStories}/>
                <UpdateInfo storyUpdateProps={tempStories} />
            </View>
        )
    }
}

export interface IUserStoryInfo {
    accountName: string;
    source: string;
    lastUpdateInfo: string;
}

export interface IMainPageProps {
    mainPageProps: IUserStoryInfo[];
}