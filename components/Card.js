import React from 'react';
import * as firebase from 'firebase';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { getAge } from '../redux/helpers';
import styles from '../styles';

import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback 
} from 'react-native';

class Card extends React.Component {
    state={
        index: 0
    }

    nextPhoto () {
        const length = this.props.card.images.length-1;
        let index = this.state.index;
        if (index >= length) {
            this.setState({ index: 0 });
        } else {
            index+=1;
            this.setState({ index: index });
        }
    }

    render () {
        const userAge = getAge(this.props.user.birthday);
        return (
            <View style={styles.cardShadow}>
                <View style={styles.card}>
                    <TouchableWithoutFeedback onPress={() => this.nextPhoto()}>
                        <Image style={styles.cardImage} source={{ uri: this.props.card.images[this.state.index] }} />
                    </TouchableWithoutFeedback>
                    <View style={styles.infoPill}>
                        <Text style={styles.infoPillText}>{userAge} - {this.props.card.location}</Text>
                    </View>
                    <Text style={styles.header1}>{this.props.card.name}</Text>
                    <Text style={[styles.paragraph, styles.italic]}>{this.props.card.aboutMe}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.matchButton} onPress={() => this.props.swipeLeft(this.props.card)}>
                            <Icon style={styles.dislikeIcon} name='close' />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.matchButton} onPress={() => this.props.swipeRight(this.props.card)}>
                                <Icon style={styles.likeIcon} name='heart' /> 
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        loggedIn: state.loggedIn,
        cards: state.cards,
        user: state.user
    };
}

export default connect(mapStateToProps)(Card);

