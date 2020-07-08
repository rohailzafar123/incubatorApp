import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import style from './styles';
import Menu from 'react-native-vector-icons/MaterialCommunityIcons';
import NewOpen from 'react-native-vector-icons/MaterialCommunityIcons';
import Notification from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import Oxygen from './Oxygen/oxygen';
import Weight from './BabyWeight/Weight';
import Graph from './Graph/index';
import SkinTemp from './SkinTemp/index';
import SPO2 from './Spo2/index';
import Humidity from './Humidity/index';
import AirTemp from './AirTemp/airTemp';
import LeftSlider from '../../component/leftSlideBar/index';
const { height, width } = Dimensions.get('window');
export default class App extends Component {
  constructor(props) {
    super(props);
    // this.onButtonStart = this.onButtonStart.bind(this);
    // this.onButtonStop = this.onButtonStop.bind(this);
    // this.onButtonClear = this.onButtonClear.bind(this);
    // this.start = this.start.bind(this);
    this.state = {
      valueX: null,
      valuey: null,
      valuez: null,
      alarmPower:21,
      alarmSensor:21,
      alarmFan:0,
      alarmAir:20,
      // alarmAirOver:0,
      alarmSystem:0,
      time:null,
      airCondi:true,
      senCondi:true,
      fanCondi:true,
      // airOvCondi:true,
      sysCondi:true,
      powCondi:true,
    }
}
// componentDidMount(){
  

    // setTimeout(() => {
    //   // If it's the last subscription to accelerometer it will stop polling in the native API
    //   subscription.unsubscribe();
    // }, 5000);
    // console.log(subscription)
    getBrightness(){
      // ScreenBrightness.getBrightness().then(brightness => {
      //   alert('brightness ' + brightness);
      // });
    }
    componentDidMount() {
    //   SystemSetting.getBrightness().then((brightness)=>{
    //     console.log('Current brightness is ' + brightness);
    // });
    
      // this.interval = setInterval(() => this.setState({ alarmAir: this.state.alarmAir + 1 }), 1500);
      this.alarmAirFn();
      this.alarmPowFn();
      // this.alarmAirOvFn();
      this.alarmFanFn();
      this.alarmSenFn();
      this.alarmSysFn();
    }
    alarmAirFn = () => {
      if ( this.state.alarmAir < 20){
        this.setState({airCondi:false})
      }else if(this.state.alarmAir > 37){
        this.setState({airCondi:false})
      }else{
        this.setState({airCondi:true})
      }
    };
    alarmPowFn = () => {
      if ( this.state.alarmPower < 10){
        this.setState({powCondi:false})
      }else if(this.state.alarmPower > 20){
        this.setState({powCondi:false})
      }else{
        this.setState({powCondi:true})
      }
    };
    alarmSenFn = () => {
      if ( this.state.alarmSensor < 10){
        this.setState({senCondi:false})
      }else if(this.state.alarmSensor > 20){
        this.setState({senCondi:false})
      }else{
        this.setState({senCondi:true})
      }
    };
    alarmFanFn = () => {
      if ( this.state.alarmFan < 10){
        this.setState({fanCondi:false})
      }else if(this.state.alarmFan > 20){
        this.setState({fanCondi:false})
      }else{
        this.setState({fanCondi:true})
      }
    };
    // alarmAirOvFn = () => {
    //   if ( this.state.alarmAirOver < 10){
    //     this.setState({airOvCondi:false})
    //   }else if(this.state.alarmAirOver > 20){
    //     this.setState({airOvCondi:false})
    //   }else{
    //     this.setState({airOvCondi:true})
    //   }
    // };
    alarmSysFn = () => {
      if ( this.state.alarmSystem < 10){
        this.setState({sysCondi:false})
      }else if(this.state.alarmSystem > 20){
        this.setState({sysCondi:false})
      }else{
        this.setState({sysCondi:true})
      }
    };
  render() {
    // console.log(this.state.alarmAir);
    // console.log(this.state.airCondi)


    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="default" hidden={true} showHideTransition={'fade'}></StatusBar>
        <View style={style.headerContainer}>
          {/* <Text style={style.headerText}>My App Incuabator</Text> */}
          {/* <View style={style.notificationIcon}> */}
          <Graph />
            <View style={style.iconAndText}>
              <Notification name="notifications-active" size={width * .05} color={this.state.powCondi ? '#0ae916' : 'red' } style={{ marginHorizontal: width * .01 }} />
              <Text style={style.alarmText}>Power Failure</Text>
            </View>
            <View style={style.iconAndText}>
              <Notification name="notifications-active" size={width * .05} color={this.state.senCondi ? '#0ae916' : 'red' } style={{ marginHorizontal: width * .01 }} />
              <Text style={style.alarmText}>Sensor Failure</Text>
            </View>
            <View style={style.iconAndText}>
              <Notification  name="notifications-active" size={width * .05} color={this.state.fanCondi ? '#0ae916' : 'red' } style={{ marginHorizontal: width * .01 }} />
              <Text style={style.alarmText}>Fan Failure</Text>
            </View>
            <View style={style.iconAndText}>
              <Notification name="notifications-active" size={width * .05} color={this.state.airCondi ? '#0ae916' : 'red' } style={{ marginHorizontal: width * .01 }} />
              <Text style={style.alarmText}>Over Temperature</Text>
            </View>
            {/* <View style={style.iconAndText}>
              <Notification name="notifications-active" size={width * .05} color={this.state.airOvCondi ? '#0ae916' : 'red' } style={{ marginHorizontal: width * .01 }} />
              <Text style={style.overRidTex}>Over Air </Text>
              <Text style={style.overRidTex1}>Temperature</Text>
            </View> */}
            <View style={style.iconAndText}>
              <Notification name="notifications-active" size={width * .05} color="#0ae916" style={{ marginHorizontal: width * .01 }} />
              <Text style={style.alarmText}>System Failure</Text>
            </View>
          <LeftSlider />
        </View>
        <View style={style.inerContainer3}>
          <Text style={style.airHeading}>
            Air Temperature
          </Text>
          <Text style={style.tempHeading}>
            Skin Temperature
          </Text>
          <Text style={style.humHeading}>
            Humidity
          </Text>
        </View>
        <View style={style.inerContainer1}>
          <AirTemp />
          <SkinTemp />
          <Humidity />
        </View>
        <View style={style.inerContainer3}>
          <Text style={style.weigHeading}>
            BabyWeight
          </Text>
          <Text style={style.Spo2Heading}>
            SP02/HR
          </Text>
          <Text style={style.oxygenHeading}>
            Oxygen Level
          </Text>
        </View>
        <View style={style.inerContainer2}>
          {/* Weight */}
          <Weight />
          {/* Temperature */}
          <SPO2 />
          {/* Humidity */}
          <Oxygen />

        </View>
      </View>
    );
  }
}
