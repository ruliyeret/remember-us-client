import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';

import Icon from '@expo/vector-icons/FontAwesome';

import {AddButton} from "./try";
import Bookmarks from "./Bookmarks";






const BaseNavigator = createBottomTabNavigator({
    Bookmarks: {
        screen: () => Bookmarks,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="bookmark"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
    Likes: {
        screen: () => null,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="heart"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
    Adding: {
        screen: () => null,
        navigationOptions: () => ({
            tabBarIcon: <AddButton />
        })
    },
    Private: {
        screen: () => null,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="lock"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
    Profile: {
        screen: () => null,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="user"
                    color={tintColor}
                    size={24}
                />
            )
        })
    }
}, {
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#F8F8F8',
        inactiveTintColor: '#586589',
        style: {
            height:90,

            backgroundColor: '#171F33'
        },
        tabBarComponent:'TabBarBottom',
        tabStyle: {}
    }
});

const defaultGetStateForAction = BaseNavigator.router.getStateForAction;

// BaseNavigator.router.getStateForAction = (action, state) => {
//     if (action.type === NavigationActions.NAVIGATE && action.routeName === 'Adding') {
//         return null;
//     }
//
//     return defaultGetStateForAction(action, state);
// };

export {BaseNavigator};