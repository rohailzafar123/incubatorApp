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
        height: height * .1,
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
        height: height * .52,
        padding: width * .01,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    graphView: {
        width: width * .65,
        height: height * .51,
        margin: width * .005,
        // elevation: 6,

    },
    graph: {
        flex: 1,
        // borderWidth: 4,
        // borderColor: "#80808094",
        borderRadius: height * .05,
        elevation: 3,

    },
    OxigenView: {
        width: width * .32,
        height: height * .32,
        margin: width * .005,
        top: height * .09,
    },
    Oxigen: {
        flex: 1,
        // borderWidth: 4,
        // borderColor: "gray",
        borderRadius: height * .05,
        elevation: 3,
        padding:height * .02,


    },
    OxigenInerContainer:{
        flex: 1,

    },
    weightView: {
        width: width * .32,
        height: height * .32,
        margin: width * .005
    },
    weight: {
        flex: 1,
        // borderWidth: 4,
        // borderColor: "gray",
        borderRadius: height * .05,
        elevation: 3,

    },
    TemperatureView: {
        width: width * .32,
        height: height * .32,
        margin: width * .005
    },
    Temperature: {
        flex: 1,
        // borderWidth: 4,
        // borderColor: "gray",
        borderRadius: height * .05,
        elevation: 3,

    },
    HumidityView: {
        width: width * .32,
        height: height * .32,
        margin: width * .005
    },
    Humidity: {
        flex: 1,
        // borderWidth: 4,
        // borderColor: "gray",
        borderRadius: height * .05,
        elevation: 3,
    },
    inerContainer2: {
        width: width * 1,
        height: height * .37,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    OxigenIner:{
        flex:1,
        paddingHorizontal:height * .01,
        // backgroundColor:'red'
    },
    likeInputOxygen:{
        width:width * .23,
        height:height* .1,
        borderWidth:1,
        flexDirection:"row-reverse",
        alignItems: 'center',
    },
    boxUperStyle:{
        flexDirection:'row'
    },
    boxLowerStyle:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center'
    },
    likeInputMin:{
        width:width * .1,
        height:height* .07,
        borderWidth:1,
        // flexDirection:"row-reverse",
        alignItems: 'center',
        justifyContent:'center'
    },


});
