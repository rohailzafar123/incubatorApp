import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import style from './style';
import Modal from 'react-native-modal';
import SwitchToggle from 'react-native-switch-toggle';
import Alarm from 'react-native-vector-icons/MaterialCommunityIcons';
import Back from 'react-native-vector-icons/MaterialCommunityIcons';
import Check from 'react-native-vector-icons/AntDesign';

// import SysSettings from 'react-native-vector-icons/Octicons';
import { Fonts } from '../../../../utils/fonts';
import { TextInput } from 'react-native-gesture-handler';
const { height, width } = Dimensions.get('window');
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            LockorUnlo: false,
            brightness: 0.2,
            toggleWeight: false,
            toggleTemp: false,
        }
    }
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    toggleModalLock = () => {
        this.setState({ LockorUnlo: !this.state.LockorUnlo });
    };
    toggleAir = () => {
        this.setState({ airTemp: !this.state.airTemp });
    };
    toggleSkin = () => {
        this.setState({ skinTemp: !this.state.skinTemp });
    };
    toggleSpot = () => {
        this.setState({ spot: !this.state.spot });
    };
    toggleHr = () => {
        this.setState({ Hr: !this.state.Hr });
    };

    _doneUnit = () => {
        this.setState(
            {
                LockorUnlo: !this.state.LockorUnlo,
                isModalVisible: !this.state.isModalVisible
            },
            () => {
                this.props.selectWeight(this.state.toggleWeight),
                    this.props.selectTemp(this.state.toggleTemp)

            },


        );


    }
    render() {
        return (
            <View>

                <TouchableOpacity style={style.listView} onPress={this.toggleAir}>
                    <Text style={style.listText}>Heart Rate (hr)</Text>
                    <Alarm name={'alarm-light'} size={width * .02} />
                </TouchableOpacity>
                <Modal
                    animationIn="slideInDown"
                    animationOut="slideOutUp"
                    onBackdropPress={() => this.toggleAir()}
                    onSwipeComplete={() => this.toggleAir()}
                    swipeDirection="right"
                    isVisible={this.state.airTemp}
                    style={style.modal}>
                    <View style={style.modalInner}>
                        <View style={style.modalContainer}>
                            <View style={style.modalContainerInner}>
                                <View style={style.headerContainer}>
                                    <View style={style.headerInner}>
                                        <TouchableOpacity onPress={this.toggleAir} style={style.backBotton}>
                                            <Back name={'keyboard-backspace'} size={width * .03} color='white' />
                                        </TouchableOpacity>
                                        <Text style={style.headerHeading}>
                                        Heart Rate (hr)
                                        </Text>
                                    </View>
                                </View>
                                <View style={style.bodyContainer}>
                                    <View style={style.bodyInner}>
                                        <Text style={style.currentHeading}>
                                            Current Temperature
                                        </Text>
                                        <View style={style.currentInputView}>
                                            <TextInput
                                                placeholder='Type Here'
                                                keyboardType="number-pad"
                                                maxLength={5}
                                                style={style.currentInput}
                                            />
                                        </View>
                                        <Text style={style.currentHeading}>
                                            Set Temperature
                                        </Text>
                                        <View style={style.currentInputView}>
                                            <TextInput
                                                placeholder='Type Here'
                                                keyboardType="number-pad"
                                                maxLength={5}
                                                style={style.currentInput}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={style.footerContainer}>
                                    <View style={style.footerInner}>
                                        <TouchableOpacity style={style.bottonView}
                                            onPress={this.toggleAir}>
                                            <Text style={style.bottonText}>
                                                Submit
                                            </Text>
                                            <Check name={'checkcircle'} size={width * .015} color='white' style={style.check} />
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>

        );
    }
}
