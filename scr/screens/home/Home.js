import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import style from './styles';
import Menu from 'react-native-vector-icons/MaterialCommunityIcons';
import NewOpen from 'react-native-vector-icons/MaterialCommunityIcons';
import Notification from 'react-native-vector-icons/MaterialIcons';
import Lock from 'react-native-vector-icons/FontAwesome';
import Unlock from 'react-native-vector-icons/FontAwesome';
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
      alarmPower: 21,
      alarmSensor: 21,
      alarmFan: 0,
      alarmAir: 20,
      // alarmAirOver:0,
      alarmSystem: 0,
      time: null,
      airCondi: true,
      senCondi: true,
      fanCondi: true,
      // airOvCondi:true,
      sysCondi: true,
      powCondi: true,
      weightSign: false,
      tempSign: false,
      lock: true,
      currentAirValue: 33.1,
      setAirValue: 32.1,
      skinCurrentTemp: 32.1,
      skinSetTemp: 34.1,
    },
    this.handleWeight = this.handleWeight.bind(this);
    this.handleTemp = this.handleTemp.bind(this);
    this.timer = null;
    this.addOne = this.addOne.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.handleAirCurrent = this.handleAirCurrent.bind(this);
    this.handleAirSet = this.handleAirSet.bind(this);
    this.handleSkinCurrent = this.handleSkinCurrent.bind(this);
    this.handleSkinSet = this.handleSkinSet.bind(this);

  }
  // componentDidMount(){


  // setTimeout(() => {
  //   // If it's the last subscription to accelerometer it will stop polling in the native API
  //   subscription.unsubscribe();
  // }, 5000);
  // console.log(subscription)
  componentDidMount() {
    //   SystemSetting.getBrightness().then((brightness)=>{
    //     console.log('Current brightness is ' + brightness);
    // });

    // this.interval = setInterval(() => this.setState({ alarmAir: this.state.alarmAir + 1 }), 1500);
    // this.alarmAirOvFn();
    this.alarmAirFn();
    this.alarmPowFn();
    this.alarmFanFn();
    this.alarmSenFn();
    this.alarmSysFn();
  }
  alarmAirFn = () => {
    if (this.state.alarmAir < 20) {
      this.setState({ airCondi: false })
    } else if (this.state.alarmAir > 37) {
      this.setState({ airCondi: false })
    } else {
      this.setState({ airCondi: true })
    }
  };
  alarmPowFn = () => {
    if (this.state.alarmPower < 10) {
      this.setState({ powCondi: false })
    } else if (this.state.alarmPower > 20) {
      this.setState({ powCondi: false })
    } else {
      this.setState({ powCondi: true })
    }
  };
  alarmSenFn = () => {
    if (this.state.alarmSensor < 10) {
      this.setState({ senCondi: false })
    } else if (this.state.alarmSensor > 20) {
      this.setState({ senCondi: false })
    } else {
      this.setState({ senCondi: true })
    }
  };
  alarmFanFn = () => {
    if (this.state.alarmFan < 10) {
      this.setState({ fanCondi: false })
    } else if (this.state.alarmFan > 20) {
      this.setState({ fanCondi: false })
    } else {
      this.setState({ fanCondi: true })
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
    if (this.state.alarmSystem < 10) {
      this.setState({ sysCondi: false })
    } else if (this.state.alarmSystem > 20) {
      this.setState({ sysCondi: false })
    } else {
      this.setState({ sysCondi: true })
    }
  };
  handleWeight(child) {
    this.setState({
      weightSign: child,
    });
  };
  handleAirCurrent(child) {
    this.setState({
      currentAirValue: child,
    });
  }
  handleAirSet(child) {
    this.setState({
      setAirValue: child,
    })
  };
  handleSkinSet(child) {
    this.setState({
      skinSetTemp: child,
    })
  };
  handleSkinCurrent(child) {
    this.setState({
      skinCurrentTemp: child,
    });
  };
  handleTemp(child) {
    this.setState({
      tempSign: child,
    });
  };


  addOne() {
    setTimeout(this.setState({ lock: !this.state.lock }), 3000);
    ;

  }

  stopTimer() {
    clearTimeout(this.timer);
  }
  _lockOn = () => {
    this.setState({ lock: !this.state.lock, }),
      alert('System Unlocked')
  };
  _lockOff = () => {
    this.setState({ lock: !this.state.lock, }),
      alert('System Locked')
  };
  render() {
    // console.log(this.state.alarmAir);
    // console.log(this.state.airCondi)
    // console.log(this.state.lock, 'weight')
    // console.log(this.state.tempSign, 'temmp')
    console.log(this.state.currentTempValue)
    console.log(this.state.currentTempValue)


    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="default" hidden={true} showHideTransition={'fade'}></StatusBar>
        <View style={style.headerContainer}>
          {/* <Text style={style.headerText}>My App Incuabator</Text> */}
          {/* <View style={style.notificationIcon}> */}

          {
            this.state.lock == true ? (
              <TouchableOpacity delayLongPress={2000} onLongPress={this._lockOff} style={{ justifyContent: 'center', alignItems: 'center', left: width * .01, position: 'absolute' }}>
                <Unlock name={'unlock'} size={width * .05} color='#0ae916' />
                <Text style={style.alarmText}>Unlocked</Text>
              </TouchableOpacity>
            ) : (
                <TouchableOpacity delayLongPress={2000} onLongPress={this._lockOn} style={{ justifyContent: 'center', alignItems: 'center', left: width * .02, position: 'absolute' }}>
                  <Lock name={'lock'} size={width * .05} color='red' />
                  <Text style={style.alarmText}>Locked</Text>
                </TouchableOpacity>
              )
          }
          <View style={{ borderWidth: 1, borderColor: '#6b6a6a59', height: height * .12, position: 'absolute', left: width * .095 }}></View>
          <View style={{ marginHorizontal: width * .03 }}></View>

          {/* <Graph /> */}
          <View style={style.iconAndText}>
            <Notification name="notifications-active" size={width * .05} color={this.state.powCondi ? '#0ae916' : 'red'} style={{ marginHorizontal: width * .01 }} />
            <Text style={style.alarmText}>Power Failure</Text>
          </View>
          <View style={style.iconAndText}>
            <Notification name="notifications-active" size={width * .05} color={this.state.senCondi ? '#0ae916' : 'red'} style={{ marginHorizontal: width * .01 }} />
            <Text style={style.alarmText}>Sensor Failure</Text>
          </View>
          <View style={style.iconAndText}>
            <Notification name="notifications-active" size={width * .05} color={this.state.fanCondi ? '#0ae916' : 'red'} style={{ marginHorizontal: width * .01 }} />
            <Text style={style.alarmText}>Fan Failure</Text>
          </View>
          {/* <View style={style.iconAndText}>
            <Notification name="notifications-active" size={width * .05} color={this.state.airCondi ? '#0ae916' : 'red'} style={{ marginHorizontal: width * .01 }} />
            <Text style={style.alarmText}>Over Temperature</Text>
          </View> */}
          {/* <View style={style.iconAndText}>
              <Notification name="notifications-active" size={width * .05} color={this.state.airOvCondi ? '#0ae916' : 'red' } style={{ marginHorizontal: width * .01 }} />
              <Text style={style.overRidTex}>Over Air </Text>
              <Text style={style.overRidTex1}>Temperature</Text>
            </View> */}
          <View style={style.iconAndText}>
            <Notification name="notifications-active" size={width * .05} color="#0ae916" style={{ marginHorizontal: width * .01 }} />
            <Text style={style.alarmText}>System Failure</Text>
          </View>
          <View style={{ borderWidth: 1, borderColor: '#6b6a6a59', height: height * .12, position: 'absolute', right: width * .08 }}></View>
          <LeftSlider
            selectWeight={this.handleWeight}
            selectTemp={this.handleTemp}
            locker={this.state.lock}
            airCurTemp={this.handleAirCurrent}
            airSetTemp={this.handleAirSet}
            skinCurTemp={this.handleSkinCurrent}
            skinSetTemp={this.handleSkinSet}
          />
        </View>
        <View style={style.inerContainer3}>
          <Text style={style.airHeading}>
            Air Temperature
          </Text>
          <Text style={style.tempHeading}>
            Skin Temperature
          </Text>
          <Text style={style.humHeading}>
            SP02/HR
          </Text>
        </View>
        <View style={style.inerContainer1}>
          <AirTemp
            value={this.state.tempSign}
            locker={this.state.lock}
            airCurrentTemp={this.state.currentAirValue}
            airSetTemp={this.state.setAirValue}
          />
          <SkinTemp
            value={this.state.tempSign}
            locker={this.state.lock}
            skinCurrentTemp={this.state.skinCurrentTemp}
            skinSetTemp={this.state.skinSetTemp}

          />
          <SPO2 locker={this.state.lock} />
        </View>
        <View style={style.inerContainer3}>
          <Text style={style.weigHeading}>
            BabyWeight
          </Text>
          <Text style={style.Spo2Heading}>
            Humidity
          </Text>
          <Text style={style.oxygenHeading}>
            Oxygen Level
          </Text>
        </View>
        <View style={style.inerContainer2}>
          {/* Weight */}
          <Weight value={this.state.weightSign} locker={this.state.lock} />
          {/* Temperature */}
          <Humidity locker={this.state.lock} />
          {/* Humidity */}
          <Oxygen locker={this.state.lock} />

        </View>

      </View>
    );
  }
}
