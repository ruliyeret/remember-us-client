import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import firebase from "firebase";
import Spinner from "../Common/spiner";

export default class Form extends Component {
    // state = { email: '', password: '', error: '', loading: false };
    //
    // onButtonPress() {
    //     const { email, password } = this.state;
    //
    //     this.setState({ error: ' ', loading: true});
    //
    //     firebase.auth().signInWithEmailAndPassword(email, password)
    //         .then(this.onLoginSucess.bind(this))
    //         .catch(() => {
    //             firebase.auth().createUserWithEmailAndPassword(email, password)
    //                 .then(this.onLoginSucess.bind(this))
    //                 .catch(this.onLoginFail.bind(this));
    //         });
    // }
    //
    // onLoginFail() {
    //     this.setState({ error: "Auth error!", loading: false });
    // }
    //
    // onLoginSucess() {
    //     this.setState({
    //         email: '',
    //         password: '',
    //         loading: false,
    //         error: ''
    //     });
    // }

    renderButton(){
        // if (this.state.loading) {
        //     return <Spinner size="small" />;
        // }
        {/*<TouchableOpacity style={styles.button} onPress={this.onButtonPress()}>*/}

        return (
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{this.props.type}</Text>
            </TouchableOpacity>


        );
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Email"
                           placeholderTextColor = "#ffffff"
                           selectionColor="#fff"
                           keyboardType="email-address"
                           onSubmitEditing={()=> this.password.focus()}
                />
                <TextInput style={styles.inputBox}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Password"
                           secureTextEntry={true}
                           placeholderTextColor = "#ffffff"
                           ref={(input) => this.password = input}
                />
                {this.renderButton()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        justifyContent:'center',
        alignItems: 'center'
    },

    inputBox: {
        width:300,
        height:50,
        backgroundColor:'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 10
    },
    button: {
        width:300,
        backgroundColor:'#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    }

});