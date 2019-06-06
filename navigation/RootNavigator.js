import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import TabNavigator from './TabNavigator';

const RootStackNavigator = createStackNavigator({
    Main: {
        screen: TabNavigator
    }
});

const AppContainer = createAppContainer(RootStackNavigator);

export default class RootNavigator extends React.Component {
    render() {
        return <AppContainer />;
    }
}
