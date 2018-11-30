import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from '../components/LoginForm';

export default class LoginScreen extends Component {
    
    static navigationOptions = {
        header: null
    };

    render() {
        const { navigation } = this.props;
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                        style={styles.logo}
                        source={require('../assets/images/logo.png')} 
                        />
                    <Text style={styles.title}>An starter app with Login form with React Native</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm navigation={navigation} />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2ecc71'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#FFF',
        margin: 12,
        width: 260,
        textAlign: 'center',
        opacity: 0.9
    }
});
