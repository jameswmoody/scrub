import * as firebase from 'firebase';
import { ImagePicker, Permissions } from 'expo';
import { RNS3 } from 'react-native-aws3';
import {
    Alert
} from 'react-native';

import aws from '../config/aws';

export function login(user) { 
    return function (dispatch) {
        let params = {
            id: user.uid,
            photoUrl: user.photoURL,
            name: user.displayName,
            aboutMe: ' ',
            chats: ' ',
            geocode: ' ',
            images: [user.photoURL],
            notification: false,
            show: false,
            report: false,
            swipes: {
                [user.uid]: false
            },
            token: ' ' 
        }

        firebase.database().ref('cards/').child(user.uid).once('value', function (snapshot) {
            if (snapshot.val() !== null) {
                dispatch({ type: 'LOGIN', user: snapshot.val(), loggedIn: true });
            } else {
                firebase.database().ref('cards/' + user.uid).update(params);
                dispatch({ type: 'LOGIN', user: params, loggedIn: true });
            }
        })
    }
} 

export function imageUpload (images) {
    function imageHandler() {
        ImagePicker
            .launchImageLibraryAsync({ allowsEditing: false })
            .then(function (result) {
                const array = images;
                if (result.uri != undefined) {
                    const file = {
                        uri: result.uri,
                        name: result.uri,
                        type: 'image/png'
                    }

                    const options = {
                        keyPrefix: 'uploads/',
                        bucket: 'scrub-app',
                        region: 'us-west-1',
                        accessKey: aws.accessKey,
                        secretKey: aws.secretKey,
                        successActionStatus: 201
                    }

                    RNS3
                        .put(file, options)
                        .then(function (response) {
                            if (response.status === 201) {
                                array.push(response.body.postResponse.location)
                                firebase.database().ref('cards/' + firebase.auth().currentUser.uid + '/images').set(array);
                                dispatch({ type: 'UPLOAD_IMAGES', payload: array });
                            }
                        })
                }
            });
    }

    return async (dispatch) => {
        const permission = await Permissions.getAsync(Permissions.CAMERA_ROLL);
        if (permission.status !== 'granted') {
            const newPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (newPermission.status === 'granted') {
                imageHandler();
            } else {
                Alert.alert('Unable to gain permission to access cammera roll');
            }
        } else {
            imageHandler();
        }
    }
}
