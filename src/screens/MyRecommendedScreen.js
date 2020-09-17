import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

import RecommendBookComponent from '../components/recommendBookComponent'
import RecommendButton from '../components/RecommendButton';

const MYUSERID = 1

export default class RecommendByMeScreen extends React.Component {

    state = {
        data: [],
    }

    constructor(props) {
        super(props);

        this.getRecommendData = this.getRecommendData.bind(this)
        this.getRecommendData()
    }

    getRecommendData() {
        // recommended
        const url = 'http://54.178.65.84:8080/recommend_info?'
        const params = {
            sender_id: MYUSERID
        };
        const query_params = new URLSearchParams(params); 

        fetch(url+query_params)
        .then((response) => response.json())
        .then((responseJson) => {
            let getItems = []
            for (let i=0; i<responseJson.length; i++) {
                getItems.push(responseJson[i])
            }
            this.setState({data: getItems})
        })
        .catch((error) => {
            console.error(error);
        });
    }

    render() {
        // this.getRecommendData();

        return (
            <ApplicationProvider {...eva} theme={eva.light}>
                <Layout>
                   <RecommendBookComponent　data={this.state.data} navDetail={(book) => this.props.navigation.navigate('BookDetailStack', {screen: "BookDetail", params:{book: book} } )}/>
                </Layout>
                <RecommendButton onPress={() => this.props.navigation.navigate("RecommendStack", {screen: "SelectBook", params: {root: "Home"}})}/>
            </ApplicationProvider>
        )
    }
}