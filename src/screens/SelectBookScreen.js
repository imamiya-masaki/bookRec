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

export default class SelectBookScreen extends React.Component {

    state = {
        data: [
            {
                id: '1',
                title: 'Naruto',
                uri: 'https://reactnative.dev/img/tiny_logo.png'
            },{
                id: '2',
                title: 'Naruto',
                uri: 'https://reactnative.dev/img/tiny_logo.png'
            },{
                id: '3',
                title: 'Naruto',
                uri: 'https://reactnative.dev/img/tiny_logo.png'
            },{
                id: '4',
                title: 'Naruto',
                uri: 'https://reactnative.dev/img/tiny_logo.png'
            },
        ],
        selectedItems: [
        ],
    }

    addSelectedItem(item) {
        this.setState({
            selectedItems: this.state.selectedItems.concat(item)
        })
    }

    renderItem({item}) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image 
                    style={{ width: 100, height: 100 }}
                    source={{uri: item.uri}}
                />
                <Text>
                    {item.title}
                </Text>
            </View>
        )
    }

    render() {

        return(
            <ApplicationProvider {...eva} theme={eva.light}>
                <Layout style={{flex: 1, padding: 24, paddingTop: 64}}>

                    <Layout style={{alignItems: 'center',flexDirection: "row", backgroundColor:"#ddd"}}>
                        <Layout style={{flex:1, paddingRight: 8}}>
                            <Input
                                placeholder="Book"
                                onChangeText={text => this.setState({bookTitle: text})}
                            />
                        </Layout>
                    
                        <Button>
                            検索
                        </Button>

                    </Layout>
                    
                    <FlatList 
                            style={{flex: 1}}
                            data={this.state.data}
                            keyExtractor={(item) => item.id}
                            numColumns={2}
                            renderItem={ ({item}) => (
                                <TouchableHighlight style={{flex: 1, paddingTop: 8}} onPress={() => this.addSelectedItem(item)}>
                                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                            <Image 
                                                style={{ width: 100, height: 100 }}
                                                source={{uri: item.uri}}
                                            />
                                            <Text>
                                                {item.title}
                                            </Text>
                                    </View>
                                </TouchableHighlight>
                            )}
                    />

                    <Button onPress={() => this.props.navigation.navigate("SelectUser")}>
                        次へ
                    </Button>

                    <FlatList
                        style={{flex: 1, height: 100}}
                        data={this.state.selectedItems}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        renderItem={this.renderItem}
                    />
    
                </Layout>
            </ApplicationProvider>
        )

    }
}

