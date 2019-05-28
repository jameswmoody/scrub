import React from 'react';
import { connect } from 'react-redux';

import { SafeAreaView } from 'react-navigation';
import styles from '../styles'

import {
    Text,
    View,
    Image
} from 'react-native';

class Profile extends React.Component {
    state = {}

    componentWillMount() { }

    render() {
        return (
            <SafeAreaView>
                <View>
                    <Text>{this.props.user.name}</Text>
                    <Image style={{width: 75, height: 75}} source={{uri: this.props.user.photoUrl}}/>
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

export default connect(mapStateToProps)(Profile);