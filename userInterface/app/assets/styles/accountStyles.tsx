import { StyleSheet } from 'react-native';

const accountStyles = StyleSheet.create({
    mainAccountContainer: {
      backgroundColor: "#FFFFFF",
      flex: 1,
    },
    accountProfileContainer: {
        width: "100%",
        height: "auto",
    },
    apEditContainer: {
        width: "100%",
        height: "auto",
        alignItems: "center",
    },
    apImgContainer: {
      width: 100,
      height: 100,
    },
    apImg: {
      width: "100%",
      height: "100%",
      borderRadius: 50,
    },
    apImgEditIcon: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "#E5E5E5",
        padding: 10,
        marginTop: -30,
        marginLeft: 70,
    },
    apIEImg: {
        width: 10,
        height: 10,
    },
    accountCloseButton: {
        width: "100%",
        height: 30,
        marginTop: 50,
        paddingRight: 40,
        marginBottom: 40,

    },
    acbImg: {
        width: 15,
        height: 15,
        marginLeft: "auto",
        marginRight: 0
    },
    apEditInfo: {
        width: "100%",
        alignItems: "center",
        marginTop: 20,
    },
    apInfoName: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#3D3D3D"
    },
    apInfoEmail: {
        fontWeight: "200",
        fontSize: 12,
        marginTop: 5,
        marginBottom: 10,
        color: "#A5A5A5"
    },
    sbContainer: {
        width: "100%",
        height: 100,
        flexDirection: "row",
        flexWrap: "wrap",
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 10,
    },
    sb: {
        width: "33.3%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    sbBtn: {
        width: 80,
        height: 45,
        backgroundColor: "#E5E5E5",
        borderRadius: 25,
    },
    sbImg: {
        width: 20,
        height: 20,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "auto",
        marginBottom: "auto",
    },
    sbText: {
        fontWeight: "500",
        fontSize: 12,
        alignItems: "center",
        color: "#A5A5A5",
        marginTop: 10,
    },
    settingsContainer: {
        width: "100%",
        minHeight: 50,
        padding: 40,
    },
    settingsContainerBG: {
        backgroundColor: "#E5E5E5",
        borderRadius: 20,
    },
    settingsItem: {
        width: "100%",
        height: 70,
        flexDirection: "row",
        flexWrap: "wrap",

    },
    settingsImgContainer: {
        width: "20%",
        height: "100%",
        padding: 25,
    },
    settingsImg: {
       flex: 1,
    },
    settingsTextContainer: {
        width: "60%",
        height: "100%",
    },
    settingsText: {
        fontSize: 14,
        marginTop: 25,
    },
    settingsCaratContainer: {
        width: "20%",
        height: "100%",
        padding: 25,
    },
    settingsTextRed: {
        fontSize: 14,
        marginTop: 25,
        color: "#A53C41",
    },
    settingsCarat: {
        flex: 1,
    },
    signOutButtonContainer: {
        width: "100%",
        height: 220,
        padding: 40,
    },
    signOutButton: {
        width: "100%",
        height: 60,
        backgroundColor: "#621FCC",
        borderRadius: 30,
    },
    signOutButtonText: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: 14,
        marginTop: 23,
        fontWeight: "bold",
        color: "#FFFFFF",
    }  
});

export default accountStyles;