import React from 'react';
import styles from './styles';
import RootNavigator from './navigation/RootNavigator';
import { 
  View
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <RootNavigator/>
    );
  }
}
