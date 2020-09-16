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

export default class SelectRecommendScreen extends React.Component {
   
    state = {
        message: ""
    }

    renderItem({item}) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingRight: 8}}>
                <Image 
                    style={{ width: 50, height: 80, resizeMode: 'contain' }}
                    source={{uri: item.uri}}
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
                    <FlatList
                        data={selectedBooks}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        renderItem={this.renderItem}
                    />

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