import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import style from './style';
import Modal from 'react-native-modal';
import SwitchToggle from 'react-native-switch-toggle';
import Alarm from 'react-native-vector-icons/MaterialCommunityIcons';
import Back from 'react-native-vector-icons/MaterialCommunityIcons';
import AirTemp from './airTemp/index';
import SkinTemp from './skinTemp/index';
import Spo2 from './spo2/index';
import Hr from './hr/index';

// import SysSettings from 'react-native-vector-icons/Octicons';
import { Fonts } from '../../../utils/fonts';
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
            currentAirValue: 33.1,
            setAirValue: 22.1,
            skinCurrentTemp:32.1,
            skinSetTemp:34.1,
        },
            this.handleAirCurrent = this.handleAirCurrent.bind(this);
            this.handleAirSet = this.handleAirSet.bind(this);
            // this.handleSkinCurrent = this.handleSkinCurrent.bind(this);
            this.handleSkinSet = this.handleSkinSet.bind(this);
            this.handleSkinCurrent = this.handleSkinCurrent.bind(this);

    }
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible })
    };
    collectData = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible },
            () => 
            this.props.airCurTemp(this.state.currentAirValue),
            this.props.airSetTemp(this.state.setAirValue),
            this.props.skinCurTemp(this.state.skinCurrentTemp),
            this.props.skinSetTemp(this.state.skinSetTemp),
            this.props.modalOff(!this.state.isModalVisible),

            );
    }
    handleAirCurrent(child) {
        this.setState({
            currentAirValue: child,
        });
    }
    handleAirSet(child) {
        this.setState({
            setAirValue: child,
        });
    }
    handleSkinCurrent(child) {
        this.setState({
            skinCurrentTemp: child,
        });
    }
    handleSkinSet(child) {
        this.setState({
            skinSetTemp: child,
        });
    }
    // handleSkinCurrent(child) {
    //     this.setState({
    //         currentSkinTemp: child,
    //     });
    // }
    render() {
        // console.log(this.state.skinCurrentTemp)
        // console.log(this.state.skinSetTemp)
        return (
            <View>
                {/* Component */}
                <TouchableOpacity style={style.mainList} onPress={this.toggleModal}>
                    <Text style={style.listText}>Alarms Settings</Text>
                    <Alarm name={'alarm-light'} size={width * .02} />
                </TouchableOpacity>
                {/* Modal */}
                <Modal
                    animationIn="slideInDown"
                    animationOut="slideOutUp"
                    isVisible={this.state.isModalVisible}
                    style={style.modalContainer}>
                    <View style={style.modalInner}>
                        <View style={style.boxConatainer}>
                            <View style={style.boxInner}>
                                {/* Box Header */}
                                <View style={style.boxHeader}>
                                    <View style={style.boxHeaderInner}>
                                        <TouchableOpacity onPress={this.toggleModal}>
                                            <Back name={'keyboard-backspace'} size={width * .04} color='white' />
                                        </TouchableOpacity>
                                        <Text style={style.headerHeading}>
                                            Alarms Settings
                                        </Text>
                                        <TouchableOpacity style={style.headerbotton}
                                            onPress={this.collectData}
                                        >
                                            <Text style={style.bottonText}>
                                                Submit
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                {/* Box Body */}
                                <View style={style.boxBody}>
                                    <View style={style.boxBodyInner}>
                                        <AirTemp currentTemp={this.handleAirCurrent} setTemp={this.handleAirSet} />
                                        <SkinTemp skinCurTemp={this.handleSkinCurrent} skinSetTemp={this.handleSkinSet} />
                                        <Spo2 skinCurrentTemp={this.handleSkinCurrent}/>
                                        <Hr />
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
