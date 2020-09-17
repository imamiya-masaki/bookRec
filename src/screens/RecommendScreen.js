import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import MyRecommendScreen from './MyRecommendScreen';
import MyRecommendedScreen from './MyRecommendedScreen';
import BookDetailScreen from './BookDetailScreen';

const RecommendStack = createStackNavigator();
const RecommendedStack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function RecommendStackScreen() {
    return (
        <RecommendStack.Navigator screenOptions={{headerShown:false}} >
            <RecommendStack.Screen name="MyRecommend" component={MyRecommendScreen} />
            <RecommendStack.Screen name="BookDetail" component={BookDetailScreen} />
        </RecommendStack.Navigator>
    )
}

function RecommendedStackScreen() {
    return (
        <RecommendedStack.Navigator screenOptions={{headerShown:false}}>
            <RecommendedStack.Screen name="MyRecommended" component={MyRecommendedScreen} />
            <RecommendedStack.Screen name="BookDetail" component={BookDetailScreen} />
        </RecommendedStack.Navigator>
    )
}

export default class RecommendScreen extends React.Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Recommend" component={RecommendStackScreen} />
                <Tab.Screen name="Recommended" component={RecommendedStackScreen} />
            </Tab.Navigator>
        )
    }
}