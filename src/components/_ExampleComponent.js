import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExampleComponent = (props) => {
    return (
        <View>
            <Text style={styles.text}>
                Hello Component!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'green'
    }
});

export default ExampleComponent;