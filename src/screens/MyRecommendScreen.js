import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

import RecommendBookComponent from '../components/recommendBookComponent'

const MYUSERID = 1

let images = [
    'https://www.cmoa.jp/data/image/title/title_0000037770/VOLUME/100000377700001.jpg',
    'https://www.cmoa.jp/data/image/title/title_0000037770/VOLUME/100000377700001.jpg'
];

let reactions = [
    'https://akveo.github.io/react-native-ui-kitten/images/Artboard-1.png',
    'https://akveo.github.io/react-native-ui-kitten/images/Artboard-1.png'
];

let user = {
    username: 'username',
    images: images,
    reactions: reactions
}

let data = []
data.push(user)
data.push(user)
data.push(user)
export default class MyRecommendScreen extends React.Component {
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
        // this.getRecommendData();

        return (
            <ApplicationProvider {...eva} theme={eva.light}>
                <Layout>
                    <RecommendBookComponent　data={data}/>
                </Layout>
            </ApplicationProvider>
        )
    }
}