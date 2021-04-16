import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import style from './style';
import Modal from 'react-native-modal';
import SwitchToggle from 'react-native-switch-toggle';
import Alarm from 'react-native-vector-icons/MaterialCommunityIcons';
import Back from 'react-native-vector-icons/MaterialCommunityIcons';
// import AirTemp from './airTemp/index';
// import SkinTemp from './skinTemp/index';
// import Spo2 from './spo2/index';
// import Hr from './hr/index';
import {RadioButton} from 'react-native-paper';

import RNFS from 'react-native-fs';
import XLSX from 'xlsx';

// const [checked, setChecked] = React.useState('first');

// import SysSettings from 'react-native-vector-icons/Octicons';
import {Fonts} from '../../../utils/fonts';
import {TextInput, ScrollView} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');
let d = new Date();

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
      patentId: '',
      fatherName: '',
      weight: '',
      age: '',
      drName: '',
      checked: 'first',
      dr: 'Dr.',
      oxyArray: [],
      skinArray: [],
      tempArray: [],
      newArray: [],
    };
  }
  //   this.handleAirHigher = this.handleAirHigher.bind(this);
  // this.handleAirlower = this.handleAirlower.bind(this);
  // // this.handleSkinCurrent = this.handleSkinCurrent.bind(this);
  // this.handleSkinLow = this.handleSkinLow.bind(this);
  // this.handleSkinHigh = this.handleSkinHigh.bind(this);
  // state = {
  //   checked: 'first',
  // };
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  componentDidMount() {
    this.theData();
  }

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
  };
  handleSpo2Lower = (child) => {
    this.setState({
      spo2Lower: child,
    });
  };
  handleHrUper = (child) => {
    this.setState({
      hrUpper: child,
    });
  };
  handleHrLower = (child) => {
    this.setState({
      hrLower: child,
    });
  };

  saveData() {
    Alert.alert('Are you Sure?', 'Add this this patent', [
      {
        text: 'Cancel',
        onPress: () => {
          clearInterval(this.theDataInterval);
        },
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          this.saveValue();
          // this.writeToSheet();
        },
      },
    ]);
  }

  theData = () => {
    this.theDataInterval = setInterval(() => {
      let d = new Date();
      let date =
        d.getDate() + '/' + d.getUTCMonth() + 1 + '/' + d.getFullYear();
      let time =
        d.getHours() +
        ':' +
        d.getMinutes() +
        ':' +
        d.getSeconds() +
        '.' +
        d.getMilliseconds();
      let {oxy, skinTemp, airTemp} = this.props;

      let kData = this.state.oxyArray.slice();
      kData.push(oxy);
      this.setState({oxyArray: kData});

      let jData = this.state.skinArray.slice();
      jData.push(skinTemp);
      this.setState({skinArray: jData});

      let lData = this.state.tempArray.slice();
      lData.push(airTemp);
      this.setState({tempArray: lData});

      let newData = this.state.newArray.slice();
      newData.push(date, time, oxy, skinTemp, airTemp + '\n'); //todo: for txt format data
      // newData.push({
      //   //todo: for xlsx format data
      //   Date: date,
      //   Time: time,
      //   Oxygen: oxy,
      //   SkinTemperature: skinTemp,
      //   AirTemperature: airTemp,
      // });
      this.setState({newArray: newData});
    }, 15000);
  };

  writeToSheet = () => {
    const patientInfo = [
      {
        PatientId: this.state.patentId,
        Age: this.state.age,
        Weight: this.state.weight,
        FatherName: this.state.fatherName,
        DrName: this.state.drName,
      },
    ];

    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.json_to_sheet(patientInfo);
    XLSX.utils.sheet_add_json(ws, this.state.newArray, {
      origin: 'A4',
    });
    XLSX.utils.book_append_sheet(wb, ws, 'DataValues');

    const wbout = XLSX.write(wb, {type: 'binary', bookType: 'xlsx'});
    var file = RNFS.ExternalStorageDirectoryPath + '/Patent/test.xlsx';
    RNFS.writeFile(file, wbout, 'ascii')
      .then((r) => {
        console.log('Hogaya');
      })
      .catch((e) => {
        console.log('nhi hoa', e);
      });
  };

  saveValue() {
    const {newArray} = this.state;

    const content =
      '\t\t' +
      'Patent ID' +
      '\t' +
      'Age' +
      '\t' +
      'Weight' +
      '\t\t' +
      'FatherName' +
      '\t' +
      'DrName' +
      '\n' +
      '\t\t' +
      this.state.patentId +
      '\t\t' +
      this.state.age +
      '\t' +
      this.state.weight +
      '\t\t' +
      this.state.fatherName +
      '\t\t' +
      this.state.drName +
      '\t' +
      '\n\n' +
      '\t\tDate ' +
      ' \t\t\tTime' +
      '\t\t\tO\u2082 ' +
      ' \t\tST ' +
      ' \t\tAT' +
      '\n' +
      '\t\t' +
      newArray.join('\t\t');
    this.path =
      RNFS.ExternalStorageDirectoryPath +
      `/Patent/${this.state.patentId}(${d
        .toTimeString()
        .slice(0, 8)
        .replace(/:/g, '.')}).txt`;
    RNFS.writeFile(this.path, content, 'utf8')
      .then((success) => {
        console.log('Bana FILE WRITTEN!');
        this.theTimeout = setTimeout(() => {
          this.saveValue();
        }, 15200);
      })
      .catch((err) => {
        console.log(err.message);
      });

    console.log('PatentID:', this.state.patentId);
    console.log('Age:', this.state.age);
    console.log('Weight:', this.state.weight);
    console.log('FatherName:', this.state.fatherName);
    console.log('DrName:', this.state.drName);
    // console.log('Oxygen:', this.state.oxyArray);
    // console.log('SkinTemperature:', this.state.skinArray);
    // console.log('AirTemperature:', this.state.tempArray);
    console.log(content);
    console.log('The Array:', newArray);
  }

  render() {
    const {checked} = this.state;
    // console.log(this.state.skinCurrentTemp)
    // console.log(this.state.skinSetTemp)
    return (
      <View>
        {/* Component */}
        <TouchableOpacity style={style.mainList} onPress={this.toggleModal}>
          <Text style={style.listText}>Patient Information</Text>
          <Alarm name={'alarm-light'} size={width * 0.02} />
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
                      <Back
                        name={'keyboard-backspace'}
                        size={width * 0.04}
                        color="white"
                      />
                    </TouchableOpacity>
                    <Text style={style.headerHeading}>Patient Information</Text>
                    <TouchableOpacity
                      style={style.headerbotton}
                      onPress={this.saveData.bind(this)}>
                      <Text style={style.bottonText}>Submit</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {/* Box Body */}
                {/* <ScrollView> */}
                <View style={style.boxBody}>
                  <View style={style.boxBodyInner}>
                    <Text
                      style={{
                        fontFamily: Fonts.Handlee,
                        // fontSize: width * .04,
                        color: 'red',
                      }}>
                      Patient ID:
                    </Text>
                    <TextInput
                      placeholder="Type Here"
                      onChangeText={(val) => this.setState({patentId: val})}
                      style={{
                        fontFamily: Fonts.BalooChettan2,
                        borderColor: 'gray',
                        width: width * 0.25,
                        height: height * 0.08,
                        color: 'gray',
                        backgroundColor: '#23212016',
                        fontSize: width * 0.015,
                        paddingLeft: width * 0.01,
                        // borderRadius: width * .002,
                      }}
                    />
                  </View>
                  <View style={style.boxBodyInner}>
                    <Text
                      style={{
                        fontFamily: Fonts.Handlee,
                        // fontSize: width * .04,
                        color: 'red',
                      }}>
                      Age:
                    </Text>
                    <TextInput
                      placeholder="Type Here"
                      keyboardType="number-pad"
                      onChangeText={(val) => this.setState({age: val})}
                      style={{
                        fontFamily: Fonts.BalooChettan2,
                        borderColor: 'gray',
                        width: width * 0.25,
                        height: height * 0.08,
                        color: 'gray',
                        backgroundColor: '#23212016',
                        fontSize: width * 0.015,
                        paddingLeft: width * 0.01,
                        borderRadius: width * 0.002,
                      }}
                    />
                  </View>
                  <View style={style.boxBodyInner}>
                    <Text
                      style={{
                        fontFamily: Fonts.Handlee,
                        // fontSize: width * .04,
                        color: 'red',
                      }}>
                      Weight:
                    </Text>
                    <TextInput
                      placeholder="Type Here"
                      keyboardType="number-pad"
                      onChangeText={(val) => this.setState({weight: val})}
                      style={{
                        fontFamily: Fonts.BalooChettan2,
                        borderColor: 'gray',
                        width: width * 0.25,
                        height: height * 0.08,
                        color: 'gray',
                        backgroundColor: '#23212016',
                        fontSize: width * 0.015,
                        paddingLeft: width * 0.01,
                        borderRadius: width * 0.002,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      padding: width * 0.002,
                      paddingLeft: width * 0.028,
                      paddingRight: width * 0.04,
                      flexDirection: 'row',
                      // backgroundColor:'red',
                      borderTopRightRadius: width * 0.005,
                      borderTopLeftRadius: width * 0.025,
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <RadioButton
                      value="first"
                      status={checked === 'first' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'first'});
                      }}
                    />
                    <Text
                      style={{
                        fontFamily: Fonts.Handlee,
                        // fontSize: width * .04,
                        color: 'red',
                      }}>
                      S/o
                    </Text>
                    <RadioButton
                      value="second"
                      status={checked === 'second' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'second'});
                      }}
                    />
                    <Text
                      style={{
                        fontFamily: Fonts.Handlee,
                        // fontSize: width * .04,
                        color: 'red',
                      }}>
                      D/o:
                    </Text>
                    <TextInput
                      placeholder="Type Here"
                      onChangeText={(val) => this.setState({fatherName: val})}
                      style={{
                        fontFamily: Fonts.BalooChettan2,
                        borderColor: 'gray',
                        width: width * 0.25,
                        height: height * 0.08,
                        color: 'gray',
                        backgroundColor: '#23212016',
                        fontSize: width * 0.015,
                        paddingLeft: width * 0.01,
                        borderRadius: width * 0.002,
                        marginLeft: width * 0.035,
                      }}
                    />
                  </View>
                  <View style={style.boxBodyInner}>
                    <Text
                      style={{
                        fontFamily: Fonts.Handlee,
                        // fontSize: width * .04,
                        color: 'red',
                      }}>
                      Doctor Name:
                    </Text>
                    <TextInput
                      placeholder="Type Here"
                      onChangeText={(val) =>
                        this.setState({drName: this.state.dr + val})
                      }
                      style={{
                        fontFamily: Fonts.BalooChettan2,
                        borderColor: 'gray',
                        width: width * 0.25,
                        color: 'gray',
                        height: height * 0.08,
                        backgroundColor: '#23212016',
                        fontSize: width * 0.015,
                        paddingLeft: width * 0.01,
                        borderRadius: width * 0.002,
                      }}
                    />
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
