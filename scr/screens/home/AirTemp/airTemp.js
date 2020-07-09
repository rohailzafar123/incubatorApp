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
        <View style={style.TemperatureView}>
          <View style={style.Temperature}>
            <View style={style.skinInerContainer}>
              <View style={style.skinIner}>
                <View style={{ flex: 1, }}>
                  <Text style={style.currentTempText}>
                    Current Temperature
                    </Text>
                  <View style={style.boxUperStyle}>
                    <View style={style.likeInputOxygen}>
                      <Text
                        style={style.tempInputCur} >
                        33.1
                        </Text>
                    </View>
                    {!this.props.value ? (
                      <Text style={style.centiUper}>
                        {'\u2103'}
                      </Text>
                    ) : (
                        <Text style={style.centiUper}>
                          {'\u2109'}
                        </Text>
                      )
                    }
                    <TouchableOpacity style={style.iconOpenRow}>
                      <NewOpen name="open-in-new" size={width * .035} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, }}>
                  <View>
                    <Text style={style.setTemp}>
                      Set Temperature
                      </Text>
                    <View style={style.boxLowerStyle}>
                      <View style={style.likeInputMin}>
                        <Text style={style.tempInputSet}>
                          32.1
                          </Text>
                      </View>
                      {!this.props.value ? (
                        <Text style={style.centiLower}>
                          {'\u2103'}
                        </Text>
                      ) : (
                          <Text style={style.centiLower}>
                            {'\u2109'}
                          </Text>
                        )
                      }

                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', }}>


                  </View>


                </View>
              </View>
            </View>
          </View>

        </View>
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