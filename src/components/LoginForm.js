import React, { Component } from 'react';
import { View, StyleSheet, TextInput, StatusBar } from 'react-native';
import TextBtn from '../components/common/TextBtn';
import Loading from '../components/common/Loading';
import { colors } from '../components/_base.js';

// Redux
import { connect } from 'react-redux';
import { login, signUp } from '../actions/loginActions';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            response: ''
        }
<<<<<<< HEAD
        this.loginUser = this.loginUser.bind(this);
        this.signUpUser = this.signUpUser.bind(this);
    }

    loginUser() {
        const nav = this.props.navigation;
        this.props.dispatchLogin(this.state.email, this.state.password, 'Home', nav);
    }

    signUpUser() {
        if (this.state.password.length < 6) {
            alert("Please enter at least 6 characters");
            return;
        }
        this.props.dispatchSignUp(this.state.email, this.state.password);
=======
        // this.signUp = this.signUp.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    /* async signUp() {
        try {
            if (this.state.password.length < 6) {
                alert("Please enter at least 6 characters");
                return;
            }
            await fbConnection.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
            this.setState({
                response: 'Account created.'
            });
        }
        catch(error) {
            this.setState({
                response: error.toString()
            });
        }
    }

    login2() {
        const nav = this.props.navigation;
        async () => {
            try {
                await fbConnection.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                    .then(function () {
                        nav.navigate('Home');
                    })
                    .finally(() => {
                        this.setState({
                            loading: false
                        });
                    });
            }
            catch(error) {
                this.setState({
                    response: error.toString(),
                    loading: false
                });
                console.log(error.toString());
            }
        }
    } */

    loginUser() {
        const nav = this.props.navigation;
        this.props.login2(this.state.email, this.state.password, 'Home', nav);
        /* this.props.login2(this.state.email, this.state.password);
        const nav = this.props.navigation;
        if (this.props.error) {
            return console.log("error!");
        }
        if (this.props.finished) {
            nav.navigate('Home');
            console.log(this.props.userData);
        } */
>>>>>>> Add redux, redux thunk & login
    }

    render() {
        const { loading } = this.props;
        return (
            <View style={styles.container}>
                { loading ? <Loading isLoading={loading} /> : 
                    <View>
                        <StatusBar 
<<<<<<< HEAD
                            barStyle="light-content"
                            />
=======
                        barStyle="light-content"
                        />
>>>>>>> Add redux, redux thunk & login
                        <TextInput 
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            placeholder="Username or email"
                            placeholderTextColor="rgba(255,255,255,0.7)"
                            onChangeText={(email) => this.setState({email})}
                            onSubmitEditing={() => this.passwordInput.focus()}
                            style={styles.input}
                            />
                        <TextInput 
                            onChangeText={(password) => this.setState({password})}
                            placeholder="Password"
                            placeholderTextColor="rgba(255,255,255,0.7)"
                            secureTextEntry
                            style={styles.input}
                            ref={(input) => this.passwordInput = input}
                            />
                        <TextBtn 
                            bkgColor={colors.loginBkgBtn}
                            color={colors.loginBtn}
                            onPress={this.loginUser}
                            text='LOGIN'
                            />
                        <TextBtn 
                            bkgColor={colors.signUpBkgBtn}
                            color={colors.signUpBtn}
<<<<<<< HEAD
                            onPress={this.signUpUser}
=======
                            onPress={this.signUp}
>>>>>>> Add redux, redux thunk & login
                            text='SIGN UP'
                            />
                    </View>
                } 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10
    }
});

const mapStateToProps = (state) => {
    return {
        userData: state.appLogin.data,
        loading: state.appLogin.isLoading,
        finished: state.appLogin.loginFinished,
        error: state.appLogin.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
<<<<<<< HEAD
        dispatchLogin: (email, password, scrName, nav) => dispatch(login(email, password, scrName, nav)),
        dispatchSignUp: (email, password) => dispatch(signUp(email, password))
=======
        login2: (email, password, scrName, nav) => dispatch(login(email, password, scrName, nav))
>>>>>>> Add redux, redux thunk & login
    }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);