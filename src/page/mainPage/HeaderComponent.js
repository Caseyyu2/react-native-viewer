/* @flow */
import React from 'react';
import EntityImage from '../../component/EntityImage';
import { IEntityImageProps } from '../../component/EntityImage';
import { View, ScrollView } from 'react-native';

export default class HeaderComponent extends React.Component<IHeaderComponentProps, {}> {

    constructor() {
        super();
    }

    renderStoryCircles(storyProps: IEntityImageProps[]) {
        let stories = [];
        storyProps.forEach((storyProp: IEntityImageProps) => {
            stories.push(<EntityImage source={storyProp.source} accountName={storyProp.accountName} />)
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
}

export interface IHeaderComponentProps {
    storyProps: IEntityImageProps[]
}
