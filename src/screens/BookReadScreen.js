import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

export default class BookReadScreen extends React.Component {
    render() {
        return (
            <ApplicationProvider {...eva} theme={eva.light}>
                <Layout style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>
                        BookRead!
                    </Text>
                </Layout>
            </ApplicationProvider>
        )
    }
}