import { StyleSheet, Dimensions } from "react-native"

//Packages

//Files
const { height, width } = Dimensions.get('window');

export default styles = StyleSheet.create({
    listView:{
        height:height * .07,
        width: width * .3,
        backgroundColor:'white',
        marginBottom:height * .02,
        elevation:width * .002,
        borderWidth:width * .001,
        borderColor:'#b098b4c5',
        alignItems:"center",
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:width * .01
    },
    listText:{
        fontSize:width * .015,
        fontWeight:'bold',
        color:"#484149c5",
        fontFamily:'MetalMania-Regular'
    },
});