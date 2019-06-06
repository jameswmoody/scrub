import React from 'react';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import styles from '../styles'

import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';

class Matches extends React.Component {
    state = {
        chats: []
    };

    componentWillMount () {
        firebase.database().ref('cards/' + this.props.user.id + '/chats').on('value', (snap) => {
            const items = [];
            snap.forEach((child) => {
                item = child.val();
                items.push(item); 
            });
            this.setState({ chats: items.reverse() });
        });
    }

    truncateText (text, limit) {
        return ((text).length > limit) ? (((text).substring(0, limit-3)) + '...') : text;
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={styles.main}>
                <ScrollView style={styles.matchList}>
                    {this.state.chats.map((match, index)=>{
                        return (
                            <TouchableOpacity key={index} style={[styles.imgRow, styles.match]} onPress={() => navigate('Chat', {match: match.user})}>
                                <Image style={styles.img} source={{uri: match.user.photoUrl}}/>
                                <View>
                                    <Text style={styles.bold}>{match.user.name}</Text>
                                    <Text style={[styles.paragraph, styles.italic, styles.matchDiscription]}>{this.truncateText(match.user.aboutMe, 100)}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </SafeAreaView>
        )
    }
}

function mapStateToProps(state) {
    return { 
        user: state.user
    };
}

export default connect(mapStateToProps)(Matches);
