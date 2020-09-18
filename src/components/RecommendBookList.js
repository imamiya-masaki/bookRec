import React from "react";
import {StyleSheet, FlatList, Image } from "react-native";
import {
    Layout,
    Text,
} from "@ui-kitten/components";

export default class RecommendBookList extends React.Component {

    renderImage(item) {
        if (item.uri) {
            return (
                <Image 
                    style={styles.image}
                    source={{uri:item.uri}}
                />
            )
        } else {
            return (
                <Image 
                    style={styles.image}
                    source={require('../../assets/noimage.jpg')}
                />
            )
        }
    }

    renderBook({item}) {
        const uri = item.uri ? item.uri : "https://i.imgur.com/v2pLOgS.jpg"
        return (
            <Layout style={styles.bookList}>
                {this.renderImage(item)}
                <Text>
                    {item.title}
                </Text>
            </Layout>
        )
    }

    render() {
        return (
            <Layout>
                <FlatList
                    data={this.props.selectedBooks}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    renderItem={this.renderBook.bind(this)}
                />
            </Layout>
        )
    }
}

const styles = StyleSheet.create({
    bookList: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
    },
    image: { 
        width: 50,
        height: 80,
        resizeMode: 'contain' 
    },
})