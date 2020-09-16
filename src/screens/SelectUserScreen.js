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

export default class SelectUserScreen extends React.Component {
   
    state = {
        users: [
            {
                id: 1,
                name: "taro",
            },
            {
                id: 2,
                name: "jiro",
            },
            {
                id: 3,
                name: "sanro",
            }
        ],
        selectedUsers: [],
    }

    addSelectedItem(item) {
        if (this.state.selectedUsers != null && !this.state.selectedUsers.includes(item)) {
            this.setState({
                selectedUsers: this.state.selectedUsers.concat(item)
            })
        }
    }

    render() {
        const { selectedBooks } = this.props.route.params

        return(
            <ApplicationProvider {...eva} theme={eva.light}>
                <Layout style={styles.container}>
                    <Layout style={styles.searchItems}>
                            <Layout style={{flex:1, paddingRight: 8}}>
                                <Input
                                    placeholder="User"
                                    onChangeText={text => this.setState({userName: text})}
                                />
                            </Layout>
                        
                            <Button>
                                検索
                            </Button>
                    </Layout>

                    <FlatList 
                            data={this.state.users}
                            keyExtractor={(item) => item.id}
                            renderItem={ ({item}) => (
                                <TouchableHighlight
                                onPress={() => this.addSelectedItem(item)}
                                underlayColor='transparent'
                                >
                                    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>                                        
                                        <Image 
                                            style={{ width: 100, height: 100 }}
                                            source={{uri: "https://i.imgur.com/AkNqIrO.png"}}
                                        />
                                        <Layout>
                                            <Text>
                                                {item.name}
                                            </Text>
                                        </Layout>
                                    </Layout>
                                </TouchableHighlight>

                            )}
                    />

                    <RecommendUserList selectedUsers={this.state.selectedUsers} />
                    <RecommendBookList selectedBooks={selectedBooks} />

                    <Button onPress={() => this.props.navigation.navigate('SendRecommend',
                        {selectedBooks: selectedBooks,
                        selectedUsers: this.state.selectedUsers,
                    })}>
                        次へ
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
    searchItems: {
        alignItems: 'center',
        flexDirection: "row",
    }
})