import React from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import {
    Text,
    View,
    Image
} from 'react-native';

import { getAge } from '../redux/helpers';
import styles from '../styles';

class MatchProfile extends React.Component {
    render() {
        const match = this.props.match;
        const userAge = getAge(match.birthday);
        return (
            <ScrollView style={[styles.main]} bounces={false}>
                <View style={[styles.container]}>
                    <ScrollView
                        ref={(scrollView) => { _scrollView = scrollView; }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        bounces={false}
                        pagingEnabled={true}
                    >
                        {match.images.map((uri, index) => {
                            return (
                                <Image key={index} style={styles.profileImg} source={{ uri }} />
                            );
                        })}
                    </ScrollView>
                    <View style={styles.profile}>
                        <Text style={styles.header1}>{match.name}</Text>
                        <Text style={styles.header3}>{userAge} - {match.location}</Text>
                        <View
                            style={styles.horizontalLine}
                        />
                        <Text style={[styles.paragraph, styles.italic]}>{match.aboutMe}</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

function mapStateToProps (state) {
    return {
        match: state.match,
        loggedIn: state.loggedIn
    };
}

export default connect(mapStateToProps)(MatchProfile);
