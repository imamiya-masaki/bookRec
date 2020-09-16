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

export default class SelectUserScreen extends React.Component {
   
    state = {
        users: [
            {
                id: 1,
                name: "taro",
                uri: "https://i.imgur.com/AkNqIrO.png",
            },
            {
                id: 2,
                name: "jiro",
                uri: "https://i.imgur.com/AkNqIrO.png",
            },
            {
                id: 3,
                name: "sanro",
                uri: "https://i.imgur.com/AkNqIrO.png",
            }
        ],
        selectedUsers: [],
    }

    renderItem({item}) {
        return (
            <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingRight: 8}}>
                <Image 
                    style={{ width: 50, height: 80, resizeMode: 'contain' }}
                    source={{uri: item.uri}}
                />
                <Text>
                    {item.name}
                </Text>
            </Layout>
        )
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
                            style={{flex: 2}}
                            data={this.state.users}
                            keyExtractor={(item) => item.id}
                            numColumns={2}
                            renderItem={ ({item}) => (
                                <Layout style={{flex: 1, paddingTop: 8}}>
                                    <Layout style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                                        <TouchableHighlight
                                            onPress={() => this.addSelectedItem(item)}
                                            underlayColor='transparent'
                                        >
                                            <Image 
                                                style={{ width: 100, height: 100 }}
                                                source={{uri: item.uri}}
                                            />
                                        </TouchableHighlight>
                                            <Layout>
                                                <Text>
                                                    {item.name}
                                                </Text>
                                            </Layout>
                                    </Layout>
                                </Layout>
                            )}
                    />

                    <FlatList
                        style={{flex: 1, height: 50}}
                        data={this.state.selectedUsers}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        renderItem={this.renderItem}
                    />

                    <FlatList
                        style={{flex: 1}}
                        data={selectedBooks}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        renderItem={this.renderItem}
                    />

                    <Button onPress={() => this.props.navigation.navigate('Home')}>
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