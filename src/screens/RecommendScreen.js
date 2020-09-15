import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import RecommendByMeScreen from './RecommendByMeScreen'

const Tab = createMaterialTopTabNavigator();

class Screen2 extends React.Component {
    render() {
        return (
            <ApplicationProvider {...eva} theme={eva.light}>
                <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>
                        Screen2
                    </Text>
                </Layout>
            </ApplicationProvider>
        )
    }
}

export default class ShelfScreen extends React.Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="screen1" component={RecommendByMeScreen} />
                <Tab.Screen name="screen2" component={Screen2} />
            </Tab.Navigator>
        )
    }
}