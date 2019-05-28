import React from 'react';
import { connect } from 'react-redux';

import { SafeAreaView } from 'react-navigation';
import { imageUpload } from '../redux/actions';
import styles from '../styles'

import {
    Text,
    View, 
    Image,
    TouchableOpacity
} from 'react-native';

class Profile extends React.Component {
    state = {}
 
    componentWillMount() {
        this.props.dispatch(imageUpload(this.props.user.images));
    }

    render() {
        return (
            <SafeAreaView>
                <View>
                    <Text>{this.props.user.name}</Text>
                    <Image style={{width: 75, height: 75}} source={{uri: this.props.user.photoUrl}}/>
                    {this.props.user.images.map((uri, index) => {
                        return (
                            <TouchableOpacity key={ index } >
                                <Image style={{ width: 75, height: 75 }} source={{ uri }} />
                            </TouchableOpacity>
                        );
                    })}
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