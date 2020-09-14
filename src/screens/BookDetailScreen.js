import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

export default class BookDetailScreen extends React.Component {
    render () {

        return (
            <View style={styles.container}>
                <Image
                    style={{width: 320, height: 320}}
                    source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                />

                <View style={styles.bookTitle}>
                    <Text style={{fontSize: 32}}>
                        React Native
                    </Text>
                </View>

                <View style={styles.price}>
                    <Text style={{fontSize: 24}}>
                        600円
                    </Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableHighlight style={styles.button} onPress={() => {}}>
                        <Text style={{fontSize: 32}}>
                            サンプル
                        </Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} onPress={() => {}}>
                        <Text style={{fontSize: 32}}>
                            購入する
                        </Text>
                    </TouchableHighlight>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        padding: 48,
        paddingTop: 96,
    },
    bookTitle: {
        paddingTop: 16,
    },
    price: {
        paddingTop: 8,
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        paddingTop: 48,
        justifyContent: 'space-around',
    },
    button: {
        padding: 4,
        borderWidth: 2,
        borderRadius: 4,
    }
})
