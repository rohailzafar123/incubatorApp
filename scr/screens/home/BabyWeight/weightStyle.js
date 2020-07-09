import { StyleSheet, Dimensions } from "react-native"
import { Fonts } from '../../../utils/fonts';

//Packages

//Files
const { height, width } = Dimensions.get('window');

export default styles = StyleSheet.create({
    weightView: {
        width: width * .32,
        height: height * .34,
        margin: width * .005
    },
    weight: {
        flex: 1,
        borderRadius: height * .05,
        elevation: width * .005,
        borderWidth:width * .002,
        backgroundColor:'white',
        padding: height * .022,
        borderColor:'#5c5c5c70'
    },
    OxigenInerContainer: {
        flex: 1,

    },
    OxigenIner: {
        flex: 1,
        paddingHorizontal: height * .01,
        // backgroundColor:'red'
    },
    boxUperStyle: {
        flexDirection: 'row'
    },
    likeInputOxygen: {
        width: width * .23,
        height: height * .1,
        borderWidth: 1,
        flexDirection: "row-reverse",
        alignItems: 'center',
    },
    boxLowerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // marginBottom: height * .02,  
    },
    likeInputMin: {
        width: width * .1,
        height: height * .07,
        borderWidth: 1,
        // flexDirection:"row-reverse",
        alignItems: 'center',
        justifyContent: 'center'
    },
    // Modal Styling
    modalMainContainer: {
        backgroundColor: '#81c2f7',
        maxHeight: height * .8,
        maxWidth: width * 1,
        top: height * .14,
        borderTopRightRadius: width * .05,
        borderTopLeftRadius: width * .05,
    },
    haiderContainer: {
        width: width * .9,
        height: height * .15,
    },
    headerInner: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: '#e44f3bfd',

        justifyContent: 'space-between',
        paddingHorizontal: width * .02,
        elevation: width * .003,
        borderTopRightRadius: width * .05,
        borderTopLeftRadius: width * .05,
    },
    headerHeading: {
        fontSize: width * .04,
        fontFamily: Fonts.BalooChettan2,
        color: 'white',
    },
    headerIcon: {
        alignItems: 'center',
        marginLeft: width * .35
    },
    submit:{
        width: width * .058,
        height: height * .1,
        backgroundColor:'white',
        borderRadius:width * .1,
        justifyContent:'center',
        alignItems:'center',
        elevation: width * .003,


    },
    alarmText: {
        // alignSelf:'center',
        fontSize: width * .015,
        fontFamily: Fonts.Handlee,
        color: '#e44f3bfd',

    },
    bodyMainContainer: {
        width: width * .9,
        height: height * .62,
        backgroundColor: 'white'
    },
    bodyContainer: {
        flex: 1,
        marginHorizontal: width * .02,
        marginTop: width * .01,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    bodyHeading: {
        fontSize: width * .03,
        fontWeight: 'bold',
        paddingBottom: width * .005,
        marginBottom:width * .005,
    },
    graphImage:{
        width: width * .58,
        height: height * .45,
    },
    dataContainer:{
        width: width * .27,
        height: height * .585,
        backgroundColor: '#ffe3e383',
        elevation: width * .003,
        marginLeft: width * .01,
        borderRadius: width * .04,
        padding: width * .015
    },
    currentWieHeading:{
        fontSize: width * .02,
        fontWeight: 'bold',
        color: '#484149c5',
        marginBottom: width * .002,
        marginLeft: width * .002,

    },
    currentWeiView:{
        elevation: width * .003,
        width: width * .18,
        height: height * .09,
        backgroundColor: 'white',
        borderRadius: width * .05,
        paddingHorizontal:width * .01,
    },
    currentWeiInp:{
        fontSize: width * .03,
        fontWeight: 'bold',
        textAlign: 'right',
        color: '#484149c5',
        paddingVertical: width * .008,
    },
    preWeiHeading:{
        fontSize: width * .02,
        fontWeight: 'bold',
        color: '#484149c5',
        marginBottom: width * .002,
        marginLeft: width * .002,

    },
    preWeiInpuView:{
            elevation: width * .003,
            width: width * .14,
            height: height * .09,
            backgroundColor: 'white',
            borderRadius: width * .03,
            paddingHorizontal: width * .01,
    },
    preWeiInput:{
        fontSize: width * .025,
        fontWeight: 'bold',
        textAlign: 'right',
        color: '#484149c5',
        paddingVertical: width * .01,
    },
    minWieHeading:{
        fontSize: width * .018,
        fontWeight: 'bold',
        color: '#484149c5',
        marginBottom: width * .002,
        marginLeft: width * .002,

    },
    minWeiInpuView:{
        elevation: width * .003,
        width: width * .09,
        height: height * .09,
        backgroundColor: 'white',
        borderRadius: width * .03,
        paddingHorizontal: width * .01,
    },
    minWeiInput:{
        fontSize: width * .022,
        fontWeight: 'bold',
        textAlign: 'right',
        color: '#484149c5',
        paddingVertical: width * .011,
    },
    maxWeiHeading:{
        fontSize: width * .018,
        fontWeight: 'bold',
        color: '#484149c5',
        marginBottom: width * .002,
        marginLeft: width * .002,

    },
    maxWeiInpuView:{
        elevation: width * .003,
        width: width * .09,
        height: height * .09,
        backgroundColor: 'white',
        borderRadius: width * .03,
        paddingHorizontal: width * .01,
    },
    maxWeiInput:{
        fontSize: width * .022,
        fontWeight: 'bold',
        textAlign: 'right',
        color: '#484149c5',
        paddingVertical: width * .011,

    },
    toggleHeading:{
        fontSize: width * .018,
        fontWeight: 'bold',
        color: '#484149c5',
        marginBottom: width * .002,
        marginLeft: width * .002,
    },
    toggleContainer:{
        width: width * .09,
        height: height * .07,
        borderRadius: width * .04,
        padding: 5,
        elevation: width * .003,
    },
    toggleCircle:{
        width: width * .03,
        height: height * .05,
        borderRadius: width * .1,
        backgroundColor: 'white', // rgb(102,134,205)
    },
});