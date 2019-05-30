import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';

import styles from '../styles'

import {
    Text,
    View
} from 'react-native';

class Chat extends React.Component {
    state = {}

    componentWillMount() { }

    render() {
        return (
            <SafeAreaView style={[styles.container]}>
                <View>
                    <Text>Chat</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default connect(mapStateToProps)(Chat);
