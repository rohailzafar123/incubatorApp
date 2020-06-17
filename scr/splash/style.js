import { StyleSheet,Dimensions } from "react-native"

//Packages

//Files
const{height,width} = Dimensions.get('window');

export default styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:'#234A81',
        
        // alignItems:'center',        
    },
    
    image: {
        width:width*1,
        height:height*1,

    },
    activityIndi:{
        position:'relative',
        bottom:160
    },
    



});
