import { StyleSheet, Dimensions } from "react-native"

//Packages

//Files
const { height, width } = Dimensions.get('window');

export default styles = StyleSheet.create({
    OxigenView: {
        width: width * .32,
        height: height * .3,
        margin: width * .005,
        top: height * .105,
    },
    Oxigen: {
        flex: 1,
        // borderWidth: 4,
        // borderColor: "gray",
        borderRadius: height * .05,
        elevation: 3,
        padding:height * .022,


    },
    OxigenInerContainer:{
        flex: 1,
        
    },
    OxigenIner:{
        flex:1,
        paddingHorizontal:height * .01,
        // backgroundColor:'red'
    },
    boxUperStyle:{
        flexDirection:'row'
    },
    likeInputOxygen:{
        width:width * .23,
        height:height* .1,
        borderWidth:1,
        flexDirection:"row-reverse",
        alignItems: 'center',
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