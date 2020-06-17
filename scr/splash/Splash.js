import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ActivityIndicator,
  StatusBar
} from 'react-native';

//Packages


import style from './style';

export default class Splash extends Component {

  render() {
    return (
      <View style={style.container}>
          <StatusBar backgroundColor="black" barStyle="default" hidden={true} showHideTransition={'fade'}></StatusBar>
        

          <Image source={require('../../images/mainScreen.png')}
              style={style.image} />
            <ActivityIndicator size="large" color="white" style={style.activityIndi} />



      </View>
    );
  }
}