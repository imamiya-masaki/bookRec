import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import ShelfScreen from './ShelfScreen';
import BookDetailScreen from './BookDetailScreen';


const BookStack = createStackNavigator();

export default class RecommendStackScreen extends React.Component {
    render() {
        return(
            <RecommendStack.Navigator>
                <RecommendStack.Screen name="BookShelf" component={ShelfScreen} />
                <RecommendStack.Screen name="BookDetail" component={BookDetailScreen} />
            </RecommendStack.Navigator>
        )
    }
}