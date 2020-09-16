import React from "react";
import {StyleSheet, FlatList, View, Image, TouchableHighlight } from "react-native";
import * as eva from "@eva-design/eva";
import {
    ApplicationProvider,
    Layout,
    Button,
    Text,
    Input,
} from "@ui-kitten/components";

import RecommendBookList from '../components/RecommendBookList';
import RecommendUserList from '../components/RecommendUserList';

export default class SelectRecommendScreen extends React.Component {
   
    state = {
        message: ""
    }

    pressSend (selectedBooks, selectedUsers) {
        for (let i=0; i<selectedUsers.length; i++) {
            for (let j=0; j<selectedBooks.length; j++) {
                const data = {
                    "SenderId": 1,
                    "ReceiverId": selectedUsers[i].id,
                    "BookId": selectedBooks[j].id,
                    "ReactionContentId" : 1
                }

                const param = {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                };
                fetch('http://127.0.0.1:8080/recommend', param)
                .then(res => {
                })
                .then(data => {
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        }
        this.props.navigation.navigate("Home")
    }

    render() {
        const { selectedBooks, selectedUsers } = this.props.route.params

        return(
            <ApplicationProvider {...eva} theme={eva.light}>
                <Layout style={styles.container}>
                    <Layout>
                        <Text style={styles.title}>
                            おすすめする本
                        </Text>
                        <RecommendBookList selectedBooks={selectedBooks} />
                    </Layout>

                    <Layout style={{paddingTop: 32}}>
                        <Text style={styles.title}>
                            おすすめするユーザー
                        </Text>
                        <RecommendUserList selectedUsers={selectedUsers} />
                    </Layout>
                    
                    <Layout style={{flex: 1, paddingTop: 32}}>
                        <Text style={styles.title}>
                            メッセージ
                        </Text>
                        <Input
                            style={{paddingTop: 8}}
                            placeholder="メッセージを入力"
                            onChangeText={text => this.setState({message: text})}
                            multiline
                        />
                    </Layout>

                    <Button onPress={() => this.pressSend(selectedBooks, selectedUsers)}>
                        送信する
                    </Button>
                </Layout>
            </ApplicationProvider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    title: {
        fontSize: 24
    },
})