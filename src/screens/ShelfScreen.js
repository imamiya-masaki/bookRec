import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text,Card} from '@ui-kitten/components';
import axios from 'axios';
import {Image, Button,TouchableOpacity, StyleSheet} from 'react-native' ; 
import Header from "../components/Header";
import BookDetailScreen from './BookDetailScreen';
// import Navigation from 'react-native-navigation';
import createStackNavigator from '@react-navigation/stack';
// const BookShelf = () => {
//     let bookShelf = []

// }
export default class ShelfScreen extends React.Component {
  state = {books: []}
  static navigationOptions = {
    title:"BookShelf"
  }
    constructor(props) {
      super(props)
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      }
      console.log('!aa!')
    }
    // onButtonClick = (data) => {
    //   this.props.navigation.navigate('BookDetail', {selectedBook: data})
    // }
    componentDidMount () {
        const url = "http://54.178.65.84:8080/book/";
        console.log('url', url)
        fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            // console.log('items', result)
            console.log('check', result[0].author)
            let getItems = []
            for (let i = 0; i < result.length; i++) {
              if (!result[i].title == "" && !result[i].author == "")
                  getItems.push(result[i]);
            }
            this.setState({
              isLoaded: true,
              items: getItems
            });
          },
          // 補足：コンポーネント内のバグによる例外を隠蔽しないためにも
          // catch()ブロックの代わりにここでエラーハンドリングすることが重要です
          (error) => {
            this.setState({
              isLoaded: true,
              error: error
            });
          }
        )
    }
    getState () { 
        if (this.state.books.length == 0) {
          // console.log('check', this.state)
          // this.fetchBook()
        }
        console.log('checkState', this.state.books)
        return this.state.books
    }
    handleClick(){
      this.props.history.push('/secondpage')
    }
    render() {
      const {error, isLoaded, items} = this.state;
      let itemSeparaite = [[]]
      let index = 0
      for (let item of items) {
        if (itemSeparaite[index].length >=5) {
          index += 1
        }
        let itemImage = "https://res.cloudinary.com/teamb/image/upload/v1600318026/noimage_jj1ubq.jpg"
        if (item.hasOwnProperty('uri') && item.uri.length > 0) {
          itemImage = item.uri
        }
        itemSeparaite[index].push(
          <TouchableOpacity
            onPress={() => {this.props.navigation.navigate('BookDetailStack',{screen : "BookDetail", params: {book: item}} )}}>
          <Image
              style={styles.book_image}
              source={{
                uri: itemImage,
              }}
          />
          </TouchableOpacity>
        )
      }
        let set = []
        for (let i = 0; i<=index; i++){
          set.push(<Layout style={{flexDirection: 'row', paddingBottom:10, borderBottomWidth: 1 }}>
            {itemSeparaite[i]}
          </Layout>)
        }
        return (
            <ApplicationProvider {...eva} theme={eva.light}>
                <Layout style={{flex: 1, paddingTop:30}}>
                  {set}
                </Layout>
            </ApplicationProvider>
        )
    }
}
const styles = StyleSheet.create({
  book_image: {
      marginLeft: 15,
      width: 80,
      height: 120
  }
});
