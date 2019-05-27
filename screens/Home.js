import React from 'react';
import styles from '../styles'
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { login } from '../redux/actions'

import {
    Text,
    View
} from 'react-native';

class Home extends React.Component {
    state = {}

    componentWillMount() {
        this.props.dispatch(login())
    }

    render() {
        return (
            <SafeAreaView>
                <View>
                    <Text styles={styles.container}>{this.props.user}</Text>
                </View>
            </SafeAreaView>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(Home);
