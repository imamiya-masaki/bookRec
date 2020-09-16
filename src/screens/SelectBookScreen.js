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
                title: '鋼の錬金術師',
                uri: 'https://www.cmoa.jp/data/image/title/title_0000037770/VOLUME/100000377700001.jpg'
            },{
                id: '2',
                title: '鋼の錬金術師',
                uri: 'https://www.cmoa.jp/data/image/title/title_0000037770/VOLUME/100000377700001.jpg'
            },{
                id: '3',
                title: '鋼の錬金術師',
                uri: 'https://www.cmoa.jp/data/image/title/title_0000037770/VOLUME/100000377700001.jpg'
            },{
                id: '4',
                title: '鋼の錬金術師',
                uri: 'https://www.cmoa.jp/data/image/title/title_0000037770/VOLUME/100000377700001.jpg'
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
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingRight: 8}}>
                <Image 
                    style={{ width: 100, height: 160 }}
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
                <Layout style={{flex: 1, padding: 24}}>

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
                                                style={{ width: 100, height: 160 }}
                                                source={{uri: item.uri}}
                                            />
                                            <Text>
                                                {item.title}
                                            </Text>
                                    </View>
                                </TouchableHighlight>
                            )}
                    />

                    <FlatList
                        style={{flex: 1}}
                        data={this.state.selectedItems}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        renderItem={this.renderItem}
                    />

                    <Button onPress={() => this.props.navigation.navigate("SelectUser", {selectedBooks: this.state.selectedItems})}>
                        次へ
                    </Button>
    
                </Layout>
            </ApplicationProvider>
        )
    }
}

