import { StyleSheet } from "react-native";
import { myColors } from "./Colors";


export const Styles = StyleSheet.create({
    // Button
    btn: {
        width: 70,
        height: 70,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    }, btnLightBlue: {
        backgroundColor: myColors.blue,
    },
    btnBlue: {
        backgroundColor: myColors.blueDark,
    },
    btnDark: {
        backgroundColor: myColors.btnDark,
    },
    btnLight: {
        backgroundColor: myColors.white,
    },
    btnGray: {
        backgroundColor: myColors.btnGray,
    },
    smallTextLight: {
        fontSize: 32,
        color: myColors.white,
    },
    smallTextDark: {
        fontSize: 32,
        color: myColors.black,
    },
    // Keyboard
    row: {
        maxWidth: '100%',
        flexDirection: "row",
    },
    viewBottom: {
        position: 'absolute',
        bottom: 30,
    },
    expressionText: {
        fontSize: 90,
        color: myColors.gray,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    resultText: {
        fontSize: 90,
        color: myColors.result,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
})