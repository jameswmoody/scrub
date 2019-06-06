import React from 'react';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat';

import { getMatch } from '../redux/actions';

import {
    Button
} from 'react-native';

class Chat extends React.Component {
    state = {
        messages: []
    };

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.match.name}`,
        headerRight: (
            <Button
                onPress={() => navigation.navigate('MatchProfile', { match: navigation.state.params.match })}
                title='View Profile'
                color='#000000'
            />
        )
    });

    componentWillMount () {
        this.setState({ title: this.props.navigation.state.params.match.name });
        this.props.dispatch(getMatch(this.props.navigation.state.params.match.id));
        firebase.database().ref('cards/' + this.props.user.id + '/chats/' + this.props.navigation.state.params.match.id).on('value', (snap) => {
            let messages = [];
            snap.forEach((message) => {
                if (message.val().id !== this.props.navigation.state.params.match.id) {
                    messages.push(message.val()); 
                }
            });
            messages = messages.reverse();
            this.setState({ messages });
        });
    }

    onSend (messages = []) {
        messages[0].createdAt = new Date().toISOString();
        this.setState(
            previousState => (
                {
                    messages: GiftedChat.append(previousState.messages, messages)
                }
            )
        );
        firebase.database().ref('cards/' + this.props.user.id + '/chats/' + this.props.navigation.state.params.match.id).push(messages[0]);
        firebase.database().ref('cards/' + this.props.navigation.state.params.match.id + '/chats/' + this.props.user.id).push(messages[0]);

    }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: this.props.user.id,
                    name: this.props.user.name,
                    avatar: this.props.user.photoUrl
                }}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        loggedIn: state.loggedIn 
    };
}

export default connect(mapStateToProps)(Chat);

