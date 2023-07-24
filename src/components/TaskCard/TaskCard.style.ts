import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors";
import Fonts from "../../styles/Fonts";

const baseStyle = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
    },
    text: {
        fontFamily: Fonts.defaultRegularFontFamily,
        fontSize: 17
    }
})

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.defaultGreenColor,
        ...baseStyle.container
    },
    text: {
        color: Colors.defaultDarkColor,
        ...baseStyle.text
    },
    completedContainer: {
        backgroundColor: Colors.defaultGreyColor,
        ...baseStyle.container
    },
    completedText: {
        color: "white",
        textDecorationLine: 'line-through',
        ...baseStyle.text
    }
});