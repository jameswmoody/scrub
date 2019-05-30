import React from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import { imageUpload, deleteImage } from '../redux/actions';
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
            <ScrollView style={[styles.main]}>
                    <View style={[styles.container]}>
                        <Image style={styles.profileImg} source={{ uri: this.props.user.photoUrl + '?height=500'}} />
                        <View style={styles.profile}>
                            <Text style={styles.header1}>{this.props.user.name}</Text>
                            <Text style={styles.header3}>{this.props.user.age} - {this.props.user.location}</Text>
                            <View
                                style={styles.horizontalLine}
                            />
                            <Text style={[styles.paragraph, styles.italic]}>{this.props.user.aboutMe}</Text>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={() => navigate('Edit')}>
                            <Text style={styles.buttonText}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(Profile);
