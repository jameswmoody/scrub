import React from 'react';
import { SafeAreaView } from 'react-navigation';
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
            <SafeAreaView>
                <View>
                    <Text>Chat</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default Chat;