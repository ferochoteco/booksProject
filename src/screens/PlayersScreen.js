import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { colors, paddings } from '../components/_base'
import Players from '../components/Players';

export default class PlayersScreen extends Component {
    static navigationOptions = {
        title: 'List of players'
    }      
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Players 
                    onSelect={id => {
                        navigation.navigate('Player', {id});
                    }}
                />
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
