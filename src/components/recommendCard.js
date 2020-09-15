import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { Avatar } from '@ui-kitten/components';

export default class RecommendCard extends React.Component {
    render() {
        let data = this.props.data;

        let images = data.images;
        let reactions = data.reactions;

        return (
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
                <Layout>
                    <Avatar size='giant' source={{uri: 'https://akveo.github.io/react-native-ui-kitten/images/Artboard-1.png'}}/>
                    <Text>{data.username}</Text>
                </Layout>
                
                <Layout style={{flexDirection: 'row'}}>
                    {images.map((image, index) => (
                        <Layout key={index}>
                            <Avatar size='giant' source={{uri: reactions[index]}}/>
                            <Image style={styles.book_image} source={{uri: image}}/>
                        </Layout>
                    ))}
                </Layout>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    book_image: {
        marginLeft: 15,
        width: 100,
        height: 160
    }
});