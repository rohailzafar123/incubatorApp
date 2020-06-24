import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Switch, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import style from './weightStyle';
import comStyle from './weightCompStyle';
import Menu from 'react-native-vector-icons/MaterialCommunityIcons';
import NewOpen from 'react-native-vector-icons/MaterialCommunityIcons';
import Notification from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import Status from 'react-native-vector-icons/MaterialIcons';
import Send from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';
import SwitchToggle from 'react-native-switch-toggle';


const { height, width } = Dimensions.get('window');

export default class App extends Component {
    state = {
        isModalVisible: false,
        toggle: false,
        currentWei: "00.0",
        preWei:'00.0'
    }
    togglebuttun = () => {
        this.setState({ toggle: !this.state.toggle });
    };
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    render() {
        console.log(this.state.toggle)
        return (
            <View>
                <TouchableOpacity style={style.weightView} onPress={this.toggleModal}>
                    <View style={style.weight}>
                        <View style={style.OxigenInerContainer}>
                            <View style={style.OxigenIner}>
                                <View style={{ flex: 1, }}>
                                    <Text style={{
                                        fontSize: width * .02,
                                        fontWeight: "bold",
                                        color: '#FF420E'
                                    }}>
                                        Current Weight
                                    </Text>
                                    <View style={style.boxUperStyle}>
                                        <View style={style.likeInputOxygen}>
                                            <Text style={{
                                                fontSize: width * .05,
                                                fontWeight: "bold",
                                                color: '#484149c5'
                                            }}>
                                                {this.state.currentWei}
                                            </Text>
                                        </View>

                                        {this.state.toggle == false ? (
                                            <View>
                                                <Text style={{
                                                    fontSize: width * .03,
                                                    fontWeight: "bold",
                                                    color: '#484149c5',
                                                    marginTop: height * .02,
                                                    marginLeft: height * .01
                                                }}>Kgs.
                                                                 </Text>
                                                <NewOpen name="open-in-new" size={width * .035} color="black" style={{ bottom: height * .14, left: width * .022 }} />
                                            </View>
                                        ) : (
                                                <View>
                                                    <Text style={{
                                                        fontSize: width * .03,
                                                        fontWeight: "bold",
                                                        color: '#484149c5',
                                                        marginTop: height * .02,
                                                        marginLeft: height * .01
                                                    }}>£
                                                                 </Text>
                                                    <NewOpen name="open-in-new" size={width * .035} color="black" style={{ bottom: height * .14, left: width * .022 }} />
                                                </View>

                                            )}


                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', flex: 1, }}>
                                    <View>
                                        <Text style={{
                                            fontSize: width * .018,
                                            fontWeight: "bold",
                                            color: '#FF420E',
                                            top: height * .006,
                                            marginVertical: width * .005
                                        }}>
                                            Previous Weight
                                        </Text>
                                        <View style={style.boxLowerStyle}>
                                            <View style={style.likeInputMin}>
                                                <Text style={{
                                                    fontSize: width * .035,
                                                    fontWeight: "bold",
                                                    color: '#484149c5'
                                                }}>
                                                {this.state.preWei}
                                                </Text>
                                            </View>
                                            {this.state.toggle == false ? (
                                                <Text style={{
                                                    fontSize: width * .03,
                                                    fontWeight: "bold",
                                                    color: '#484149c5',
                                                    marginLeft: height * .01
                                                }}>
                                                    Kgs.
                                                </Text>
                                            ) : (
                                                    <Text style={{
                                                        fontSize: width * .03,
                                                        fontWeight: "bold",
                                                        color: '#484149c5',
                                                        marginLeft: height * .01
                                                    }}>
                                                        £
                                                    </Text>
                                                )}

                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', }}>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                </TouchableOpacity>
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
                                    WEIGHT BALANCE
                                </Text>
                                <View style={style.headerIcon}>
                                    

                                    <Status name="notifications-active" size={width * .05} color="#05dd3bc5" style={{ marginHorizontal: width * .01 }} />
                                    <Text style={style.alarmText}>Current Status</Text>
                                </View>
                                <View >
                                <TouchableOpacity onPress={() => this.toggleModal()} style={style.submit}>
                                
                                    <Text style={style.alarmText}>Done</Text>

                                        </TouchableOpacity>
                                    
                                </View>
                            </View>

                        </View>
                        <View style={style.bodyMainContainer}>
                            <View style={style.bodyContainer}>
                                <View>
                                    <Text
                                        style={style.bodyHeading}>
                                        Weight Summary
                                    </Text>
                                    <Image
                                        source={require('../../../images/Graphs.jpg')}
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
                                                onChangeText={currentWei => this.setState({currentWei})}
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
                                                onChangeText={preWei => this.setState({preWei})}

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
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>

        )
    }
}