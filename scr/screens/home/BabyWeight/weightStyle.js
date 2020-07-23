import { StyleSheet, Dimensions } from "react-native"
import { Fonts } from '../../../utils/fonts';

//Packages

//Files
const { height, width } = Dimensions.get('window');

export default styles = StyleSheet.create({
    
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
    submit:{
        width: width * .058,
        height: height * .1,
        backgroundColor:'white',
        borderRadius:width * .1,
        justifyContent:'center',
        alignItems:'center',
        elevation: width * .003,


    },
    bodyMainContainer: {
        width: width * .9,
        height: height * .62,
        backgroundColor: 'white'
    },
    bodyContainer: {
        flex: 1,
        marginTop: width * .01,
        alignItems: 'center'

    },
    renderListContainer:{
        marginVertical: height * .005,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        elevation: width * .002,
        height: height * .07,
        borderColor: 'gray',
        borderWidth: .5,
        paddingHorizontal: width * .02,
        width: width * .88,
        flexDirection: 'row',
        alignItems: 'center'
    },
    renderListHeading1:{
        fontFamily: Fonts.BalooChettan2,
        fontSize: width * .02,
        color: "#484149c5",
    },
    renderListHeading2:{
        fontFamily: Fonts.BalooChettan2,
        fontSize: width * .02,
        color: "#484149c5",
        marginRight:width * .04
    }
});