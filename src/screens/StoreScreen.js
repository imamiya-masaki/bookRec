import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

export default class StoreScreen extends React.Component {
    render() {
        return (
            <ApplicationProvider {...eva} theme={eva.light}>
                <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>
                        Store!
                    </Text>
                </Layout>
            </ApplicationProvider>
        )
    }
}