import { StyleSheet, Dimensions } from "react-native"

//Packages

//Files
const { height, width } = Dimensions.get('window');

export default styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',

    },
    headerContainer: {
        width: width * 1,
        height: height * .14,
        paddingHorizontal: width * .016,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff63',
        elevation: 5,
        marginBottom:height * .01
    },
    headerText: {
        fontSize: width * .03,
        fontWeight: 'bold',

    },
    inerContainer1: {
        width: width * 1,
        height: height * .39,
        padding: width * .01,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    notificationIcon:{
        flexDirection:'row',
      
    },

    iconAndText:{
        alignItems:'center'
    },
    alarmText:{
        fontSize: width * .013,
        fontWeight: 'bold',
        color: '#484149c5',
    },
    overRidTex:{
        fontSize: width * .01,
        fontWeight: 'bold',
        color: '#484149c5',
    },
    overRidTex1:{
        fontSize: width * .01,
        fontWeight: 'bold',
        color: '#484149c5',
    },
    inerContainer3: {
        width: width * 1,
        height: height * .04,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    
    airHeading:{
        fontSize:width * .02,
        fontWeight: "bold",
        color: '#484149c5',
        // paddingHorizontal:width * .11,
        marginTop:width * .009,
        // marginRight:width * .06
    },
    weigHeading:{
        fontSize:width * .02,
        fontWeight: "bold",
        color: '#484149c5',
        // paddingHorizontal:width * .11,
        marginTop:width * .009,
        right:width * .02
        // marginRight:width * .06
    },
    tempHeading:{
        fontSize:width * .02,
        fontWeight: "bold",
        color: '#484149c5',
        paddingHorizontal:width * .2,
        marginTop:width * .009,
        // marginRight:width * .06
        right:width * .02

    },
    oxygenHeading:{
        fontSize:width * .02,
        fontWeight: "bold",
        color: '#484149c5',
        paddingHorizontal:width * .05,
        marginTop:width * .009,
        right:width * .01

        // marginRight:width * .04
    },
    Spo2Heading:{
        fontSize:width * .02,
        fontWeight: "bold",
        color: '#484149c5',
        paddingHorizontal:width * .2,
        marginTop:width * .009,
        marginRight:width * .03,
    },
    humHeading:{
        fontSize:width * .02,
        fontWeight: "bold",
        color: '#484149c5',
        paddingHorizontal:width * .02,
        marginTop:width * .009,
        right:width * .01
        // marginRight:width * .06
    },
    inerContainer2: {
        width: width * 1,
        height: height * .39,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'blue'
    },
    
   

});
