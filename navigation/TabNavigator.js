import React from 'react';
import { Text } from "react-native";
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Edit from '../screens/Edit';
import Matches from '../screens/Matches';
import styles from '../styles'

const ProfileStack = createStackNavigator ({
    Profile: {
        screen: Profile,
        navigationOptions: {
            header: null
        }
    },
    Edit: Edit
});


export default createBottomTabNavigator (
    {
        Profile: {
            screen: ProfileStack,
            navigationOptions: {
                header: null,
                tabBarIcon: ({ focused }) => {
                    const color = focused ? '#FFFFFF' : '#ae9eff';
                    return (
                        <Text style={[styles.iconMenu, { color }]}>
                            <Icon name="user" />
                        </Text>
                    );
                }
            }
        },
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarIcon: ({ focused }) => {
                    const color = focused ? '#FFFFFF' : '#ae9eff';
                    return (
                        <Text style={[styles.iconMenu, { color }]}>
                            <Icon name="search" />
                        </Text>
                    );
                },
                tabBarLabel: 'Explore'
            }
        },
        Matches: {
            screen: Matches,
            navigationOptions: {
                tabBarIcon: ({ focused }) => {
                    const color = focused ? '#FFFFFF' : '#ae9eff';
                    return (
                        <Text style={[styles.iconMenu, { color }]}>
                            <Icon name="heart" />
                        </Text>
                    );
                },
                tabBarLabel: 'Matches'
            },
        }
    },
    {
        navigationOptions: {
            header: null
        },
        tabBarPosition: 'bottom',
        initialRouteName: 'Home',
        tabBarOptions: {
            showIcon: true,
            labelStyle: {
                fontSize: 14,
                textTransform: 'uppercase',
                paddingTop: 0
            },
            activeTintColor: '#FFFFFF',
            inactiveTintColor: '#ae9eff',
            indicatorStyle: {
                borderBottomColor: '#FFFFFF',
                borderBottomWidth: 3,
            },
            style: {
                height: 50,
                backgroundColor: '#6344FF',
                borderTopWidth: 0,
                marginBottom: 0,
                shadowOpacity: 0.05,
                shadowRadius: 10,
                shadowColor: '#000',
                shadowOffset: { height: 0, width: 0 }
            }
        }
    }
);
