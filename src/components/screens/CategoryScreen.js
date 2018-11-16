import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { colors, paddings } from '../_base'
import Category from '../Category';

export default class CategoryScreen extends Component {
    static navigationOptions = {
        title: 'Category'
    }      
    render() {
        const { navigation } = this.props;
        return (
        <View style={styles.container}>
            <Category
                id={navigation.state.params.id}
                onSelect={id => {
                    navigation.navigate('Book', {id});
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
