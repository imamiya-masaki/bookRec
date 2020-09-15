import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

import RecommendBookComponent from '../components/recommendBookComponent'

const MYUSERID = 1
export default class RecommendByMeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.getRecommendData = this.getRecommendData.bind(this)
    }

    getRecommendData() {
        const url = 'http://192.168.3.2:8080/my_recommend?'
        const params = {
            sender_id: MYUSERID
        };
        const query_params = new URLSearchParams(params); 

        return fetch(url+query_params)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        this.getRecommendData();

        return (
            <ApplicationProvider {...eva} theme={eva.light}>
                <Layout>
                    <RecommendBookComponent/>
                </Layout>
            </ApplicationProvider>
        )
    }
}