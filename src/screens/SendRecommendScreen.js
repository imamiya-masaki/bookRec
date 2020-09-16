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

export default class SelectRecommendScreen extends React.Component {
   
    state = {
        message: ""
    }

    renderItem({item}) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingRight: 8}}>
                <Image 
                    style={{ width: 50, height: 80, resizeMode: 'contain' }}
                    source={{uri: "https://www.cmoa.jp/data/image/title/title_0000037770/VOLUME/100000377700001.jpg"}}
                />
                <Text>
                    {item.title}
                </Text>
            </View>
        )
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
                    <FlatList
                        data={selectedUsers}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        renderItem={this.renderItem}
                    />
                    
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