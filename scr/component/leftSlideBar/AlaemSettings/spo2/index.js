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
            airCurrentTemp:null,
            airSetTemp:null,
            airTemp:false,
        }
    }
    
    changeValueHandler = () => {

        if (this.state.airCurrentTemp == null ){
            alert('Empty Current Temperature');
            this.setState(
                { 
                airTemp: this.state.airTemp,
            });
        }
        else if(this.state.airSetTemp == null){
            alert('Empty Set Temperature');
            this.setState(
                { 
                airTemp: this.state.airTemp,
            });
        }
        else if(this.state.airCurrentTemp < 20 || this.state.airCurrentTemp > 100 || this.state.airSetTemp < 20 || this.state.airSetTemp > 100){
            alert('Please Set Value upper 20 and lower 100');
            this.setState({ 
                airTemp: this.state.airTemp });
        }
        else{
            this.setState({ 
                airTemp: !this.state.airTemp },
                () => {
                    this.props.currentTemp(this.state.airCurrentTemp),
                        this.props.setTemp(this.state.airSetTemp)
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
                    <Text style={style.listText}>SPO2</Text>
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
                                            SPO2
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
                                                onChangeText={airCurrentTemp => this.setState({airCurrentTemp})}
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
                                                onChangeText={airSetTemp => this.setState({airSetTemp})}
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
