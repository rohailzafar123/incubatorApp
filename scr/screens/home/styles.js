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
        height: height * .51,
        padding: width * .01,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'blue'
    },
    notificationIcon:{
        flexDirection:'row',
        position:'absolute',
        top: height * .04,
        right: width * 0.055,
    },
    alarmText:{
        alignSelf:'center',
        fontSize: width * .013,
        fontWeight: 'bold',
        color: '#484149c5',

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
    OxigenInerContainer:{
        flex: 1,
        
    },
    weightView: {
        width: width * .32,
        height: height * .3,
        margin: width * .005
    },
    weight: {
        flex: 1,
        // borderWidth: 4,
        // borderColor: "gray",
        borderRadius: height * .05,
        elevation: 3,
        padding:height * .022,
    },
    TemperatureView: {
        width: width * .32,
        height: height * .3,
        margin: width * .005
    },
    Temperature: {
        flex: 1,
        // borderWidth: 4,
        // borderColor: "gray",
        borderRadius: height * .05,
        elevation: 3,
        padding:height * .022,


    },
    HumidityView: {
        width: width * .32,
        height: height * .3,
        margin: width * .005
    },
    Humidity: {
        flex: 1,
        // borderWidth: 4,
        // borderColor: "gray",
        borderRadius: height * .05,
        elevation: 3,
        padding:height * .022,

    },
    inerContainer3: {
        width: width * 1,
        height: height * .04,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'red',

    },
    oxygenHeading:{
        fontSize:width * .018,
        fontWeight: "bold",
        color: '#484149c5',
        // paddingHorizontal:width * .11,
        marginTop:width * .009,

        // marginRight:width * .06
    },
    weightHeading:{
        fontSize:width * .018,
        fontWeight: "bold",
        color: '#484149c5',
        // paddingHorizontal:width * .11,
        marginTop:width * .009,
        // marginRight:width * .06
    },
    tempHeading:{
        fontSize:width * .018,
        fontWeight: "bold",
        color: '#484149c5',
        paddingHorizontal:width * .2,
        marginTop:width * .009,
        // marginRight:width * .06
    },
    humHeading:{
        fontSize:width * .018,
        fontWeight: "bold",
        color: '#484149c5',
        paddingHorizontal:width * .03,
        marginTop:width * .009,
        // marginRight:width * .06
    },
    inerContainer2: {
        width: width * 1,
        height: height * .34,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'red'

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
        justifyContent:'center',
        // marginBottom: height * .02,  
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
