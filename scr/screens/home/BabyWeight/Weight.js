import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Switch, Image, StatusBar, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import style from './weightStyle';
import comStyle from './weightCompStyle';
import Menu from 'react-native-vector-icons/MaterialCommunityIcons';
import NewOpen from 'react-native-vector-icons/MaterialCommunityIcons';
import Notification from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import Status from 'react-native-vector-icons/MaterialIcons';
import Send from 'react-native-vector-icons/FontAwesome';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import SwitchToggle from 'react-native-switch-toggle';
import Alarm from 'react-native-vector-icons/MaterialCommunityIcons';
import { Fonts } from '../../../utils/fonts';
import Back from 'react-native-vector-icons/MaterialCommunityIcons';
import NumericInput from 'react-native-numeric-input'

import Check from 'react-native-vector-icons/AntDesign';

const { height, width } = Dimensions.get('window');

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            toggle: false,
            currentWei: 0,
            preWei: 3,
            weight: false,
            toggle: false,
            dateList: [],
            date: new Date().getDate(),
            month: new Date().getMonth() + 1,
            year: new Date().getFullYear(),
            hour: new Date().getHours(),
            minutes: new Date().getMinutes(),
        }
    }
    _renderMyList = ({ item }) => (
        <View style={{ flex: 1, }}>
            <View style={style.renderListContainer}>
                <Text style={style.renderListHeading1}>
                    {this.state.date}/{this.state.month}/{this.state.year}
                </Text>
                <Text style={style.renderListHeading2}>
                    {this.state.hour}:{this.state.minutes}
                </Text>
                <Text style={style.renderListHeading1}>
                    {item}
                </Text>
            </View>
        </View>
    )
    openToggel = () => {
        this.setState({ toggle: !this.state.toggle, currentWei: null })
    }
    submitCondition = () => {
        const historyData = this.state.currentWei;
        let unit;
        !this.props.value ? (unit = 'kg') : (unit = 'lb');
        if (this.state.currentWei == null) {
            alert('Type Weight')
        }
        else {
            this.state.dateList.push(historyData + unit)
            this.setState({ toggle: !this.state.toggle });
        }
    };

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });

    };
    render() {
        console.log(this.state.dateList)
        const showData = this.state.dateList;
        return (
            <View>
                {
                    this.props.locker ? (
                        <TouchableOpacity style={comStyle.TemperatureView} onPress={() => this.openToggel()}>
                            <View style={comStyle.Temperature}>
                                <View style={comStyle.weighHeaderContainer}>
                                    <View style={{ flex: 1, paddingLeft: width * .005 }}>
                                        <Text style={comStyle.currentTempText}>
                                            Current Weight
                                    </Text>
                                        <View style={comStyle.boxUperStyle}>
                                            <View style={comStyle.likeInputOxygen}>
                                                <Text
                                                    style={comStyle.tempInputCur} >
                                                    {this.state.currentWei}
                                                </Text>
                                            </View>
                                            {
                                                !this.props.value ? (
                                                    <Text style={comStyle.kgUper}>
                                                        kg
                                                    </Text>
                                                ) : (
                                                        <Text style={comStyle.pondUper}>
                                                            £
                                                        </Text>
                                                    )
                                            }
                                            <TouchableOpacity style={comStyle.iconOpenRow} onPress={() => this.toggleModal()}>
                                                <View>
                                                    <NewOpen name="open-in-new" size={width * .035} color="black" />
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={comStyle.zeroBotton}
                                                onPress={() => this.setState({ currentWei: 0 })}
                                            >
                                                <Text style={comStyle.zeroText}>
                                                    Auto Zero
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ) : (
                            <View style={comStyle.TemperatureView} >
                                <View style={comStyle.Temperature}>
                                    <View style={comStyle.weighHeaderContainer}>
                                        <View style={{ flex: 1, paddingLeft: width * .005 }}>
                                            <Text style={comStyle.currentTempText}>
                                                Current Weight
                                    </Text>
                                            <View style={comStyle.boxUperStyle}>
                                                <View style={comStyle.likeInputOxygen}>
                                                    <Text
                                                        style={comStyle.tempInputCur} >
                                                        {this.state.currentWei}
                                                    </Text>
                                                </View>
                                                {
                                                    !this.props.value ? (
                                                        <Text style={comStyle.kgUper}>
                                                            kg
                                                        </Text>
                                                    ) : (
                                                            <Text style={comStyle.pondUper}>
                                                                £
                                                            </Text>
                                                        )
                                                }
                                                <View style={comStyle.iconOpenRow} >
                                                    <View>
                                                        <NewOpen name="open-in-new" size={width * .035} color="red" />
                                                    </View>
                                                </View>
                                                <View style={comStyle.zeroBotton}
                                                // onPress={() => this.setState({ currentWei: 0 })}
                                                >
                                                    <Text style={comStyle.zeroText}>
                                                        Auto Zero
                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )}

                < Modal
                    animationIn="bounceIn"
                    animationOut="bounceOut"
                    isVisible={this.state.toggle}
                    style={{
                        backgroundColor: 'white',
                        maxHeight: height * .4,
                        maxWidth: width * .4,
                        top: height * .14,
                        left: width * .26,
                        borderBottomLeftRadius: width * .005,
                        borderTopRightRadius: width * .005,
                        borderTopLeftRadius: width * .025,
                        borderBottomRightRadius: width * .025,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <View style={{
                        height: height * .33,
                        width: width * .35,

                    }}>
                        <View style={{
                            flex: 1,
                            backgroundColor: 'white',
                            borderBottomLeftRadius: width * .005,
                            borderTopRightRadius: width * .005,
                            borderTopLeftRadius: width * .025,
                            borderBottomRightRadius: width * .025,
                            elevation: width * .01,
                            // alignSelf:'center'
                        }}>
                            <View style={{
                                height: height * .1,
                                width: width * .35,
                            }}>
                                <View style={{
                                    flex: 1,
                                    borderTopRightRadius: width * .005,
                                    borderTopLeftRadius: width * .025,
                                    justifyContent: 'center',
                                    paddingLeft: width * .02,
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    elevation: width * .002,
                                    backgroundColor: '#e44f3bd5',
                                }}>
                                    <TouchableOpacity onPress={this.openToggel} style={{
                                        position: 'absolute',
                                        left: width * .0,
                                        height: height * .09,
                                        width: width * .07,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Back name={'keyboard-backspace'} size={width * .03} color='white' />
                                    </TouchableOpacity>
                                    <Text style={{
                                        fontFamily: Fonts.Handlee,
                                        fontSize: width * .03,
                                        color: "white",
                                    }}>
                                        Baby Weight
                                        </Text>
                                </View>
                            </View>
                            <View style={{
                                height: height * .13,
                                width: width * .35,
                            }}>
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row',

                                }}>
                                    <Text style={{
                                        fontFamily: Fonts.Handlee,
                                        fontSize: width * .02,
                                        color: "#e44f3bd5",
                                        marginRight: width * .005
                                    }}>
                                        Type Weight
                                    </Text>
                                    <View style={{
                                        width: width * .1,
                                        height: height * .075,
                                        borderWidth: 1,
                                        borderRadius: width * .003,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderColor: '#e44f3bd5'
                                    }}>
                                        <TextInput
                                            placeholder='Type Here'
                                            keyboardType="number-pad"
                                            maxLength={3}
                                            style={{
                                                fontFamily: Fonts.BalooChettan2,
                                                fontSize: width * .02,
                                                color: "#e44f3bd5",
                                                textAlign: 'center'
                                            }}
                                            onChangeText={e => this.setState({ currentWei: e })}
                                        />
                                    </View>
                                    {
                                        !this.props.value ? (
                                            <Text style={{
                                                fontSize: width * .025,
                                                fontFamily: Fonts.BalooChettan2,
                                                color: '#e44f3bd5',
                                                marginLeft: width * .005
                                            }}>
                                                kg
                                            </Text>
                                        ) : (
                                                <Text style={{
                                                    fontSize: width * .025,
                                                    fontFamily: Fonts.BalooChettan2,
                                                    color: '#e44f3bd5',
                                                    marginLeft: width * .005
                                                }}>
                                                    £
                                                </Text>
                                            )
                                    }
                                </View>
                            </View>
                            <View style={{
                                height: height * .1,
                                width: width * .35,
                            }}>
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <TouchableOpacity style={{
                                        width: width * .2,
                                        height: height * .07,
                                        backgroundColor: '#e44f3bd5',
                                        elevation: width * .003,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: width * .1,
                                        flexDirection: 'row'
                                    }}
                                        onPress={this.submitCondition}>
                                        <Text style={{
                                            fontSize: width * .023,
                                            fontFamily: Fonts.Handlee,
                                            color: 'white',
                                        }}>
                                            Submit
                                            </Text>
                                        <Check name={'checkcircle'} size={width * .012} color='white' style={style.check} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>

                    </View>


                </Modal>
                <Modal
                    animationIn="slideInUp"
                    animationOut="slideOutDown"
                    isVisible={this.state.isModalVisible}
                    style={style.modalMainContainer}>
                    <View style={{ flex: 1, }}>
                        <View style={style.haiderContainer}>
                            <View style={style.headerInner}>
                                <Text style={style.headerHeading}>
                                    Weight History
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
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    width: width * .84,

                                }}>
                                    <Text style={{
                                        fontFamily: Fonts.BalooChettan2,
                                        fontSize: width * .04,
                                        color: "#e44f3bd5",
                                        textAlign: 'center',
                                    }}>
                                        Date
                                    </Text>
                                    <Text style={{
                                        fontFamily: Fonts.BalooChettan2,
                                        fontSize: width * .04,
                                        color: "#e44f3bd5",
                                        textAlign: 'center',
                                        marginLeft: width * .05
                                    }}>
                                        Time
                                    </Text>
                                    <Text style={{
                                        fontFamily: Fonts.BalooChettan2,
                                        fontSize: width * .04,
                                        color: "#e44f3bd5",
                                    }}>
                                        Weight
                                    </Text>
                                </View>
                                <ScrollView
                                    showsVerticalScrollIndicator={false}
                                >
                                    <FlatList
                                        style={{ marginTop: height * .01 }}
                                        data={this.state.dateList}
                                        renderItem={this._renderMyList}
                                    />
                                </ScrollView>

                            </View>
                        </View>
                    </View>
                </Modal>

            </View >

        )
    }
}