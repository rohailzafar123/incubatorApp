import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import style from './style';
import Menu from 'react-native-vector-icons/MaterialCommunityIcons';
import NewOpen from 'react-native-vector-icons/MaterialCommunityIcons';
import Notification from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
const { height, width } = Dimensions.get('window');

export default class App extends Component {
    state = {
        isModalVisible: false
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    
  toggleModal = () => {
      this.setState({ isModalVisible: !this.state.isModalVisible });
  };
    render() {
        return (
            <View>
               <View style={style.TemperatureView}>
      <View style={style.Temperature}>
        <View style={style.skinInerContainer}>
          <View style={style.skinIner}>
            <View style={{ flex: 1, }}>
              <Text style={style.currentTempText}>
                SPOT
              </Text>
              <View style={style.boxUperStyle}>
                <View style={style.likeInputOxygen}>
                  <Text
                    style={style.tempInputCur} >
                    98
                  </Text>
                </View>
                
                <Text style={style.centiUper}>
                  %
                </Text>
                <TouchableOpacity style={style.iconOpenRow} onPress={this.toggleModal}>
                  <NewOpen name="open-in-new" size={width * .035} color="black"  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flexDirection: 'row', flex: 1, }}>
              <View>
                <Text style={style.setTemp}>
                   HR
                </Text>
                <View style={style.boxLowerStyle}>
                  <View style={style.likeInputMin}>
                    <Text style={style.tempInputSet}>
                      82
                    </Text>
                  </View>
                  <Text style={style.centiLower}>
                    %
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', }}>
                

              </View>


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
                    <View style={{ flex: 1, }}>
                        <View style={style.haiderContainer}>
                            <View style={style.headerInner}>
                                <Text style={style.headerHeading}>
                                    SPO2 History
                                </Text>
                                {/* <View style={style.headerIcon}>


                                    <Status name="notifications-active" size={width * .05} color="#05dd3bc5" style={{ marginHorizontal: width * .01 }} />
                                    <Text style={style.alarmText}>Current Status</Text>
                                </View> */}
                                <View >
                                    <TouchableOpacity onPress={() => this.toggleModal()} style={style.submit}>

                                        <Text style={style.alarmText}>Done</Text>

                                    </TouchableOpacity>

                                </View>
                            </View>

                        </View>
                        <View style={style.bodyMainContainer}>
                            <View style={style.bodyContainer}>
                                {/* <View>
                                    <Text
                                        style={style.bodyHeading}>
                                        Weight Summary
                                    </Text>
                                    <Image
                                        source={require('../../../../images/Graphs.jpg')}
                                        style={style.graphImage} />
                                </View>
                                <View style={style.dataContainer}>
                                    <Text style={style.currentWieHeading}>Current Weight</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={style.currentWeiView}>
                                            <TextInput
                                                placeholder={'00.0'}
                                                style={style.currentWeiInp}
                                                keyboardType={'numeric'}
                                                maxLength={6}
                                                onChangeText={currentWei => this.setState({ currentWei })}
                                            />
                                        </View>
                                        {this.state.toggle == false ? (
                                            <Text style={{
                                                fontSize: width * .03,
                                                fontWeight: 'bold',
                                                marginLeft: width * .005,
                                            }}>Kgs</Text>
                                        ) : (
                                                <Text style={{
                                                    fontSize: width * .03,
                                                    fontWeight: 'bold',
                                                    marginLeft: width * .005,
                                                }}>
                                                    £
                                                </Text>
                                            )}
                                    </View>
                                    <Text style={style.preWeiHeading}>Previous Weight</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={style.preWeiInpuView}>
                                            <TextInput placeholder={'00.0'}
                                                style={style.preWeiInput}
                                                keyboardType={'numeric'}
                                                maxLength={6}
                                                onChangeText={preWei => this.setState({ preWei })}

                                            />
                                        </View>
                                        {this.state.toggle == false ? (
                                            <Text style={{
                                                fontSize: width * .025,
                                                fontWeight: 'bold',
                                                marginLeft: width * .005,
                                            }}>Kgs</Text>
                                        ) : (
                                                <Text style={{
                                                    fontSize: width * .025,
                                                    fontWeight: 'bold',
                                                    marginLeft: width * .005,
                                                }}>£</Text>
                                            )}

                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View>
                                            <Text style={style.minWieHeading}>Min Weight</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <View style={style.minWeiInpuView}>
                                                    <TextInput placeholder={'00.0'}
                                                        style={style.minWeiInput}
                                                        keyboardType={'numeric'}
                                                        maxLength={5}
                                                    />
                                                </View>
                                                <Text style={{
                                                    fontSize: width * .023,
                                                    fontWeight: 'bold',
                                                    marginLeft: width * .005,
                                                }}>%</Text>
                                            </View>
                                        </View>
                                        <View >
                                            <Text style={style.maxWeiHeading}>Max Weight</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <View style={style.maxWeiInpuView}>
                                                    <TextInput placeholder={'00.0'}
                                                        style={style.maxWeiInput}
                                                        keyboardType={'numeric'}
                                                        maxLength={5}
                                                    />
                                                </View>
                                                <Text style={{
                                                    fontSize: width * .023,
                                                    fontWeight: 'bold',
                                                    marginLeft: width * .005,
                                                }}>%</Text>

                                            </View>
                                        </View>
                                    </View>
                                    <Text style={style.toggleHeading}>Default Units</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                        <SwitchToggle
                                            switchOn={this.state.toggle}
                                            onPress={() => this.setState({ toggle: !this.state.toggle })}
                                            useNativeDriver={false}
                                            backgroundColorOn={'white'}
                                            circleColorOn={'#05dd3b'}
                                            backgroundColorOff={'white'}
                                            circleColorOff={'gray'}
                                            containerStyle={style.toggleContainer}
                                            circleStyle={style.toggleCircle}
                                        />
                                        <Text style={{
                                            fontSize: width * .023,
                                            fontWeight: 'bold',
                                            marginLeft: width * .005,
                                        }}>
                                            Kgs/£
                                    </Text>
                                    </View> */}
                                {/* </View> */}
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>

        )
    }
}