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
            toggleWeight: false,
            toggleTemp: false,
            skinCurrentTemp: null,
            skinSetTemp: null,
            airTemp: false,
        }
    }

    changeValueHandler = () => {

        if (this.state.skinCurrentTemp == null) {
            alert('Empty Current Temperature');
            this.setState(
                {
                    airTemp: this.state.airTemp,
                });
        }
        else if (this.state.skinSetTemp == null) {
            alert('Empty Set Temperature');
            this.setState(
                {
                    airTemp: this.state.airTemp,
                });
        }
        else if (this.state.skinCurrentTemp < 20 || this.state.skinCurrentTemp > 100 || this.state.skinSetTemp < 20 || this.state.skinSetTemp > 100) {
            alert('Please Set Value upper 20 and lower 100');
            this.setState({
                airTemp: this.state.airTemp
            });
        }
        else {
            this.setState({
                airTemp: !this.state.airTemp
            },
                () => {
                    this.props.skinCurTemp(this.state.skinCurrentTemp),
                        this.props.skinSetTemp(this.state.skinSetTemp)
                }
            );
        }
    }

    toggleAir = () => {
        this.setState({ airTemp: !this.state.airTemp });
    };


    render() {
        // console.log(this.state.airCurrentTemp)
        // console.log(this.state.airSetTemp)
        return (
            <View>

                <TouchableOpacity style={style.listView} onPress={this.toggleAir}>
                    <Text style={style.listText}>Heart Rate</Text>
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
                                            Heart Rate
                                        </Text>
                                    </View>
                                </View>
                                <View style={style.bodyContainer}>
                                    <View style={style.bodyInner}>
                                        <Text style={style.currentHeading}>
                                            Set HR Level
                                        </Text>
                                        <View style={style.currentInputView}>
                                            <TextInput
                                                placeholder='Type Here'
                                                keyboardType="number-pad"
                                                maxLength={5}
                                                style={style.currentInput}
                                                onChangeText={skinSetTemp => this.setState({ skinSetTemp })}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={style.footerContainer}>
                                    <View style={style.footerInner}>
                                        <TouchableOpacity style={style.bottonView}
                                            onPress={this.changeValueHandler}>
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
