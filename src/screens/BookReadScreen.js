import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button} from '@ui-kitten/components';
import { StyleSheet, Image } from "react-native";
export default class BookReadScreen extends React.Component {
    state = {page: 0, my: false, maxpage: 0, isLoaded: false, error: null, pages: []}
    static navigationOptions = {
      title:"BookRead"
    }
      constructor(props) {
        super(props)
        this.state = {page: 0, my: false, maxpage: 0, isLoaded: false, error: null, pages: []}
        console.log('!aa!')
        // console.log('check', this.props.route.book, this.props.route.my, this.props.route.params.my, this.props.route)
      }
      // onButtonClick = (data) => {
      //   this.props.navigation.navigate('BookDetail', {selectedBook: data})
      // }
      onNext () {
        if (this.state.page < this.state.maxpage) {
        }
        this.setState({
            isLoaded: true,
            page: this.state.page+1,
            my: this.state.my,
            maxpage: this.state.maxpage,
            pages: this.state.pages
          });
      }
      onPrev () {
        if (this.state.page > 0) {
        }
        this.setState({
            isLoaded: true,
            page: this.state.page-1,
            my: this.state.my,
            maxpage: this.state.maxpage,
            pages: this.state.pages
          });
      }
      renderImage() {
          let uri = this.state.pages[this.state.page]
        if (uri == null || uri == "") {
          uri = 'https://res.cloudinary.com/teamb/image/upload/v1600318026/noimage_jj1ubq.jpg'
        }
        return (
          <Image style={{ width: 320, height: 400 }} source={{uri: uri}} />
        )
      }
      componentDidMount () {
          const my = this.props.route.params.my
          let url = "http://54.178.65.84:8080/bookPage/1/30";
          if (!my) {
              url = url + "10"
          }
          console.log('url', url)
          fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
              // console.log('items', result)
              console.log('check', result)
              let getItems = []
              const max = result.length
              for (let i = 0; i < result.length; i++) {
                    getItems.push(result[i].uri);
              }
              this.setState({
                isLoaded: true,
                page: 0,
                my: my,
                maxpage: max,
                pages: getItems
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
    render() {
        return (
            <ApplicationProvider {...eva} theme={eva.light}>
                {/* <Layout style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Image 
                    style={}
                    source={this.state.pages[this.state.page]}
                    > 
                    </Image>
                </Layout> */}
                <Layout style={styles.container}>
                {this.renderImage()}
                    <Layout style={styles.buttonContainer_prev}>
                    <Button onPress={() => this.onPrev()}>
                        prev
                    </Button>
                    <Button onPress={() => this.onNext()}>
                        next
                    </Button>
                    </Layout>
                </Layout>
            <Text>{this.state.page+1} / {this.state.maxpage+1}</Text>
            </ApplicationProvider>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      alignItems: "center",
      padding: 48,
      paddingTop: 96,
    },
    bookTitle: {
      paddingTop: 16,
    },
    price: {
      paddingTop: 8,
    },
    buttonContainer_next: {
      width: "100%",
      flexDirection: "row",
      paddingTop: 48,
      justifyContent: "space-around",
    },
    buttonContainer_prev: {
        width: "100%",
        flexDirection: "row",
        paddingTop: 48,
        justifyContent: "space-around",
      },
  });