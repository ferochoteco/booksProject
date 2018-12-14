import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, paddings } from '../components/_base'
import Player from '../components/Player';

export default class PlayerScreen extends Component {
    static navigationOptions = {
        title: 'Player'
    }      
    render() {
        return (
            <View style={styles.container}>
                <Player />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: paddings.md,
    backgroundColor: colors.background
  }
});
