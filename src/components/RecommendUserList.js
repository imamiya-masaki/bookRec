import React from "react";
import {StyleSheet, FlatList, Image } from "react-native";
import {
    Layout,
    Text,
    Avatar
} from "@ui-kitten/components";

export default class RecommendUserList extends React.Component {

    renderBook({item}) {
        const uri = item.uri ? item.uri : "https://i.imgur.com/v2pLOgS.jpg"
        return (
            <Layout style={styles.userList}>
                <Avatar
                    size="large"
                    title="Icon"
                    rounded
                    source={require("../../assets/unknown-person-icon-4.png")}
                />
                <Text>
                    {item.username}
                </Text>
            </Layout>
        )
    }

    render() {
        return (
            <Layout>
                <FlatList
                    data={this.props.selectedUsers}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    renderItem={this.renderBook.bind(this)}
                />
            </Layout>
        )
    }
}

const styles = StyleSheet.create({
    userList: {
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