import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,Image,StatusBar ,Dimensions} from 'react-native';


const{height,width} = Dimensions.get('window');

export default class App extends Component {
  render(){
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="default" hidden={true} showHideTransition={'fade'}></StatusBar>
        <Text>
            hello
        </Text>
      
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
