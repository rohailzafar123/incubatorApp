import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import style from './style';
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
                <TouchableOpacity style={style.TemperatureView}>
            <View style={style.Temperature}>
              <View style={style.OxigenInerContainer}>
                <View style={style.OxigenIner}>
                  <View style={{ flex: 1, }}>
                    <Text style={{ fontSize: width * .02, fontWeight: "bold", color: '#FF420E' }}>
                      Current Temperature
                    </Text>
                    <View style={style.boxUperStyle}>
                      <View style={style.likeInputOxygen}>
                        <Text
                          style={{
                            position: 'absolute',
                            fontSize: width * .05, fontWeight: "bold", color: '#484149c5'
                          }} >
                          {this.state.valueX}
                        </Text>
                      </View>
                      <Text style={{ fontSize: width * .018, fontWeight: "bold", color: '#484149c5', left: width * .003, }}>
                        o
                      </Text>
                      <Text style={{ fontSize: width * .035, fontWeight: "bold", color: '#484149c5' }}>
                        C
                      </Text>
                      <TouchableOpacity >
                        <NewOpen name="open-in-new" size={width * .035} color="black" style={{ bottom: height * .05, right: width * .011 }} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', flex: 1, }}>
                    <View>
                      <Text style={{ fontSize: width * .018, fontWeight: "bold", color: '#FF420E', top: height * .006, marginVertical: width * .005 }}>
                        Min Temp.
                      </Text>
                      <View style={style.boxLowerStyle}>
                        <View style={style.likeInputMin}>
                          <Text style={{ fontSize: width * .035, fontWeight: "bold", color: '#484149c5' }}>
                            {this.state.valuey}
                          </Text>
                        </View>
                        <Text style={{ fontSize: width * .018, fontWeight: "bold", color: '#484149c5', left: width * .001, bottom: height * .03 }}>
                          o
                        </Text>
                        <Text style={{ fontSize: width * .03, fontWeight: "bold", color: '#484149c5', bottom: height * .01, marginRight: height * .02 }}>
                          C
                        </Text>
                      </View>

                    </View>
                    <View style={{ flexDirection: 'row', }}>
                      <View>
                        <Text style={{ fontSize: width * .018, fontWeight: "bold", color: '#FF420E', top: height * .006, marginVertical: width * .005 }}>
                          Max Temp.
                      </Text>
                        <View style={style.boxLowerStyle}>
                          <View style={style.likeInputMin}>
                            <Text style={{ fontSize: width * .035, fontWeight: "bold", color: '#484149c5' }}>
                              {this.state.valuez}
                          </Text>
                          </View>
                          <Text style={{ fontSize: width * .018, fontWeight: "bold", color: '#484149c5', left: width * .001, bottom: height * .03 }}>
                            o
                          </Text>
                          <Text style={{ fontSize: width * .03, fontWeight: "bold", color: '#484149c5', bottom: height * .01, }}>
                            C
                          </Text>
                        </View>

                      </View>

                    </View>


                  </View>
                </View>
              </View>
            </View>

          </TouchableOpacity>
                {/* <Modal 
                animationIn="slideInUp" 
                animationOut="slideOutDown" 
                onBackdropPress={() => this.toggleModal()} 
                onSwipeComplete={() => this.toggleModal()} 
                swipeDirection="right" 
                isVisible={this.state.isModalVisible} 
                style={{ 
                    backgroundColor: 'white',
                    maxHeight:height * .7,
                    maxWidth:width * 1,
                    top:width * .13,
                    // left:width *.1,
                    borderTopRightRadius:width * .05,
                    borderTopLeftRadius:width * .05,
                    maxHeight:height * .7,
                    
                    }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        
                    </View>
                </Modal> */}
            </View>

        )
    }
}