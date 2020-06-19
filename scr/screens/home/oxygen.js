import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import style from './oxygenStyle';
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
    render() {
        return (
            <View>
                <TouchableOpacity style={style.OxigenView} onPress={this.toggleModal}>
                    <View style={style.Oxigen}>
                        <View style={style.OxigenInerContainer}>
                            <View style={style.OxigenIner}>
                                <View style={{ flex: 1, }}>
                                    <Text style={{ fontSize: width * .02, fontWeight: "bold", color: '#FF420E', }}>
                                        Current Oxygen Level
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
                                        <NewOpen name="open-in-new" size={width * .035} color="black" style={{ bottom: height * .05, right: width * .01 }} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', flex: 1, }}>
                                    <View>
                                        <Text style={{  fontSize: width * .018, fontWeight: "bold", color: '#FF420E', top: height * .006, marginVertical: width * .005 }}>
                                            Min.Per %
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
                                                Max.Per %
                                            </Text>
                                            <View style={style.boxLowerStyle}>
                                                <View style={style.likeInputMin}>
                                                    <Text style={{ fontSize: width * .035, fontWeight: "bold", color: '#484149c5' }}>
                                                        99.0
                                                </Text>
                                                </View>
                                                <Text style={{ fontSize: width * .03, fontWeight: "bold", color: '#484149c5', top: height * .009, marginRight: height * .02 }}>
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
                <Modal isVisible={this.state.isModalVisible} onBackdropPress={()=>this.setState({isModalVisible: false})} onSwipeComplete={() => this.setState({isModalVisible: false})} swipeDirection="down" swipeDirection="left"
                style={{ 
                    backgroundColor: 'white',
                     maxHeight:height * .7,
                     maxWidth: width * .7,
                     alignSelf:'center',
                     position:'relative',
                     top:width * .13
                     }}>
                    <View>

                    </View>
                </Modal>
            </View>

        )
    }
}