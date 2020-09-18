import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MyRecommendScreen from './MyRecommendScreen';
import MyRecommendedScreen from './MyRecommendedScreen';

const Tab = createMaterialTopTabNavigator();

export default class RecommendScreen extends React.Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Recommend" component={MyRecommendScreen} />
                <Tab.Screen name="Recommended" component={MyRecommendedScreen} />
            </Tab.Navigator>
        )
    }
}
