import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import ShelfScreen from './ShelfScreen';
import BookDetailScreen from './BookDetailScreen';
import BookReadScreen from './BookReadScreen';

const Stack = createStackNavigator();

export default class ShelfStackScreen extends React.Component {
    render() {
        return(
            <Stack.Navigator>
                <Stack.Screen name="Shelf" component={ShelfScreen} />
                <Stack.Screen name="BookDetail" component={BookDetailScreen} />
                <Stack.Screen name="BookRead" component={BookReadScreen} />
            </Stack.Navigator>
        )
    }
}