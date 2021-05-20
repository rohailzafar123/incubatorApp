import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Modal,
} from 'react-native';
import style from './styles';
import Menu from 'react-native-vector-icons/MaterialCommunityIcons';
import NewOpen from 'react-native-vector-icons/MaterialCommunityIcons';
import Notification from 'react-native-vector-icons/MaterialIcons';
import Lock from 'react-native-vector-icons/FontAwesome';
import Unlock from 'react-native-vector-icons/FontAwesome';
import Oxygen from './Oxygen/oxygen';
import Weight from './BabyWeight/Weight';
import Graph from './Graph/index';
import SkinTemp from './SkinTemp/index';
import SPO2 from './Spo2/index';
import Humidity from './Humidity/index';
import AirTemp from './AirTemp/airTemp';
import LeftSlider from '../../component/leftSlideBar/index';
import PatientInfo from '../../component/leftSlideBar/PatientInfo/index';
import Sound from 'react-native-sound';

import {useAsyncStorage} from '@react-native-community/async-storage';

Sound.setCategory('Playback');

const {height, width} = Dimensions.get('window');

var siren = new Sound(require('../../assets/audio/siren.mp3'), (e) => {
  if (e) {
    console.log('Failed load Sound', e);
    return;
  }

  console.log(
    'duration in seconds: ' +
      siren.getDuration() +
      ' number of channels: ' +
      siren.getNumberOfChannels(),
  );
});

const {getItem, setItem} = useAsyncStorage('userInfo');
// TODO: What to do with the module?
export default class App extends Component {
  constructor(props) {
    super(props);
    // this.onButtonStart = this.onButtonStart.bind(this);
    // this.onButtonStop = this.onButtonStop.bind(this);
    // this.onButtonClear = this.onButtonClear.bind(this);
    // this.start = this.start.bind(this);
    (this.state = {
      valueX: null,
      valuey: null,
      valuez: null,
      alarmPower: 15,
      alarmSensor: 15,
      alarmFan: 16,
      alarmAir: 20,
      // alarmAirOver:0,
      alarmSystem: 14,
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
      higherAirValue: 40,
      lowAirValue: 20,
      skinHigherTemp: 35,
      skinLowTemp: 15,
      spo2Uper: 99,
      spo2Lower: 91,
      hrUper: 190,
      hrLower: 70,
      switchAir: true,
      switchSkin: true,
      switchSpo2: true,
      switchWeight: true,
      switchHumidity: true,
      switchOxygen: true,
      oxy: 0,
      skinTemp: 0,
      airTemp: 0,
      airTempActivate: false,
      airTempDeactivate: false,
      skinTempActivate: false,
      skinTempDeactivate: false,
      oxygenActivate: false,
      oxygenDeactivate: false,
      run: false,
      run2: false,
      run3: false,
      patientId: '',
      age: '',
      weight: '',
      fatherName: '',
      DrName: '',
    }),
      (this.handleWeight = this.handleWeight.bind(this));
    this.handleTemp = this.handleTemp.bind(this);
    this.timer = null;
    this.stopTimer = this.stopTimer.bind(this);
    this.handleAirHigher = this.handleAirHigher.bind(this);
    this.handleAirLow = this.handleAirLow.bind(this);
    this.handleSkinHigher = this.handleSkinHigher.bind(this);
    this.handleSkinLower = this.handleSkinLower.bind(this);
  }
  componentDidMount() {
    this.alarmPowFn();
    this.alarmFanFn();
    this.alarmSenFn();
    this.alarmSysFn();
  }

