import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import style from './styles';
import Menu from 'react-native-vector-icons/MaterialCommunityIcons';
import NewOpen from 'react-native-vector-icons/MaterialCommunityIcons';


const { height, width } = Dimensions.get('window');

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="default" hidden={true} showHideTransition={'fade'}></StatusBar>
        <View style={style.headerContainer}>
          <Text style={style.headerText}>My App Incuabator</Text>
          <TouchableOpacity >
            <Menu name="menu-open" size={width * .05} color="black" />
          </TouchableOpacity>

        </View>
        <View style={style.inerContainer1}>
          <View style={style.graphView}>
            <View style={style.graph}>

            </View>


          </View>
          <View style={style.OxigenView}>
            <View style={style.Oxigen}>
              <View style={style.OxigenInerContainer}>
                <View style={style.OxigenIner}>
                  <View style={{flex:1,}}>


                  <Text style={{ fontSize: width * .02, fontWeight: "bold", color: '#484149c5' }}>
                    Current Oxygen Level
                </Text>
                  <View style={style.boxUperStyle}>
                    <View style={style.likeInputOxygen}>
                      <Text style={{ fontSize: width * .05, fontWeight: "bold", color: '#484149c5' }}>
                        00.0
                    </Text>
                    </View>
                    <Text style={{ fontSize: width * .05, fontWeight: "bold", color: '#484149c5' }}>
                      %
                  </Text>
                    <TouchableOpacity >
                      <NewOpen name="open-in-new" size={width * .035} color="black" style={{ bottom: height * .05, right: width * .01 }} />
                    </TouchableOpacity>
                  </View>
                  </View>
                  <View style={{ flexDirection: 'row' , flex:1, }}>
                    <View>
                      <Text style={{ fontSize: width * .02, fontWeight: "bold", color: '#484149c5', top: height * .006}}>
                        Min.Per %
                      </Text>
                      <View style={style.boxLowerStyle}>
                        <View style={style.likeInputMin}>
                          <Text style={{ fontSize: width * .035, fontWeight: "bold", color: '#484149c5' }}>
                            75.0
                          </Text>
                        </View>
                        <Text style={{ fontSize: width * .04, fontWeight: "bold", color: '#484149c5' }}>
                          %
                        </Text>
                      </View>

                    </View>
                    <View style={{ flexDirection: 'row' ,}}>
                    <View>
                      <Text style={{ fontSize: width * .02, fontWeight: "bold", color: '#484149c5' ,top: height * .006}}>
                        Max.Per %
                      </Text>
                      <View style={style.boxLowerStyle}>
                        <View style={style.likeInputMin}>
                          <Text style={{ fontSize: width * .035, fontWeight: "bold", color: '#484149c5' }}>
                            99.0
                          </Text>
                        </View>
                        <Text style={{ fontSize: width * .04, fontWeight: "bold", color: '#484149c5' }}>
                          %
                        </Text>
                      </View>

                    </View>

                    </View>


                  </View>
                </View>
              </View>
            </View>

          </View>
        </View>
        <View style={style.inerContainer2}>

          <View style={style.weightView}>
            <View style={style.weight}>

            </View>

          </View>
          <View style={style.TemperatureView}>
            <View style={style.Temperature}>

            </View>

          </View>
          <View style={style.HumidityView}>
            <View style={style.Humidity}>

            </View>

          </View>

        </View>
      </View>
    );
  }
}
