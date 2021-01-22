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

import {createResource} from '../../../config/SimpleApiCall';
import {oxygen} from '../../../config/WebServices';

const {getItem, setItem} = useAsyncStorage('userInfo');

const {height, width} = Dimensions.get('window');

export default class App extends Component {
  state = {
    isModalVisible: false,
  };

  componentDidMount() {
    this.sendOxygenTemp();
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
                      <Text style={style.tempInputCur}>34.1</Text>
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
                {/* <View style={style.headerIcon}>


                                    <Status name="notifications-active" size={width * .05} color="#05dd3bc5" style={{ marginHorizontal: width * .01 }} />
                                    <Text style={style.alarmText}>Current Status</Text>
                                </View> */}
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
              <View style={style.bodyContainer}></View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
