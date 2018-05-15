/* @flow */
import React from 'react';
import EntityImage from './EntityImage';
import { View, ScrollView } from 'react-native';
import { IUserStoryInfo } from '../page/MainPage';

export default class HeaderComponent extends React.Component<IHeaderComponentProps, {}> {

    constructor() {
        super();
    }

    renderStoryCircles(storyProps: IUserStoryInfo[]) {
        let stories = [];
        storyProps.forEach((storyProp: IUserStoryInfo) => {
            stories.push(<EntityImage key={storyProp.accountName} source={storyProp.source} accountName={storyProp.accountName} />)
        })
        

        return <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={scrollView}>
            { stories }
        </ScrollView>
    }

    render() {
        return (<View >
                    {this.renderStoryCircles(this.props.storyProps)}
                </View>);
    }
}

const scrollView = {
    display: 'flex',
    flexDirection: 'row',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e8ea'
}

export interface IHeaderComponentProps {
    storyProps: IUserStoryInfo[]
}
