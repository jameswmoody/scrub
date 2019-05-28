import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';

import styles from '../styles'

import {
    Text,
    View,
    Alert
} from 'react-native';

class Home extends React.Component {
    state = {}

    componentWillMount() {

    }

    render() {
        return (
            <SafeAreaView>
                <View>
                    <Text styles={styles.container}>Home</Text>
                </View>
            </SafeAreaView>
        )
    }
}

function mapStateToProps(state) {
    return {
        loggedIn: state.loggedIn
    };
}

export default connect(mapStateToProps)(Home);
