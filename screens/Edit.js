import React from 'react';
import { connect } from 'react-redux';
import { imageUpload, deleteImage, updateAbout } from '../redux/actions';
import styles from '../styles'

import {
    Text,
    View,
    Keyboard,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback
} from 'react-native';

class Edit extends React.Component {
    deleteImage() {
        this.self.props.dispatch(deleteImage(this.self.props.user.images, this.key))
    }

    addImage() {
        this.props.dispatch(imageUpload(this.props.user.images))
    }

    render() {
        return (
            <KeyboardAvoidingView
                behavior='padding'
                style={{ flex: 1 }}
            >
                <View style={[styles.container]}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={[styles.container, styles.inner]}>
                            <Text style={styles.paragraph}>Tap an image to delete it</Text>
                            <View style={styles.imgRow}>
                                {this.props.user.images.map((uri, index) => {
                                    return (
                                        <TouchableOpacity key={index} onPress={this.deleteImage.bind({ self: this, key: index })} >
                                            <Image style={styles.img} source={{ uri: uri }} />
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                            <TouchableOpacity style={styles.button} onPress={this.addImage.bind(this)}>
                                <Text style={styles.buttonText}>Add</Text>
                            </TouchableOpacity>
                            <Text style={[styles.paragraph, styles.italic, styles.alignRightText]}>{(this.props.user.aboutMe && this.props.user.aboutMe.length) || 0}/140</Text>
                            <TextInput
                                style={styles.textInput}
                                multiline={true}
                                numberOfLines={5}
                                maxLength={140}
                                onChangeText={(text) => this.props.dispatch(updateAbout(text))}
                                value={this.props.user.aboutMe} />
                            <View style={{ flex: 1 }} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(Edit);
