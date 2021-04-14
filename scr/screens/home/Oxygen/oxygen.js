import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import style from './oxygenStyle';
import Menu from 'react-native-vector-icons/MaterialCommunityIcons';
import NewOpen from 'react-native-vector-icons/MaterialCommunityIcons';
import Notification from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';

import {useAsyncStorage} from '@react-native-community/async-storage';
import RNFS from 'react-native-fs';

import {createResource} from '../../../config/SimpleApiCall';
import {oxygen} from '../../../config/WebServices';

const {getItem, setItem} = useAsyncStorage('userInfo');

const {height, width} = Dimensions.get('window');

export default class App extends Component {
  state = {
    isModalVisible: false,
    oxygenLevel: 0,
    oxygenHistory: [],
    date: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
    hour: new Date().getHours(),
    minutes: new Date().getMinutes(),
  };

  componentDidMount() {
    this.sendOxygenTemp();
    this.randomVal();
  }

  sendOxygenTemp = async () => {
    const {currentTemp, setTemp} = this.state;

    let userInfo = await getItem();
    let _ = JSON.parse(userInfo);

    let payload = {
      current_temp: currentTemp,
      estimate_temp: setTemp,
      userId: _.login_user[0]._id,
    };

    createResource(oxygen, payload, _.token)
      .then((res) => {
        Alert.alert('Success', 'Successfully Added Oxygen!');
      })
      .catch((error) => {
        // this.setState({isloading: false});
        if (error.response) {
          Alert.alert('Error', error.response.data.msg);
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          Alert.alert('Error', 'Something Went Wrong');

          console.log(error.request);
        } else {
          Alert.alert('Error', error.msg);

          ErrorHelper.handleErrors(error.msg, true);
        }
      });
  };

  populateArray = () => {
    this.state.oxygenHistory.push({
      currentOxygenLevel: this.state.oxygenLevel + '\u2103',
      setOxygenLevel: this.state.oxygenLevel - 1 + '\u2103',
    });
  };

  _renderMyList = ({item}) => {};

  randomVal() {
    setInterval(() => {
      const rand = Math.random() * 40;
      this.setState({oxygenLevel: rand.toFixed()});
      this.props.handleOxy(this.state.oxygenLevel);
    }, 15000);
  }

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  render() {
    return (
      <View>
        <View style={style.TemperatureView}>
          <View style={style.Temperature}>
            <View style={style.skinInerContainer}>
              <View style={style.skinIner}>
                <View style={{flex: 1}}>
                  <Text style={style.currentTempText}>
                    Current Oxygen Level
                  </Text>
                  <View style={style.boxUperStyle}>
                    <View style={style.likeInputOxygen}>
                      <Text style={style.tempInputCur}>
                        {/* //todo: here is the value of oxygen */}
                        {this.state.oxygenLevel}
                      </Text>
                    </View>

                    <Text style={style.centiUper}>%</Text>
                    {this.props.locker ? (
                      <TouchableOpacity
                        style={style.iconOpenRow}
                        onPress={this.toggleModal}>
                        <NewOpen
                          name="open-in-new"
                          size={width * 0.035}
                          color="black"
                        />
                      </TouchableOpacity>
                    ) : (
                      <View style={style.iconOpenRow}>
                        <NewOpen
                          name="open-in-new"
                          size={width * 0.035}
                          color="red"
                        />
                      </View>
                    )}
                  </View>
                </View>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <View>
                    <Text style={style.setTemp}>Normal Range</Text>
                    <View style={style.boxLowerStyle}>
                      <View style={style.likeInputMin}>
                        <Text style={style.tempInputSet}>21</Text>
                      </View>

                      <Text style={style.centiLower}>%</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row'}}></View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Modal
          animationIn="slideInUp"
          animationOut="slideOutDown"
          onBackdropPress={() => this.toggleModal()}
          onSwipeComplete={() => this.toggleModal()}
          swipeDirection="right"
          isVisible={this.state.isModalVisible}
          style={style.modalMainContainer}>
          <View style={{flex: 1}}>
            <View style={style.haiderContainer}>
              <View style={style.headerInner}>
                <Text style={style.headerHeading}>Oxygen History</Text>
                <View style={style.headerIcon} />
                <View>
                  <TouchableOpacity
                    onPress={() => this.toggleModal()}
                    style={style.submit}>
                    <Text style={style.alarmText}>Done</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={style.bodyMainContainer}>
              <View style={style.bodyContainer}>
                <Text style={style.headingStyle}>Heading 1</Text>
                <Text style={style.headingStyle}>Heading 2</Text>
                <Text style={style.headingStyle}>Heading 3</Text>
                <Text style={style.headingStyle}>Heading 4</Text>
              </View>
              <View style={style.bodyContent}>
                <Text style={style.bodyTextStyle}>body 1</Text>
                <Text style={style.bodyTextStyle}>body 2</Text>
                <Text style={style.bodyTextStyle}>body 3</Text>
                <Text style={style.bodyTextStyle}>body 4</Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
