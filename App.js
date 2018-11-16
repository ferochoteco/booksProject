import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { colors, paddings } from './src/components/_base';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/components/screens/HomeScreen';
import CategoriesScreen from './src/components/screens/CategoriesScreen';
import CategoryScreen from './src/components/screens/CategoryScreen';
import BookScreen from './src/components/screens/BookScreen';

export default createStackNavigator (
  {
    Home: {
      screen: HomeScreen
    },
    Categories: {
      screen: CategoriesScreen
    },
    Category: {
      screen: CategoryScreen
    },
    Book: {
      screen: BookScreen
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary
      },
      headerTintColor: colors.normalText,
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);
