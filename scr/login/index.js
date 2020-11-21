import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';

import axios from 'axios';
import {useAsyncStorage} from '@react-native-community/async-storage';

const {getItem, setItem} = useAsyncStorage('userInfo');

export default class LoginView extends Component {
  state = {
    email: 'register@mail.com',
    password: 'alligator123',
    isLoading: false,
  };

  _storeData = async (value) => {
    try {
      await setItem(JSON.stringify(value));
    } catch (error) {
      console.log('LoginView -> error', error);
      // Error saving data
    }
  };

  onClickListener = (viewId) => {
    const {email, password} = this.state;

    let data = {
      email,
      password,
    };

    this.setState({isLoading: true});
    axios
      .post(`http://192.168.0.105:8080/users/login`, data, {
        headers: {
          // Authorization: accessToken,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        this.setState({isLoading: false});

        if (response.data.login_user.length) {
          this._storeData(response.data);
          this.props.navigation.navigate('Home');
        }
      })
      .catch((error) => {
        console.log('LoginView -> error', error);
      });
    // // Alert.alert('Alert', 'Button pressed ' + viewId);
  };

  renderLoader = () => {
    return (
      <View style={[styles.containers, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  };

  render() {
    const {email, password, isLoading} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={(email) => this.setState({email})}
            value={email}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            underlineColorAndroid="transparent"
            onChangeText={(password) => this.setState({password})}
          />
        </View>

        <TouchableHighlight
          disabled={isLoading}
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        {isLoading && this.renderLoader()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    width: 400,
    height: 50,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 400,
  },
  loginButton: {
    backgroundColor: '#e44f3bd5',
  },
  loginText: {
    color: 'white',
    fontSize: 16,
  },
  containers: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
