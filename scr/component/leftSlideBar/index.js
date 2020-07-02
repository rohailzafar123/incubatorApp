import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import style from './styles';
import Modal from 'react-native-modal';
import Menu from 'react-native-vector-icons/MaterialCommunityIcons';
import Setting from 'react-native-vector-icons/Feather';
import Lock from 'react-native-vector-icons/SimpleLineIcons';
import SysSettings from 'react-native-vector-icons/Octicons';
import User from 'react-native-vector-icons/EvilIcons';
import Graph from 'react-native-vector-icons/Entypo';
import Pass from 'react-native-vector-icons/MaterialCommunityIcons';
import Data from 'react-native-vector-icons/FontAwesome';
// import SysSettings from 'react-native-vector-icons/Octicons';


const { height, width } = Dimensions.get('window');
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible:false,
            LockorUnlo:false,
        }

    }
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    toggleModalLock = () => {
        this.setState({ LockorUnlo: !this.state.LockorUnlo });
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
                        left: width * .6,
                        borderTopLeftRadius:width * .02,
                        borderBottomLeftRadius:width * .02,
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
                                paddingHorizontal: width * .015,
                        borderTopLeftRadius:width * .02,

                            }}>

                                <Text style={{
                                    fontSize: width * .02,
                                    color: 'red',
                                    fontWeight: 'bold',
                                    fontFamily:'MetalMania-Regular',
                                }}>
                                    Settings
                                </Text>
                                <Setting name="settings" size={width * .02} color="red" />
                            </View>
                        </View>
                        <View style={{
                            height: height * .73,
                            width: width * .35,
                            // backgroundColor:'red',
                        }} >
                            <View style={{
                                flex: 1,
                                elevation: width * .005,
                                justifyContent:'center',
                                alignItems:'center',
                                marginTop:height * .02,
                                
                            }}>
                                <TouchableOpacity style={style.listView} onPress={this.toggleModalLock}>
                                    <Text style={style.listText}>Lock Or Unlock</Text>
                                    <Lock name={'lock'} size={width * .02} />
                                </TouchableOpacity>
                                <TouchableOpacity style={style.listView}>
                                    <Text style={style.listText}>System Setting</Text>
                                    <SysSettings name={'settings'} size={width * .02} />
                                </TouchableOpacity>
                                <TouchableOpacity style={style.listView}>
                                    <Text style={style.listText}>Parameters</Text>
                                    <User name={'user'} size={width * .025} />
                                </TouchableOpacity>
                                <TouchableOpacity style={style.listView}>
                                    <Text style={style.listText}>Graph Setting</Text>
                                    <Graph name={'area-graph'} size={width * .02} />
                                </TouchableOpacity>
                                <TouchableOpacity style={style.listView}>
                                    <Text style={style.listText}>Calibaration</Text>
                                    <Pass name={'lastpass'} size={width * .02} />
                                </TouchableOpacity>
                                <TouchableOpacity style={style.listView}>
                                    <Text style={style.listText}>Data Record</Text>
                                    <Data name={'database'} size={width * .018} />
                                </TouchableOpacity>
                                <TouchableOpacity style={style.listView}>
                                    <Text style={style.listText}>Unit</Text>
                                    <Text style={style.listText}>(c or f) (kg or lb)</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    <Modal animationIn="slideInRight"
                    animationOut="slideOutRight"
                    onBackdropPress={() => this.toggleModalLock()}
                    onSwipeComplete={() => this.toggleModalLock()}
                    swipeDirection="right"
                    isVisible={this.state.LockorUnlo}
                    style={{
                        elevation: width * .005,
                        backgroundColor: 'white',
                        maxHeight: height * 1,
                        maxWidth: width * .35,
                        // top:width * .13,
                        // left: width * .6,
                        // borderTopRightRadius:width * .05,
                        // borderTopLeftRadius:width * .05,
                        // maxHeight:height * .7,

                    }}>

                    </Modal>
                    </View>
                </Modal>
            </View>
        );
    }
}
