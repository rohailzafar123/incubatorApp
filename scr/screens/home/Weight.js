import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Switch, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import style from './weightStyle';
import Menu from 'react-native-vector-icons/MaterialCommunityIcons';
import NewOpen from 'react-native-vector-icons/MaterialCommunityIcons';
import Notification from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import Status from 'react-native-vector-icons/MaterialIcons';
import Send from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get('window');

export default class App extends Component {
    state = {
        isModalVisible: false
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    render() {
        return (
            <View>
                <TouchableOpacity style={style.weightView} onPress={this.toggleModal}>
                    <View style={style.weight}>
                        <View style={style.OxigenInerContainer}>
                            <View style={style.OxigenIner}>
                                <View style={{ flex: 1, }}>
                                    <Text style={{ fontSize: width * .02, fontWeight: "bold", color: '#FF420E' }}>
                                        Current Weight
                                    </Text>
                                    <View style={style.boxUperStyle}>
                                        <View style={style.likeInputOxygen}>
                                            <Text style={{ fontSize: width * .05, fontWeight: "bold", color: '#484149c5' }}>
                                                00.0
                                            </Text>
                                        </View>
                                        <Text style={{ fontSize: width * .03, fontWeight: "bold", color: '#484149c5', marginTop: height * .02, marginLeft: height * .01 }}>
                                            Kgs.
                                        </Text>
                                        <TouchableOpacity >
                                            <NewOpen name="open-in-new" size={width * .035} color="black" style={{ bottom: height * .05, right: width * .040 }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', flex: 1, }}>
                                    <View>
                                        <Text style={{ fontSize: width * .018, fontWeight: "bold", color: '#FF420E', top: height * .006, marginVertical: width * .005 }}>
                                            Previous Weight
                                        </Text>
                                        <View style={style.boxLowerStyle}>
                                            <View style={style.likeInputMin}>
                                                <Text style={{ fontSize: width * .035, fontWeight: "bold", color: '#484149c5' }}>
                                                    00.0
                                                </Text>
                                            </View>
                                            <Text style={{ fontSize: width * .03, fontWeight: "bold", color: '#484149c5', marginLeft: height * .01 }}>
                                                Kgs.
                                            </Text>
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
                    style={{
                        backgroundColor: 'white',
                        maxHeight: height * .7,
                        maxWidth: width * 1,
                        top: width * .098,
                        borderTopRightRadius: width * .05,
                        borderTopLeftRadius: width * .05,
                        // maxHeight: height * .7,
                    }}>
                    <View style={{ flex: 1, }}>
                        <View style={{
                            width: width * .9,
                            height: height * .15,
                        }}>
                            <View style={{
                                flex: 1,
                                flexDirection: "row",
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingHorizontal: width * .02,
                                elevation: width * .003,
                                borderTopRightRadius: width * .05,
                                borderTopLeftRadius: width * .05,
                            }}>
                                <Text style={{
                                    fontSize: width * .035,
                                    fontWeight: 'bold',
                                    color: '#484149c5',
                                }}>
                                    WEIGHT BALANCE
                                </Text>
                                <View style={{ alignItems: 'center', marginLeft: width * .35 }}>
                                    <Status name="notifications-active" size={width * .05} color="#05dd3bc5" style={{ marginHorizontal: width * .01 }} />
                                    <Text style={style.alarmText}>Current Status</Text>
                                </View>
                                <View >
                                    <Send name="send-o" size={width * .030} color="black" style={{
                                        marginHorizontal: width * .01,
                                    }} />
                                </View>
                            </View>

                        </View>
                        <View style={{
                            width: width * .9,
                            height: height * .6,
                            backgroundColor: '#ff5555fd'
                        }}>
                            <View style={{
                                flex: 1,
                                marginHorizontal: width * .02,
                                marginTop: width * .01,
                                flexDirection: 'row',
                                justifyContent: 'space-between'

                            }}>
                                <View>
                                    <Text style={{ fontSize: width * .025, fontWeight: 'bold', paddingBottom: width * .005 }}>Weight Summary</Text>
                                    <Image source={require('../../../images/Graphs.jpg')} style={{
                                        width: width * .58,
                                        height: height * .45,
                                    }} />
                                </View>
                                <View style={{
                                    width: width * .27,
                                    height: height * .57,
                                    backgroundColor: '#ffe3e383',
                                    elevation: width * .003,
                                    marginLeft: width * .01,
                                    borderRadius: width * .04,
                                    padding: width * .015
                                }}>
                                    <Text style={{
                                        fontSize: width * .02,
                                        fontWeight: 'bold',
                                        color: '#484149c5',
                                        marginBottom: width * .002,
                                        marginLeft: width * .002,

                                    }}>Current Weight</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TextInput placeholder={'00.0'}
                                            style={{
                                                width: width * .18,
                                                height: height * .1,
                                                borderRadius: width * .02,
                                                fontSize: width * .025,
                                                fontWeight: 'bold',
                                                elevation: width * .003,
                                                paddingHorizontal: width * .01,
                                                backgroundColor: "white",
                                                textAlign: 'right',
                                                color: '#484149c5'
                                            }}
                                            keyboardType={'numeric'}
                                        />
                                        <Text style={{
                                            fontSize: width * .03,
                                            fontWeight: 'bold',
                                            marginLeft: width * .005,

                                        }}>Kgs</Text>

                                    </View>
                                    <Text style={{
                                        fontSize: width * .02,
                                        fontWeight: 'bold',
                                        color: '#484149c5',
                                        marginBottom: width * .002,
                                        marginLeft: width * .002,

                                    }}>Previous Weight</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TextInput placeholder={'00.0'}
                                            style={{
                                                width: width * .09,
                                                height: height * .09,
                                                borderRadius: width * .01,
                                                fontSize: width * .02,
                                                fontWeight: 'bold',
                                                elevation: width * .003,
                                                paddingHorizontal: width * .01,
                                                backgroundColor: "white",
                                                textAlign: 'right',
                                                textAlignVertical: 'center',
                                                color: '#484149c5',
                                                // paddingTop: width * .02,

                                            }}
                                            keyboardType={'numeric'}
                                        />
                                        <Text style={{
                                            fontSize: width * .025,
                                            fontWeight: 'bold',
                                            marginLeft: width * .005,

                                        }}>Kgs</Text>

                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View>

                                            <Text style={{
                                                fontSize: width * .018,
                                                fontWeight: 'bold',
                                                color: '#484149c5',
                                                marginBottom: width * .002,
                                                marginLeft: width * .002,

                                            }}>Min Weight</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <TextInput placeholder={'00.0'}
                                                    style={{
                                                        width: width * .09,
                                                        height: height * .09,
                                                        borderRadius: width * .01,
                                                        fontSize: width * .02,
                                                        fontWeight: 'bold',
                                                        elevation: width * .003,
                                                        paddingHorizontal: width * .01,
                                                        backgroundColor: "white",
                                                        textAlign: 'right',
                                                        textAlignVertical: 'center',
                                                        color: '#484149c5',

                                                    }}
                                                    keyboardType={'numeric'}
                                                />
                                                <Text style={{
                                                    fontSize: width * .023,
                                                    fontWeight: 'bold',
                                                    marginLeft: width * .005,

                                                }}>%</Text>

                                            </View>
                                        </View>
                                        <View >

                                            <Text style={{
                                                fontSize: width * .018,
                                                fontWeight: 'bold',
                                                color: '#484149c5',
                                                marginBottom: width * .002,
                                                marginLeft: width * .002,

                                            }}>Max Weight</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <TextInput placeholder={'00.0'}
                                                    style={{
                                                        width: width * .09,
                                                        height: height * .09,
                                                        borderRadius: width * .01,
                                                        fontSize: width * .02,
                                                        fontWeight: 'bold',
                                                        elevation: width * .003,
                                                        paddingHorizontal: width * .01,
                                                        backgroundColor: "white",
                                                        textAlign: 'right',
                                                        textAlignVertical: 'center',
                                                        color: '#484149c5',
                                                        // paddingTop: width * .02,

                                                    }}
                                                    keyboardType={'numeric'}
                                                />
                                                <Text style={{
                                                    fontSize: width * .023,
                                                    fontWeight: 'bold',
                                                    marginLeft: width * .005,

                                                }}>%</Text>

                                            </View>
                                        </View>
                                    </View>
                                    <Switch
                                        trackColor={{ false: 'gray', true: 'teal' }}
                                        thumbColor="white"
                                        ios_backgroundColor="gray"
                                        onValueChange={(value) => this.setState({ toggle: value })}
                                        value={this.state.toggle}
                                        style={{
                                            width: width * .02,
                                            height: height *.04,        
                                            transform: [{ scaleX:  moderateScale(1, 0.2) }, { scaleY:  
                                                moderateScale(1, 0.2) }],
                                        
                                        backgroundColor:'white',
                                        }}
                                    />
                                </View>

                            </View>
                        </View>
                    </View>
                </Modal>
            </View>

        )
    }
}