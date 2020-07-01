import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import style from './styles';
import Modal from 'react-native-modal';
import Menu from 'react-native-vector-icons/MaterialCommunityIcons';
import Setting from 'react-native-vector-icons/Feather';

const { height, width } = Dimensions.get('window');
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    render() {
        return (
            <View >
                <TouchableOpacity onPress={this.toggleModal}>
                    <Menu name="menu-open" size={width * .05} color="black" />
                </TouchableOpacity>
                <Modal
                    animationIn="slideInRight"
                    animationOut="slideOutRight"
                    onBackdropPress={() => this.toggleModal()}
                    onSwipeComplete={() => this.toggleModal()}
                    swipeDirection="right"
                    isVisible={this.state.isModalVisible}
                    style={{
                        elevation: width * .005,
                        backgroundColor: 'white',
                        maxHeight: height * 1,
                        maxWidth: width * .35,
                        // top:width * .13,
                        left: width * .58,
                        // borderTopRightRadius:width * .05,
                        // borderTopLeftRadius:width * .05,
                        // maxHeight:height * .7,

                    }}>
                    <View style={{ flex: 1 }}>
                        <View style={{
                            height: height * .1,
                            width: width * .35,

                        }}>
                            <View style={{
                                flex: 1,
                                backgroundColor: 'white',
                                elevation: width * .005,
                                justifyContent: "space-between",
                                alignItems: 'center',
                                flexDirection: 'row',
                                paddingHorizontal: width * .02,
                            }}>

                                <Text style={{
                                    fontSize: width * .02,
                                    color: 'red',
                                    fontWeight: 'bold'
                                }}>
                                    Settings
                                </Text>
                                <Setting name="settings" size={width * .02} color="red" />
                            </View>
                        </View>
                        <View style={{
                            height: height * .73,
                            width: width * .35,
                            backgroundColor:'red',
                        }} >
                            <View style={{
                                flex: 1,
                                elevation: width * .005,
                                justifyContent:'center',
                                alignItems:'center',
                            }}>
                                <View style={{
                                    height:height * .09,
                                    width: width * .3,
                                    backgroundColor:'blue',
                                    marginBottom:height * .01
                                }}>

                                </View>
                                <View style={{
                                    height:height * .09,
                                    width: width * .3,
                                    backgroundColor:'blue',
                                    marginBottom:height * .01

                                }}>

                                </View>
                                <View style={{
                                    height:height * .09,
                                    width: width * .3,
                                    backgroundColor:'blue',
                                    marginBottom:height * .01
                                    
                                }}>

                                </View>
                                <View style={{
                                    height:height * .09,
                                    width: width * .3,
                                    backgroundColor:'blue',
                                    marginBottom:height * .01

                                }}>

                                </View>
                                <View style={{
                                    height:height * .09,
                                    width: width * .3,
                                    backgroundColor:'blue',
                                    marginBottom:height * .01

                                }}>

                                </View>
                                <View style={{
                                    height:height * .09,
                                    width: width * .3,
                                    backgroundColor:'blue',
                                    marginBottom:height * .01

                                }}>

                                </View>
                            </View>

                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}
