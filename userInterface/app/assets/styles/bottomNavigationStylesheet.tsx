import { Platform } from "react-native";
import { COLORS } from "../../constants/theme";
import { StyleSheet } from "react-native";

const bottomNavStyles = StyleSheet.create({
    bottomTab: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        height: 72,
        elevation: 0,
        backgroundColor: COLORS.white,
        borderTopWidth: 0,
    },
    indexTab: {
        alignItems: "center",
    },
    indexTabImg: {
        height: 20,
        width: 20,
        marginTop: Platform.OS == "web" ? 0 : 15,
    },
    capyTab: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white,
        width: Platform.OS == "ios" ? 70: 80,
        height: Platform.OS == "ios" ? 70: 80,
        top: Platform.OS == "ios" ? -10: -20,
        borderRadius: Platform.OS == "ios" ? 45: 50

    },
    capyTabImg: {
        height: 70,
        width: 70,
    },
    accountTab: {
        alignItems: "center",
    },
    accountTabImg: {
        height: 20,
        width: 20,
        marginTop: Platform.OS == "web" ? 0 : 15,
    }
});

export default bottomNavStyles;