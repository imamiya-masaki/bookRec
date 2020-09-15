import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

import RecommendBookComponent from '../components/recommendBookComponent'

export default class RecommendByMeScreen extends React.Component {
    render() {
        return (
            <ApplicationProvider {...eva} theme={eva.light}>
                <Layout>
                    <RecommendBookComponent/>
                </Layout>
            </ApplicationProvider>
        )
    }
}