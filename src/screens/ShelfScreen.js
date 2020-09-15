import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import axios from 'axios';
import {Image, Button,TouchableOpacity} from 'react-native' ; 
import {styles} from 'react-native' ; 
// const BookShelf = () => {
//     let bookShelf = []

// }
export default class ShelfScreen extends React.Component {
  state = {books: []}
    constructor(props) {
      super(props)
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      }
      console.log('!aa!')
    }
    componentDidMount () {
        const url = 'http://127.0.0.1:8080/book/'
        console.log('url', url)
        fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            // console.log('items', result)
            console.log('check', result[0].author)
            let getItems = []
            for (let i= 0; i<result.length; i++) {
              getItems.push(result[i])
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
              error
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
      let set = []
        for (let item of items) {
          set.push(
          <TouchableOpacity
          onPress={() => console.log(item)}>
          <Image
              style={{width: 100, height: 100}}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
          />
          </TouchableOpacity>)
        }
        return (
            <ApplicationProvider {...eva} theme={eva.light}>
                <Layout style={{flex: 1, paddingTop:30}}>
                  <Layout style={{flexDirection: 'row', paddingBottom:10 }}>
                    {set}
                  </Layout>
                  <Layout style={{flexDirection: 'row', paddingBottom:10}}>
                    {set}
                  </Layout>
                </Layout>
            </ApplicationProvider>
        )
    }
}