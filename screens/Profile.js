import React from 'react';
import { SafeAreaView } from 'react-navigation';
import styles from '../styles'

import {
    Text,
    View
} from 'react-native';

class Profile extends React.Component {
    state = {}

    componentWillMount() { }

    render() {
        return (
            <SafeAreaView>
                <View>
                    <Text>Profile</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default Profile;