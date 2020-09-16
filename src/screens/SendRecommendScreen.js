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
                    <Text>
                        おすすめする本
                    </Text>
                    <RecommendBookList selectedBooks={selectedBooks} />

                    <Text>
                        本をおすすめするユーザー
                    </Text>
                    <RecommendUserList selectedUsers={selectedUsers} />
                    
                    <Input
                        placeholder="メッセージを入力"
                        onChangeText={text => this.setState({message: text})}
                    />

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
})