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
        userName: "",
        users: [],
        items: [
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

    componentDidMount() {
        this.setState({users: this.state.items})
    }


    addSelectedItem(item) {
        if (this.state.selectedUsers != null && !this.state.selectedUsers.includes(item)) {
            this.setState({
                selectedUsers: this.state.selectedUsers.concat(item)
            })
        }
    }

    renderImage(item) {
        if (item.uri) {
            return (
                <Image 
                    style={{ width: 100, height: 160 }}
                    source={{uri:uri}}
                />
            )
        } else {
            return (
                <Image 
                    style={{ width: 100, height: 160 }}
                    source={require('../../assets/noimage.jpg')}
                />
            )
        }
    }

    search(userName) {
        if (userName == "") {
            this.setState({users: this.state.items})
        } else {
            let hitUsers = this.state.items.filter(item => item.name.includes(userName))
            this.setState({users: hitUsers})
        }
    }

    render() {
        const { root, selectedBooks } = this.props.route.params

        return(
            <ApplicationProvider {...eva} theme={eva.light}>
                <Layout style={styles.container}>
                    <Layout style={styles.searchItems}>
                            <Layout style={{flex:1, paddingRight: 8}}>
                                <Input
                                    placeholder="ユーザー名"
                                    onChangeText={text => this.setState({userName: text})}
                                />
                            </Layout>
                        
                            <Button onPress={() => this.search(this.state.userName)}>
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
                                <Layout style={styles.userInfo}>  
                                    {this.renderImage(item)}
                                    <Layout>
                                        <Text style={{padding: 16, fontSize: 24}}>
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
                        {root: root,
                         selectedBooks: selectedBooks,
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
    },
    userInfo: {
        flex: 1,
        flexDirection: 'row',
    }
})