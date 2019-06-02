import React from 'react';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import Swiper from 'react-native-deck-swiper'
import Icon from 'react-native-vector-icons/FontAwesome';
const Dimensions = require('Dimensions');
const deviceWidth = Dimensions.get('window').width;

import { getCards } from '../redux/actions';
import Card from '../components/Card';

import styles from '../styles'

import {
    Text,
    Image,
    View,
    Button,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';

class Home extends React.Component {
    componentWillMount () {
        this.props.dispatch(getCards());
    }

    constructor (props) {
        super(props)
        this.state = {
            cardIndex: 0
        }
    }

    renderCard = (card, index) => {
        if (card) {
            return (
                <Card
                    card={card}
                    swipeRight={() => this.swipeRight(card)}
                    swipeLeft={() => this.swipeLeft(card)}
                />
            )
        }
    };

    onSwipe = (card, direction) => {
        const like = direction === 'right';
        firebase.database().ref(`cards/${this.props.user.id}/swipes`).update({ [card.id]: like });
    };

    swipeLeft () {
        this.swiper.swipeLeft();
    }

    swipeRight () {
        this.swiper.swipeRight();
    }

    render() {
        return (
            <View style={[styles.container]}>
                <Swiper
                    ref={swiper => {
                        this.swiper = swiper
                    }}
                    backgroundColor='transparent'
                    containerStyle={{
                        flex: 1,
                        position: 'relative',
                        width: deviceWidth * .88
                    }}
                    cardStyle={{
                        width: '100%'
                    }}
                    cardHorizontalMargin={0}
                    onSwipedLeft={(i) => this.onSwipe(this.props.cards[i], 'left')}
                    onSwipedRight={(i) => this.onSwipe(this.props.cards[i], 'right')}
                    verticalSwipe={false}
                    cards={this.props.cards}
                    cardIndex={this.state.cardIndex}
                    cardVerticalMargin={80}
                    renderCard={this.renderCard}
                    stackSize={3}
                    stackSeparation={15}
                    animateCardOpacity
                />
                <Text style={[styles.paragraph, styles.noCards]}>No one in your area, try again later.</Text>
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

export default connect(mapStateToProps)(Home);
