import React from 'react';
import { SafeAreaView } from 'react-navigation';
import styles from '../styles'

import {
    Text,
    View
} from 'react-native';

class Matches extends React.Component {
    state = {}

    componentWillMount() { }

    render() {
        return (
            <SafeAreaView style={[styles.container]}>
                <View>
                    <Text>Matches</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default Matches;