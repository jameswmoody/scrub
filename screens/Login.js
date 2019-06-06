import React from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import { FB_KEY } from 'react-native-dotenv'
import Icon from 'react-native-vector-icons/FontAwesome';

import RootNavigator from '../navigation/RootNavigator';
import styles from '../styles';
import { login } from '../redux/actions';
import firebaseConfig from '../config/firebase';

firebase.initializeApp(firebaseConfig);

import {
    Text,
    View,
    Alert,
    TouchableOpacity
} from 'react-native';

class Login extends React.Component {
    state = {}

    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user != null) {
                user.birthday = this.state.birthday;
                this.props.dispatch(login(user));
                this.setState({ loggedIn: true });
            }
        });
    }

    login = async () => {
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(FB_KEY, {
            // permissions: ['public_profile', 'user_birthday'],
            permissions: ['public_profile'],
        });
        if (type === 'success') {
            const credential = await firebase.auth.FacebookAuthProvider.credential(token);
            firebase.auth().signInWithCredential(credential)
                .then((response) => {
                    const birthday = response.additionalUserInfo.profile.birthday;
                    this.setState({ birthday });
                })
                .catch((error) => {
                    Alert.alert('Login failed');
                });
        }
    }
 
    render() {
        if (this.state.loggedIn) {
            return (
                <RootNavigator/>
            )
        } else {
            return (
                <View style={[styles.container, styles.login]}>
                    <TouchableOpacity style={styles.fbLoginButton} onPress={this.login.bind(this)}>
                        <Text style={styles.fbLoginText}>
                            <Icon style={styles.fbLoginText} name="facebook-f"/>   Login with Facebook!
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        loggedIn: state.loggedIn 
    };
}

export default connect(mapStateToProps)(Login);