  alarmPowFn = () => {
    if (this.state.alarmPower < 10) {
      this.setState({powCondi: false});
    } else if (this.state.alarmPower > 20) {
      this.setState({powCondi: false});
    } else {
      this.setState({powCondi: true});
    }
  };
  alarmSenFn = () => {
    if (this.state.alarmSensor < 10) {
      this.setState({senCondi: false});
    } else if (this.state.alarmSensor > 20) {
      this.setState({senCondi: false});
    } else {
      this.setState({senCondi: true});
    }
  };
  alarmFanFn = () => {
    if (this.state.alarmFan < 10) {
      this.setState({fanCondi: false});
    } else if (this.state.alarmFan > 20) {
      this.setState({fanCondi: false});
    } else {
      this.setState({fanCondi: true});
    }
  };
  alarmSysFn = () => {
    if (this.state.alarmSystem < 10) {
      this.setState({sysCondi: false});
    } else if (this.state.alarmSystem > 20) {
      this.setState({sysCondi: false});
    } else {
      this.setState({sysCondi: true});
    }
  };
  handleWeight(child) {
    this.setState({
      weightSign: child,
    });
  }
  handleAirHigher(child) {
    this.setState({
      higherAirValue: child,
    });
  }
  handleAirLow(child) {
    this.setState({
      lowAirValue: child,
    });
  }
  handleSkinLower(child) {
    this.setState({
      skinLowTemp: child,
    });
  }
  handleSkinHigher(child) {
    this.setState({
      skinHigherTemp: child,
    });
  }
  handleSpo2Uper = (child) => {
    this.setState({
      spo2Uper: child,
    });
  };
  handleSpo2Lower = (child) => {
    this.setState({
      spo2Lower: child,
    });
  };
  handleHrUper = (child) => {
    this.setState({
      hrUper: child,
    });
  };
  handleHrLower = (child) => {
    this.setState({
      hrLower: child,
    });
  };
  handleTemp(child) {
    this.setState({
      tempSign: child,
    });
  }
  handleParameter = (child) => {
    this.setState({
      parameter: child,
    });
  };
  handleSwitchAir = (child) => {
    this.setState({
      switchAir: child,
    });
  };
  handleSwitchSkin(child) {
    this.setState({
      switchSkin: child,
    });
  }
  handleSwitchSpo2(child) {
    this.setState({
      switchSpo2: child,
    });
  }
  handleSwitchWeight(child) {
    this.setState({
      switchWeight: child,
    });
  }
  handleSwitchHumidity(child) {
    this.setState({
      switchHumidity: child,
    });
  }
  handleSwitchOxygen(child) {
    this.setState({
      switchOxygen: child,
    });
  }

  handlePatientID = (child) => {
    this.setState({patientId: child});
  };

  handleAge = (child) => {
    this.setState({age: child});
  };

  handleTheWeight = (child) => {
    this.setState({weight: child});
  };

  handleFatherName = (child) => {
    this.setState({fatherName: child});
  };

  handleDrName = (child) => {
    this.setState({DrName: child});
  };

  _getData = async (value) => {
    try {
      let _ = await getItem();
    } catch (error) {
      console.log('_getData -> error', error);
      // Error saving data
    }
  };

  stopTimer() {
    clearTimeout(this.timer);
  }
  _lockOn = () => {
    this.setState({lock: !this.state.lock}), alert('System Unlocked');
  };
  _lockOff = () => {
    this.setState({lock: !this.state.lock}), alert('System Locked');
  };

  oxyValue = (child) => {
    this.setState({oxy: child});
  };

  skinTempValue = (child) => {
    this.setState({skinTemp: child});
    this.skinTempAlarm();
  };

  airTempValue = (child) => {
    this.setState({airTemp: child});
    this.airTempAlarm();
  };

  airTempAlarm = () => {
    siren.setNumberOfLoops(-1);
    console.log('kia hai air temp', this.state.airTemp);
    if (this.state.airTemp > this.state.higherAirValue) {
      siren.play();
      alert('Air Temp is High');
    } else if (this.state.airTemp < this.state.lowAirValue) {
      siren.play();
      alert('Air Temp is Low');
    } else {
      siren.stop();
    }
  };

  skinTempAlarm = () => {
    siren.setNumberOfLoops(-1);
    console.log('kia hai skin temp', this.state.skinTemp);
    console.log('kia hai skin temp alarm high', this.state.skinHigherTemp);
    console.log('kia hai skin temp alarm low', this.state.skinLowTemp);
    if (this.state.skinTemp > this.state.skinHigherTemp) {
      siren.play();
      alert('Skin Temp is High');
    } else if (this.state.skinTemp < this.state.skinLowTemp) {
      siren.play();
      alert('Skin Temp is Low');
    } else {
      siren.stop();
    }
  };

