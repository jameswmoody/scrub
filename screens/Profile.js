import React from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import { imageUpload, deleteImage, logout } from '../redux/actions';
import styles from '../styles'

class Profile extends React.Component {
    deleteImage() {
        this.self.props.dispatch(deleteImage(this.self.props.user.images, this.key))
    }

    addImage() {
        this.props.dispatch(imageUpload(this.props.user.images))
    }

    render() {
        const { navigate } = this.props.navigation;
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
                        {this.props.user.images.map((uri, index) => {
                            return (
                                <Image key={index} style={styles.profileImg} source={{ uri }} />
                            );
                        })}
                    </ScrollView>
                    <View style={styles.profile}>
                        <Text style={styles.header1}>{this.props.user.name}</Text>
                        <Text style={styles.header3}>{this.props.user.age} - {this.props.user.location}</Text>
                        <View
                            style={styles.horizontalLine}
                        />
                        <Text style={[styles.paragraph, styles.italic]}>{this.props.user.aboutMe}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.button} onPress={() => navigate('Edit')}>
                            <Text style={styles.buttonText}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.dispatch(logout())}>
                            <Text style={styles.buttonText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        loggedIn: state.loggedIn 
    };
}

export default connect(mapStateToProps)(Profile);
