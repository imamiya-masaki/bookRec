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


                    <Button onPress={() => this.props.navigation.navigate('Home')}>
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