  handleAirTempActivate = (child) => {
    if (child) {
      this.setState({
        airTempActivate: true,
        airTempDeactivate: false,
        run: true,
      });
      this.setState({run: false});
      console.log('gaya activate');
    }
  };

  handleAirTempDeactivate = (child) => {
    if (child) {
      this.setState({
        airTempActivate: false,
        airTempDeactivate: true,
        run: true,
      });
      this.setState({run: false});
      console.log('gaya deactivate');
    }
  };

  handleSkinTempActivate = (child) => {
    if (child) {
      this.setState({
        skinTempActivate: true,
        skinTempDeactivate: false,
        run2: true,
      });
      this.setState({run2: false});
      console.log('gaya activate');
    }
  };

  handleSkinTempDeactivate = (child) => {
    if (child) {
      this.setState({
        skinTempActivate: false,
        skinTempDeactivate: true,
        run2: true,
      });
      this.setState({run2: false});
      console.log('gaya deactivate');
    }
  };

  handleOxygenActivate = (child) => {
    if (child) {
      this.setState({
        oxygenActivate: true,
        oxygenDeactivate: false,
        run3: true,
      });
      this.setState({run3: false});
      console.log('gaya activate');
    }
  };

  handleOxygenDeactivate = (child) => {
    if (child) {
      this.setState({
        oxygenActivate: false,
        oxygenDeactivate: true,
        run3: true,
      });
      this.setState({run3: false});
      console.log('gaya deactivate');
    }
  };

