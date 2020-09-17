import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { Avatar, Card } from '@ui-kitten/components';

export default class RecommendCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.cardClick = this.cardClick.bind(this)
    }

    cardClick() {
        console.log('press !!')
    }

    render() {
        let { data, navDetail } = this.props;
        let datas = [];
        for (let i=0; i<data.length; i++) {
            datas.push({reactionImages: data[i].reactionImages, books: data[i].books})
            //本のデータが決まったら
        }
        return (
            <Card onPress={() => this.cardClick()}>
                <Layout style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
                    <Avatar size='giant' source={{uri: 'https://akveo.github.io/react-native-ui-kitten/images/Artboard-1.png'}}/>
                    <Text style={{padding: 10}}>{data.Username}</Text>
                </Layout>
                
                <Layout style={{flexDirection: 'row'}}>
                    {datas.map((data, index) => (
                        <Layout key={index}>
                            <Avatar size='giant' source={{uri: data.reactionImages[index]}}/>
                            <TouchableHighlight style={{backgroundColor:"blue"}} onPress={navDetail(data.books.bookId)} underlayColor='transparent'>
                                <Image style={styles.book_image} source={{uri: data.books.bookImages[index]}}/>
                            </TouchableHighlight>
                        </Layout>
                    ))}
                </Layout>
            </Card>
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