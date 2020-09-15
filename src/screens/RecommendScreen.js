import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MyRecommendScreen from './MyRecommendScreen';
import MyRecommendedScreen from './MyRecommendedScreen';

const Tab = createMaterialTopTabNavigator();

export default class ShelfScreen extends React.Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="screen1" component={MyRecommendScreen} />
                <Tab.Screen name="screen2" component={MyRecommendedScreen} />
            </Tab.Navigator>
        )
    }
}