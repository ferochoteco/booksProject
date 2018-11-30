import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button } from 'react-native';
import Category from '../components/Category';
import { colors, paddings } from '../components/_base';

export default class HomeScreen extends Component {
    
    static navigationOptions = {
        header: null
    };
     
    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <Button 
                    title='Check the categories'
                    onPress={() => {
                        navigation.navigate('Categories');
                    }}
                    />
                <Category 
                    id={'0'}
                    limit={3}
                    disableInfiniteScroll={true}
                    onSelect={(id) => {
                        navigation.navigate('Book', {id})
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
