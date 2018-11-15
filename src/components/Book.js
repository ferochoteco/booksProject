import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Book = (props) => {
    return (
        <View style={styles.bookContainer}>
            <View style={styles.bookHeaderContainer}>
                <View style={styles.bookImage}>
                    <Text>Image</Text>
                </View>
                <View style={styles.bookAuthor}>
                    <Text>by <Text style={styles.bookAuthorText}>Author</Text></Text>
                </View>
            </View>
            <View style={styles.bookDescriptionContainer}>
                <Text>Description</Text>
            </View>
            <View style={styles.bookButtonsContainer}>
                <Button 
                    title="check on Amazon" 
                    onPress={() => {
                        alert("asd");
                    }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bookContainer: {
        flex: 1,
        alignSelf: 'stretch'
    },
    bookHeaderContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'yellow'
    },
    bookDescriptionContainer: {
        flex: 3,
        padding: 10,
        backgroundColor: 'red'
    },
    bookButtonsContainer: {
        height: 50,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    bookImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bookAuthor: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bookAuthorText: {
        fontSize: 20
    }
});

export default Book;