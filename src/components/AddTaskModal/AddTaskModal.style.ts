import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../styles/Colors";
import Fonts from "../../styles/Fonts";

const deviceSize = Dimensions.get('window');

const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    innerContainer: {
        backgroundColor: Colors.defaultGreyColor,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height : deviceSize.height / 2,
        padding : 10,
    },
    buttonContainer: {
        backgroundColor: Colors.defaultGreenColor,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        padding: 10,
    },
    input : {
        borderWidth : 1,
        borderColor : "white",
        borderRadius : 10,
        marginTop : 30,
        color : "white",
    },
    buttonPlaceholder : {
        color : Colors.defaultDarkColor,
        fontFamily : Fonts.defaultRegularFontFamily,
        fontSize : 16,
    },
    title : {
        color : Colors.defaultTitleColor,
        fontFamily : Fonts.defaultRegularFontFamily,
        textAlign : 'center',
    }
});

export default styles;