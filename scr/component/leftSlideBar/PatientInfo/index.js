import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import style from './style';
import Modal from 'react-native-modal';
import SwitchToggle from 'react-native-switch-toggle';
import Alarm from 'react-native-vector-icons/MaterialCommunityIcons';
import Back from 'react-native-vector-icons/MaterialCommunityIcons';
// import AirTemp from './airTemp/index';
// import SkinTemp from './skinTemp/index';
// import Spo2 from './spo2/index';
// import Hr from './hr/index';
import { RadioButton } from 'react-native-paper';
// const [checked, setChecked] = React.useState('first');

// import SysSettings from 'react-native-vector-icons/Octicons';
import { Fonts } from '../../../utils/fonts';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
const { height, width } = Dimensions.get('window');
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            LockorUnlo: false,
            toggleWeight: false,
            toggleTemp: false,
            higherAirValue: null,
            lowerAirValue: 22.1,
            skinHighTemp: 32.1,
            skinLowTemp: 34.1,
            spo2Upper: 99,
            spo2Lower: 91,
            hrUpper: 190,
            hrLower: 70,
            // checked: 'first'

        },
            this.handleAirHigher = this.handleAirHigher.bind(this);
        this.handleAirlower = this.handleAirlower.bind(this);
        // this.handleSkinCurrent = this.handleSkinCurrent.bind(this);
        this.handleSkinLow = this.handleSkinLow.bind(this);
        this.handleSkinHigh = this.handleSkinHigh.bind(this);

    }
    state = {
        checked: 'first',
    };
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible })

    };

    // collectData = () => {
    //     this.setState({ isModalVisible: !this.state.isModalVisible },
    //         () => 
    //         this.props.airHigTemp(this.state.higherAirValue),
    //         this.props.airLowTemp(this.state.lowerAirValue),
    //         this.props.skinHighTemp(this.state.skinHighTemp),
    //         this.props.skinLowTemp(this.state.skinLowTemp),
    //         this.props.spo2Uper(this.state.spo2Upper),
    //         this.props.spo2Lower(this.state.spo2Lower),
    //         this.props.hrUper(this.state.hrUpper),
    //         this.props.hrLower(this.state.hrLower),
    //         this.props.modalOff(!this.state.isModalVisible),

    //         );
    // }
    handleAirHigher(child) {
        this.setState({
            higherAirValue: child,
        });
    }
    handleAirlower(child) {
        this.setState({
            lowerAirValue: child,
        });
    }
    handleSkinHigh(child) {
        this.setState({
            skinHighTemp: child,
        });
    }
    handleSkinLow(child) {
        this.setState({
            skinLowTemp: child,
        });
    }
    handleSpo2Uper = (child) => {
        this.setState({
            spo2Upper: child,
        });
    }
    handleSpo2Lower = (child) => {
        this.setState({
            spo2Lower: child,
        });
    }
    handleHrUper = (child) => {
        this.setState({
            hrUpper: child,
        });
    }
    handleHrLower = (child) => {
        this.setState({
            hrLower: child,
        });
    }

    render() {
        const { checked } = this.state;
        // console.log(this.state.skinCurrentTemp)
        // console.log(this.state.skinSetTemp)
        return (
            <View>
                {/* Component */}
                <TouchableOpacity style={style.mainList} onPress={this.toggleModal}>
                    <Text style={style.listText}>Patient Information</Text>
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
                                            Patient Information
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
                                {/* <ScrollView> */}
                                <View style={style.boxBody}>
                                    <View style={style.boxBodyInner}>
                                        <Text style={{
                                            fontFamily: Fonts.Handlee,
                                            // fontSize: width * .04,
                                            color: "red",
                                        }} >Patient ID:</Text>
                                        <TextInput placeholder="Type Here"
                                            style={{
                                                fontFamily: Fonts.BalooChettan2,
                                                borderColor: 'gray',
                                                width: width * .25,
                                                height: height * .08,
                                                color: 'gray',
                                                backgroundColor: '#23212016',
                                                fontSize: width * .015,
                                                paddingLeft: width * .01,
                                                // borderRadius: width * .002,
                                            }}
                                        ></TextInput>
                                    </View>
                                    <View style={style.boxBodyInner}>
                                        <Text style={{
                                            fontFamily: Fonts.Handlee,
                                            // fontSize: width * .04,
                                            color: "red",
                                        }} >Age:</Text>
                                        <TextInput placeholder="Type Here"
                                            keyboardType="number-pad"
                                            style={{
                                                fontFamily: Fonts.BalooChettan2,
                                                borderColor: 'gray',
                                                width: width * .25,
                                                height: height * .08,
                                                color: "gray",
                                                backgroundColor: '#23212016',
                                                fontSize: width * .015,
                                                paddingLeft: width * .01,
                                                borderRadius: width * .002,
                                            }}
                                        ></TextInput>
                                    </View>
                                    <View style={style.boxBodyInner}>
                                        <Text style={{
                                            fontFamily: Fonts.Handlee,
                                            // fontSize: width * .04,
                                            color: "red",
                                        }} >Weight:</Text>
                                        <TextInput 
                                        placeholder="Type Here"
                                        keyboardType="number-pad"
                                            style={{
                                                fontFamily: Fonts.BalooChettan2,
                                                borderColor: 'gray',
                                                width: width * .25,
                                                height: height * .08,
                                                color: 'gray',
                                                backgroundColor: '#23212016',
                                                fontSize: width * .015,
                                                paddingLeft: width * .01,
                                                borderRadius: width * .002,
                                            }}
                                        ></TextInput>
                                    </View>
                                    <View style={{
                                        padding: width * .002,
                                        paddingLeft: width * .028,
                                        paddingRight: width * .04,
                                        flexDirection: "row" ,
                                        // backgroundColor:'red',
                                        borderTopRightRadius: width * .005,
                                        borderTopLeftRadius: width * .025,
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}>
                                        <RadioButton
                                            value="first"
                                            status={checked === 'first' ? 'checked' : 'unchecked'}
                                            onPress={() => { this.setState({ checked: 'first' }); }}
                                        />
                                        <Text style={{
                                            fontFamily: Fonts.Handlee,
                                            // fontSize: width * .04,
                                            color: "red",
                                        }} >S/o</Text>
                                        <RadioButton
                                            value="second"
                                            status={checked === 'second' ? 'checked' : 'unchecked'}
                                            onPress={() => { this.setState({ checked: 'second' }); }}
                                        />
                                        <Text style={{
                                            fontFamily: Fonts.Handlee,
                                            // fontSize: width * .04,
                                            color: "red",
                                        }} >D/o:</Text>
                                        <TextInput placeholder="Type Here"
                                            style={{
                                                fontFamily: Fonts.BalooChettan2,
                                                borderColor: 'gray',
                                                width: width * .25,
                                                height: height * .08,
                                                color: "gray",
                                                backgroundColor: '#23212016',
                                                fontSize: width * .015,
                                                paddingLeft: width * .01,
                                                borderRadius: width * .002,
                                                marginLeft: width * .035,
                                            }}
                                        ></TextInput>
                                    </View>
                                    <View style={style.boxBodyInner}>
                                        <Text style={{
                                            fontFamily: Fonts.Handlee,
                                            // fontSize: width * .04,
                                            color: "red",
                                        }} >Doctor Name:</Text>
                                        <TextInput placeholder="Type Here"
                                            value="Dr."
                                            style={{
                                                fontFamily: Fonts.BalooChettan2,
                                                borderColor: 'gray',
                                                width: width * .25,
                                                color: "gray",
                                                height: height * .08,
                                                backgroundColor: '#23212016',
                                                fontSize: width * .015,
                                                paddingLeft: width * .01,
                                                borderRadius: width * .002,
                                            }}
                                        ></TextInput>
                                    </View>
                                </View>
                                {/* </ScrollView> */}
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>

        );
    }
}
