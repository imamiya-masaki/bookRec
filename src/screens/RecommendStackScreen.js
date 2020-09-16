import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import SelectBookScreen from './SelectBookScreen';
import SelectUserScreen from './SelectUserScreen';
import SendRecommendScreen from './SendRecommendScreen';

const RecommendStack = createStackNavigator();

export default class RecommendStackScreen extends React.Component {
    render() {
        return(
            <RecommendStack.Navigator>
                <RecommendStack.Screen name="SelectBook" component={SelectBookScreen} />
                <RecommendStack.Screen name="SelectUser" component={SelectUserScreen} />
                <RecommendStack.Screen name="SendRecommend" component={SendRecommendScreen} />
            </RecommendStack.Navigator>
        )
    }
}