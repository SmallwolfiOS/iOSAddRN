import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class iOSAddRN extends Component {
  render() {
    return (
    <View style={styles.container}>

    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'yellow',
    },

});

AppRegistry.registerComponent('iOSAddRN', () => iOSAddRN);

