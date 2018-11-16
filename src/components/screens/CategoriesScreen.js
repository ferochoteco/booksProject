import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { colors, paddings } from '../_base'
import Categories from '../Categories';

export default class CategoriesScreen extends Component {
    static navigationOptions = {
        title: 'RN Books'
    }      
    render() {
        const { navigation } = this.props;
        return (
        <View style={styles.container}>
            <Categories 
                onSelect={id => {
                    navigation.navigate('Category', {id});
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
