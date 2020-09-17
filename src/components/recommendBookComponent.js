import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { List } from '@ui-kitten/components';

import RecommendCard from '../components/recommendCard'

export default class RecommendBookComponent extends React.Component {
    render() {
        let { data, navDetail } = this.props
        const renderItem = ({ item, index }) => {
            return (
                <RecommendCard data={item} navDetail={navDetail}/>
            )
        }

        return (
            <List
                style={styles.container}
                data={data}
                renderItem={renderItem}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        maxHeight: '100%',
    },
});