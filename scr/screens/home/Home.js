import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import style from './styles';
import Menu from 'react-native-vector-icons/MaterialCommunityIcons';
import NewOpen from 'react-native-vector-icons/MaterialCommunityIcons';
import Notification from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import Oxygen from './oxygen';
import Weight from './Weight';
import Graph from './Graph/index';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import {
  accelerometer,
  gyroscope,
  setUpdateIntervalForType,
  SensorTypes,
  barometer
} from "react-native-sensors";
import { map, filter } from "rxjs/operators";
const { height, width } = Dimensions.get('window');
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueX: null,
      valuey: null,
      valuez: null,

    }
    

    // setTimeout(() => {
    //   // If it's the last subscription to accelerometer it will stop polling in the native API
    //   subscription.unsubscribe();
    // }, 5000);
    // console.log(subscription)

  }
  // componentWillMount(){
  //   setUpdateIntervalForType(SensorTypes.accelerometer, 1500); // defaults to 100ms

  //   const subscription = accelerometer.subscribe(({ x, y, z }) => this.setState({valueX:Math.round(x),valuey:Math.round(y),valuez:Math.round(z)}), 
  //       error => {
  //           // console.log("The sensor is not available");
  //         });
  // }
  
  render() {
    // console.log(this.state.valueX)
    // const{x}=this.state.valueX;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="default" hidden={true} showHideTransition={'fade'}></StatusBar>
        <View style={style.headerContainer}>
          {/* <Text style={style.headerText}>My App Incuabator</Text> */}
          {/* <View style={style.notificationIcon}> */}
          <Graph />
            <View>
              <Notification name="notifications-active" size={width * .04} color="#f1c54c" style={{ marginHorizontal: width * .01 }} />
              <Text style={style.alarmText}>Oxygen</Text>
            </View>
            <View >
              <Notification name="notifications-active" size={width * .04} color="#f1c54c" style={{ marginHorizontal: width * .01 }} />
              <Text style={style.alarmText}>Weight</Text>
            </View>
            <View >
              <Notification name="notifications-active" size={width * .04} color="#f1c54c" style={{ marginHorizontal: width * .01 }} />
              <Text style={style.alarmText}>Temp</Text>
            </View>
            <View >
              <Notification name="notifications-active" size={width * .04} color="#f1c54c" style={{ marginHorizontal: width * .01 }} />
              <Text style={style.alarmText}>Humidity</Text>
            </View>
          {/* </View> */}
          <TouchableOpacity >
            <Menu name="menu-open" size={width * .05} color="black" />
          </TouchableOpacity>
        </View>
        <View style={style.inerContainer3}>
          <Text style={style.weightHeading}>
            WEIGHT BALANCE
          </Text>
          <Text style={style.tempHeading}>
            TEMPERATURE
          </Text>
          <Text style={style.humHeading}>
            HUMIDITY
          </Text>
        </View>
        <View style={style.inerContainer1}>
          {/* <View style={style.graphView}>
            <View style={style.graph}>
              <View> */}

            {/* 
                <LineChart
                  data={{
                    labels: ["January", "February", "March", "April", "May", "June"],
                    datasets: [
                      {
                        data: [
                          this.state.valueX,2,this.state.valuey,6,this.state.valuez
                        ]
                      }
                    ]
                  }}
                  width={width * .6} // from react-native
                  height={height * .45}
                  yAxisLabel="S "
                  // yAxisSuffix="k"
                  yAxisInterval={1} // optional, defaults to 1
                  chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                      borderRadius: 16
                    },
                    propsForDots: {
                      r: "6",
                      strokeWidth: "2",
                      stroke: "#ffa726"
                    }
                  }}
                  bezier
                  style={{
                    marginVertical: 8,
                    borderRadius: 16
                  }}
                /> */}
              {/* </View>

            </View>
          </View> */}
          
          {/* <View style={{ position: 'absolute', top: height * .14, right: width * .1 }}>
            <Text style={style.oxygenHeading}>
              OXYGEN LEVEL
            </Text>
          </View> */}
          {/* Oxigen */}
          <Oxygen />
          <Oxygen />

          <Oxygen />
        </View>
        <View style={style.inerContainer3}>
          <Text style={style.weightHeading}>
            WEIGHT BALANCE
          </Text>
          <Text style={style.tempHeading}>
            TEMPERATURE
          </Text>
          <Text style={style.humHeading}>
            HUMIDITY
          </Text>
        </View>
        <View style={style.inerContainer2}>
          {/* Weight */}
          <Weight />
          {/* Temperature */}
          <TouchableOpacity style={style.TemperatureView}>
            <View style={style.Temperature}>
              <View style={style.OxigenInerContainer}>
                <View style={style.OxigenIner}>
                  <View style={{ flex: 1, }}>
                    <Text style={{ fontSize: width * .02, fontWeight: "bold", color: '#FF420E' }}>
                      Current Temperature
                    </Text>
                    <View style={style.boxUperStyle}>
                      <View style={style.likeInputOxygen}>
                        <Text
                          style={{
                            position: 'absolute',
                            fontSize: width * .05, fontWeight: "bold", color: '#484149c5'
                          }} >
                          {this.state.valueX}
                        </Text>
                      </View>
                      <Text style={{ fontSize: width * .018, fontWeight: "bold", color: '#484149c5', left: width * .003, }}>
                        o
                      </Text>
                      <Text style={{ fontSize: width * .035, fontWeight: "bold", color: '#484149c5' }}>
                        C
                      </Text>
                      <TouchableOpacity >
                        <NewOpen name="open-in-new" size={width * .035} color="black" style={{ bottom: height * .05, right: width * .011 }} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', flex: 1, }}>
                    <View>
                      <Text style={{ fontSize: width * .018, fontWeight: "bold", color: '#FF420E', top: height * .006, marginVertical: width * .005 }}>
                        Min Temp.
                      </Text>
                      <View style={style.boxLowerStyle}>
                        <View style={style.likeInputMin}>
                          <Text style={{ fontSize: width * .035, fontWeight: "bold", color: '#484149c5' }}>
                            {this.state.valuey}
                          </Text>
                        </View>
                        <Text style={{ fontSize: width * .018, fontWeight: "bold", color: '#484149c5', left: width * .001, bottom: height * .03 }}>
                          o
                        </Text>
                        <Text style={{ fontSize: width * .03, fontWeight: "bold", color: '#484149c5', bottom: height * .01, marginRight: height * .02 }}>
                          C
                        </Text>
                      </View>

                    </View>
                    <View style={{ flexDirection: 'row', }}>
                      <View>
                        <Text style={{ fontSize: width * .018, fontWeight: "bold", color: '#FF420E', top: height * .006, marginVertical: width * .005 }}>
                          Max Temp.
                      </Text>
                        <View style={style.boxLowerStyle}>
                          <View style={style.likeInputMin}>
                            <Text style={{ fontSize: width * .035, fontWeight: "bold", color: '#484149c5' }}>
                              {this.state.valuez}
                          </Text>
                          </View>
                          <Text style={{ fontSize: width * .018, fontWeight: "bold", color: '#484149c5', left: width * .001, bottom: height * .03 }}>
                            o
                          </Text>
                          <Text style={{ fontSize: width * .03, fontWeight: "bold", color: '#484149c5', bottom: height * .01, }}>
                            C
                          </Text>
                        </View>

                      </View>

                    </View>


                  </View>
                </View>
              </View>
            </View>

          </TouchableOpacity>
          {/* Humidity */}
          <TouchableOpacity style={style.HumidityView}>
            <View style={style.Humidity}>
              <View style={style.OxigenInerContainer}>
                <View style={style.OxigenIner}>
                  <View style={{ flex: 1, }}>
                    <Text style={{ fontSize: width * .02, fontWeight: "bold", color: '#FF420E' }}>
                      Current Humidity
                </Text>
                    <View style={style.boxUperStyle}>
                      <View style={style.likeInputOxygen}>
                        <Text style={{ fontSize: width * .05, fontWeight: "bold", color: '#484149c5' }}>
                          00.0
                    </Text>
                      </View>
                      <Text style={{ fontSize: width * .035, fontWeight: "bold", color: '#484149c5', marginTop: height * .02, marginLeft: height * .01 }}>
                        %
                  </Text>
                      <TouchableOpacity >
                        <NewOpen name="open-in-new" size={width * .035} color="black" style={{ bottom: height * .05, right: width * .01 }} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', flex: 1, }}>
                    <View>
                      <Text style={{ fontSize: width * .018, fontWeight: "bold", color: '#FF420E', top: height * .006, marginVertical: width * .005 }}>
                        Min.Humid
                      </Text>
                      <View style={style.boxLowerStyle}>
                        <View style={style.likeInputMin}>
                          <Text style={{ fontSize: width * .035, fontWeight: "bold", color: '#484149c5' }}>
                            75.0
                          </Text>
                        </View>
                        <Text style={{ fontSize: width * .03, fontWeight: "bold", color: '#484149c5', top: height * .009, marginRight: height * .02 }}>
                          %
                        </Text>
                      </View>

                    </View>
                    <View style={{ flexDirection: 'row', }}>
                      <View>
                        <Text style={{ fontSize: width * .018, fontWeight: "bold", color: '#FF420E', top: height * .006, marginVertical: width * .005 }}>
                          Max.Humid
                      </Text>
                        <View style={style.boxLowerStyle}>
                          <View style={style.likeInputMin}>
                            <Text style={{ fontSize: width * .035, fontWeight: "bold", color: '#484149c5', }}>
                              99.0
                          </Text>
                          </View>
                          <Text style={{ fontSize: width * .03, fontWeight: "bold", color: '#484149c5', top: height * .009, }}>
                            %
                        </Text>
                        </View>

                      </View>

                    </View>


                  </View>
                </View>
              </View>
            </View>

          </TouchableOpacity>

        </View>
      </View>
    );
  }
}
