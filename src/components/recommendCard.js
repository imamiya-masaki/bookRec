import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { Avatar, Card } from '@ui-kitten/components';

export default class RecommendCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    renderImage( image ) {
        let uri;
        if (image == null) {
            uri = "https://res.cloudinary.com/teamb/image/upload/v1600318026/noimage_jj1ubq.jpg"
        } else {
            uri = image
        }
        console.log(uri);
        return(
            <Image style={styles.book_image} source={{uri: uri}} />
        )
    }

    render() {
        let { data, navDetail } = this.props;
        let datas = [];

        for (let i=0; i<data.Books.length; i++) {
            datas.push({reactionImages: data.Reactions[i].Uri, bookImages: data.Books[i].uri})
        }
        console.log(datas);
        return (
            <Card>
                <Layout style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
                    <Avatar size='giant' source={{uri: 'https://akveo.github.io/react-native-ui-kitten/images/Artboard-1.png'}}/>
                    <Text style={{padding: 10}}>{data.User.username}</Text>
                </Layout>
                
                <Layout style={{flexDirection: 'row'}}>
                    {datas.map((data, index) => (
                        <Layout key={index}>
                            <Avatar size='giant' source={{uri: data.reactionImages[index]}}/>
                            <TouchableHighlight onPress={() => navDetail(1)} underlayColor='transparent'>
                                {/* <Image style={styles.book_image} source={{uri: data.books.bookImages[index]}}/> */}
                                {this.renderImage(data.bookImages[index])}
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