import { StyleSheet } from 'react-native';

const filterStyles = StyleSheet.create({
    filterModal: {
      flex: 1,
    },
    bg: {
      backgroundColor: "#000000",
      flex: 1,
    },
    filterContainerBox: {
      backgroundColor: "#FFFFFF",
      marginTop: 50,
      marginBottom: 50,
      marginLeft: 20,
      marginRight: 20,
      padding: 40,
      flex: 1,
      borderRadius: 25,
    },
    filterTitle: {
      width: "100%",
      height: "auto",
      flexDirection: "row",
      flexWrap: "wrap"
  
    },
    filterTitleImg: {
      width: 20,
      height: 20,
      marginRight: 20,
    },
    filterTitleText: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#3D3D3D"
    },
    filterClose: {
      width: "100%",
      height: 20,
    },
    filterCloseImg: {
      width: 15,
      height: 15,
      marginLeft: "auto",
      marginRight: 0
    },
    categoryList: {
      width: "100%",
      minHeight: 75,
      height: "auto",
    },
    filterCaptionTitle: {
      paddingTop: 20,
      paddingBottom: 20,
    },
    filterCaptionTitleText: {
      fontWeight: "bold",
      fontSize: 12,
      color: "#999999",
    },
    minRatingContainer: {
      width: "100%",
      height: 50,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center"
    },
    minRatingImg: {
      width: 30,
      height: 30,
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
    },
    priceRange: {
      width: "100%",
      height: 50,
      flexDirection: "row",
      flexWrap: "wrap"
    },
    priceRangeInput: {
      width: "40%",
      height: 50,
      backgroundColor: "#E5E5E5",
      borderRadius: 25,
    },
    priceRangeText: {
      width: "20%",
      height: "auto",
      fontWeight: "bold",
      fontSize: 12,
      color: "#999999",
      textAlign: "center",
      marginTop: 19
    },
    paymentsAcceptedContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      width: "100%",
      height: 50,
    },
    paItemContainer: {
      width: "33%",
      height: "100%",
      padding: 10,
    },
    paItem: {
      backgroundColor: "#878787",
      width: "100%",
      height: 30,
      borderRadius: 15,
      flexDirection: "row",
      flexWrap: "wrap",
    },
    paItemText: {
      color: "#ffffff",
      fontSize: 9,
      marginTop: 8,
      fontWeight: "bold"
    },
    paItemImg: {
      width: 15,
      height: 15,
      marginTop: 7.5,
      marginLeft: 15,
      marginRight: 8
    },
    otherContainer: {
      width: "100%",
      height: 50,
      flexDirection: "row",
      flexWrap: "wrap",
    },
    oItemContainer: {
      width: "50%",
      height: "100%",
      padding: 10,
    },
    oItem: {
      width: "100%",
      height: 30,
      borderRadius: 15,
      backgroundColor: "#878787",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    oItemText: {
      color: "#ffffff",
      fontWeight: "bold",
      fontSize: 9,
      marginTop: 8
    },
    oItemImg: {
      width: 15,
      height: 15,
      marginTop: 7.5,
      marginLeft: 20,
      marginRight: 10,
    },
    applyFilterBtn: {
      width: "100%",
      height: 50,
      borderRadius: 25,
      backgroundColor: "#3D3D3D",
      marginTop: 30
    },
    afbText: {
      color: "#ffffff",
      fontWeight: "bold",
      fontSize: 12,
      marginTop: "auto",
      marginBottom: "auto",
      marginLeft: "auto",
      marginRight: "auto",
    }
});
  
export default filterStyles;