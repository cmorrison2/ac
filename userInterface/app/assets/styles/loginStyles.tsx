import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
    loginContainer: {
        flex: 1,
    },
    logoContainer: {
       width: "100%",
       height: "auto",
       alignItems: "center",
       justifyContent: "center",
       padding: 40,
    },
    logoImg: {
        width: 250,
        height: 125,
    },
    loginTitleContainer: {
        width: "100%",
        height: 100,
        padding: 40,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    loginIconImg: {
        width: 30,
        height: 30,
    },
    loginText: {
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 4,
        marginLeft: 10,
        color: "#777777",
    },
    loginTextContainer: {
        width: "100%",
        height: 70,
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 20,
    },
    loginTextInput: {
        width: "100%",
        height: 50,
        backgroundColor: "#E5E5E5",
        borderRadius: 25,
        flexDirection: "row",
        flexWrap: "wrap",
        paddingTop: 17,
    },
    ltiImg: {
        width: 15,
        height: 15,
        marginLeft: 20,
    },
    ltiTextarea: {
        fontSize: 12,
        marginLeft: 10,
        color: "#AFAEAE",
    },
    loginButtonContainer: {
        width: "100%",
        height: 80,
        paddingBottom: 20,
        paddingLeft: 40,
        paddingRight: 40,
    },
    loginButton: {
        width: "100%",
        height: 60,
        backgroundColor: "#3D3D3D",
        borderRadius: 30,
    },
    lbText: {
        textAlign: "center",
        fontSize: 12,
        fontWeight: "bold",
        color: "#FFFFFF",
        marginTop: 20,

    },
    loginAltContainer: {
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 200,
    },
    loginAlt: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    laText: {
        fontSize: 12,
        color: "#A5A5A5",
    },
    laOpt: {
        fontSize: 12,
        color: "#621FCC",
        fontWeight: "bold"
    }
});

export default loginStyles;