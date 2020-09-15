import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { List } from '@ui-kitten/components';

import RecommendCard from '../components/recommendCard'

export default class RecommendBookComponent extends React.Component {
    render() {
        let images = [
            'https://www.cmoa.jp/data/image/title/title_0000037770/VOLUME/100000377700001.jpg',
            'https://www.cmoa.jp/data/image/title/title_0000037770/VOLUME/100000377700001.jpg'
        ];

        let reactions = [
            'https://akveo.github.io/react-native-ui-kitten/images/Artboard-1.png',
            'https://akveo.github.io/react-native-ui-kitten/images/Artboard-1.png'
        ];

        let user = {
            username: 'username',
            images: images,
            reactions: reactions
        }

        let data = []
        data.push(user)
        data.push(user)
        data.push(user)

        const renderItem = ({ item, index }) => {
            return (
                <RecommendCard data={item} />
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