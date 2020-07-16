import { StyleSheet, Dimensions } from "react-native";
import {Fonts} from '../../utils/fonts';
//Packages

//Files
const { height, width } = Dimensions.get('window');

export default styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff70',
    },
    headerContainer: {
        width: width * 1,
        height: height * .14,
        paddingHorizontal: width * .016,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        elevation: 5,
        marginBottom:height * .01
    },
    inerContainer1: {
        width: width * 1,
        height: height * .35,
        padding: width * .01,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    notificationIcon:{
        flexDirection:'row',
    },

    iconAndText:{
        alignItems:'center',
    },
    alarmText:{
        fontSize: width * .015,
        fontFamily:Fonts.Montserrat,
        color: '#484149c5',
    },
    inerContainer3: {
        width: width * 1,
        height: height * .07,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    airHeading:{
        fontSize:width * .03,
        fontFamily:Fonts.BalooChettanBold,        
        color: '#484149c5',
        // marginTop:width * .009,
    },
    tempHeading:{
        fontSize:width * .03,
        fontFamily:Fonts.BalooChettanBold,        
        color: '#484149c5',
        // marginTop:width * .009,
        right:width * .048
    },
    humHeading:{
        fontSize:width * .03,
        fontFamily:Fonts.BalooChettanBold,        
        color: '#484149c5',
        // marginTop:width * .009,
        right:width * .04
    },
    weigHeading:{
        fontSize:width * .03,
        fontFamily:Fonts.BalooChettanBold,        
        color: '#484149c5',
        // marginTop:width * .009,
    },
    Spo2Heading:{
        fontSize:width * .03,
        fontFamily:Fonts.BalooChettanBold,        
        color: '#484149c5',
        // marginTop:width * .009,
    },
    oxygenHeading:{
        fontSize:width * .03,
        fontFamily:Fonts.BalooChettanBold,        
        color: '#484149c5',
        // marginTop:width * .009,
        left:width * .01
    },
    inerContainer2: {
        width: width * 1,
        height: height * .35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
   

});
