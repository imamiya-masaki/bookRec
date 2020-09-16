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
        selectedBooks: [
        ],
    }

    addSelectedItem(item) {
        if (this.state.selectedBooks != null && !this.state.selectedBooks.includes(item)) {
            this.setState({
                selectedBooks: this.state.selectedBooks.concat(item)
            })
        } 
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

        return(
            <ApplicationProvider {...eva} theme={eva.light}>
                <Layout style={styles.container}>

                    <Layout style={styles.searchItems}>
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
                            data={this.state.data}
                            keyExtractor={(item) => item.id}
                            numColumns={2}
                            renderItem={ ({item}) => (
                                <TouchableHighlight
                                    style={{flex: 1, paddingTop: 8}}
                                    onPress={() => this.addSelectedItem(item)}
                                    underlayColor='transparent'
                                >
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
                        data={this.state.selectedBooks}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        renderItem={this.renderItem}
                    />

                    <Button onPress={() => this.props.navigation.navigate("SelectUser", {selectedBooks: this.state.selectedBooks})}>
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