  render() {
    this._getData();

    return (
      <View style={style.container}>
        <StatusBar
          backgroundColor="black"
          barStyle="default"
          hidden={true}
          showHideTransition={'fade'}></StatusBar>
        <Image
          source={require('../../../images/background1.jpg')}
          style={{
            width: width * 1,
            height: height * 1,
            position: 'absolute',
            opacity: 0.5,
          }}
        />
        <View style={style.headerContainer}>
          <Image
            source={require('../../../images/background.jpg')}
            style={{
              width: width * 1,
              height: height * 0.14,
              position: 'absolute',
              opacity: 0.3,
            }}
          />
          {this.state.lock == true ? (
            <TouchableOpacity
              delayLongPress={1000}
              onLongPress={this._lockOff}
              onPress={() => this.props.navigation.pop()}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                left: width * 0.02,
                position: 'absolute',
              }}>
              <Unlock name={'unlock'} size={width * 0.05} color="#0ae916" />
              <Text style={style.alarmText}>Unlocked</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              delayLongPress={1000}
              onLongPress={this._lockOn}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                left: width * 0.03,
                position: 'absolute',
              }}>
              <Lock name={'lock'} size={width * 0.05} color="red" />
              <Text style={style.alarmText}>Locked</Text>
            </TouchableOpacity>
          )}
          <View
            style={{
              borderWidth: 1,
              borderColor: '#6b6a6a59',
              height: height * 0.12,
              position: 'absolute',
              left: width * 0.11,
            }}></View>
          <View style={{marginHorizontal: width * 0.03}}></View>

          {/* <Graph /> */}
          {/* <View style={style.iconAndText}>
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
          <View style={style.iconAndText}>
            <Notification name="notifications-active" size={width * .05} color={this.state.sysCondi ? '#0ae916' : 'red'} style={{ marginHorizontal: width * .01 }} />
            <Text style={style.alarmText}>System Failure</Text>
          </View> */}
          <View style={style.iconAndText}>
            <Text style={style.aboveTopText}>Patient ID</Text>
            <Text style={style.topText}>{this.state.patientId}</Text>
          </View>
          <View style={style.iconAndText}>
            <Text style={style.aboveTopText}>Age</Text>
            <Text style={style.topText}>{this.state.age} Days</Text>
          </View>
          <View style={style.iconAndText}>
            <Text style={style.aboveTopText}>Weight</Text>
            <Text style={style.topText}>{this.state.weight} lb</Text>
          </View>
          <View style={style.iconAndText}>
            <Text style={style.aboveTopText}>S/o</Text>
            <Text style={style.topText}>{this.state.fatherName}</Text>
          </View>
          <View style={style.iconAndText}>
            <Text style={style.aboveTopText}>Doctor Name</Text>
            <Text style={style.topText}>{this.state.DrName}</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#6b6a6a59',
              height: height * 0.12,
              position: 'absolute',
              right: width * 0.1,
            }}></View>
          <LeftSlider
            selectWeight={this.handleWeight}
            selectTemp={this.handleTemp}
            airHigTemp={this.handleAirHigher}
            airLoweTemp={this.handleAirLow}
            skinHighTemp={this.handleSkinHigher}
            skinLowTemp={this.handleSkinLower}
            spo2Uper={this.handleSpo2Uper}
            spo2Lower={this.handleSpo2Lower}
            hrUper={this.handleHrUper}
            hrLower={this.handleHrLower}
            switchAir={this.handleSwitchAir}
            switchSkin={this.handleSwitchSkin}
            switchSpo2={this.handleSwitchSpo2}
            switchWeight={this.handleSwitchWeight}
            switchHumidity={this.handleSwitchHumidity}
            switchOxygen={this.handleSwitchOxygen}
            locker={this.state.lock}
            oxy={this.state.oxy}
            skinTemp={this.state.skinTemp}
            airTemp={this.state.airTemp}
            handleAirTempDeactivate={this.handleAirTempDeactivate}
            handleSkinTempDeactivate={this.handleSkinTempDeactivate}
            handleOxygenDeactivate={this.handleOxygenDeactivate}
            handleAirTempActivate={this.handleAirTempActivate}
            handleSkinTempActivate={this.handleSkinTempActivate}
            handleOxygenActivate={this.handleOxygenActivate}
            siren={siren}
            getPatientID={this.handlePatientID}
            getAge={this.handleAge}
            getWeight={this.handleTheWeight}
            getFatherName={this.handleFatherName}
            getDrName={this.handleDrName}
          />
        </View>
        <View style={style.inerContainer1}>
          {/* Air Temperature */}
          {!this.state.switchAir ? null : (
            <View>
              <Text style={style.airHeading}>Air Temperature</Text>
              <AirTemp
                value={this.state.tempSign}
                locker={this.state.lock}
                airHigherTemp={this.state.higherAirValue}
                airLowerTemp={this.state.lowAirValue}
                handleAirTemp={this.airTempValue}
                activate={this.state.airTempActivate}
                deactivate={this.state.airTempDeactivate}
                run={this.state.run}
              />
            </View>
          )}

          {/* Skin Temperature */}
          {!this.state.switchSkin ? null : (
            <View>
              <Text style={style.tempHeading}>Skin Temperature</Text>
              <SkinTemp
                value={this.state.tempSign}
                locker={this.state.lock}
                skinHighTemp={this.state.skinHigherTemp}
                skinLowerTemp={this.state.skinLowTemp}
                handleSkinTemp={this.skinTempValue}
                activate={this.state.skinTempActivate}
                deactivate={this.state.skinTempDeactivate}
                run2={this.state.run2}
              />
            </View>
          )}

          {/* Spo2 / Hr */}
          {!this.state.switchSpo2 ? null : (
            <View>
              <Text style={style.humHeading}>SP02/HR</Text>
              <SPO2
                locker={this.state.lock}
                spo2Upper={this.state.spo2Uper}
                spo2Lower={this.state.spo2Lower}
                hrUpper={this.state.hrUper}
                hrLower={this.state.hrLower}
              />
            </View>
          )}

          {/* Weight */}
          {!this.state.switchWeight ? null : (
            <View>
              <Text style={style.weigHeading}>BabyWeight</Text>
              <Weight value={this.state.weightSign} locker={this.state.lock} />
            </View>
          )}

          {/* Humidity */}
          {!this.state.switchHumidity ? null : (
            <View>
              <Text style={style.Spo2Heading}>Humidity</Text>
              <Humidity locker={this.state.lock} />
            </View>
          )}

          {/* Oxygen */}
          {!this.state.switchOxygen ? null : (
            <View>
              <Text style={style.oxygenHeading}>Oxygen Level</Text>
              <Oxygen
                locker={this.state.lock}
                handleOxy={this.oxyValue}
                activate={this.state.oxygenActivate}
                deactivate={this.state.oxygenDeactivate}
                run3={this.state.run3}
              />
            </View>
          )}
        </View>
      </View>
    );
  }
}
