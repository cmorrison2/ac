import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EDEDED'
    },
    topNavigation: {
      backgroundColor: '#ffffff',
      width: "100%",
      height: 130,
      top: 0,
      paddingTop: 50,
      paddingLeft: 40,
      paddingRight: 40,
      flexDirection: "row",
      flexWrap: "wrap"
    },
    searchBar: {
      width: "55%",
      height: 60,
      borderRadius: 30,
      alignItems: "center",
      paddingTop: Platform.OS == "web" ? 0 : 20,
      paddingLeft: 20,
      backgroundColor: "#E5E5E5",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    searchBarImg: {
      width: 15,
      height: 15
    },
    searchBarText: {
      paddingLeft: 20,
      fontSize: 12,
      color: "#AFAEAE"
    },
    locationContainer: {
      backgroundColor: "#3D3D3D",
      width: "40%",
      height: 40,
      marginTop: 13,
      right: 0,
      borderRadius: 30,
      flexDirection: "row",
      flexWrap: "wrap",
      paddingTop: 12,
      justifyContent: "center",
    },
    locationContainerImg: {
      height: 15,
      width: 15,
    },
    locationContainerText: {
      fontWeight: "bold",
      fontSize: 12,
      color: "#ffffff",
      paddingLeft: 5,
    },
    topNavSpace: {
      width: "5%"
    },
    categoryTopNav: {
      width: "100%",
      height: 80,
      backgroundColor: "#FFFFFF",
      paddingLeft: 40,
      paddingRight: 40,
      left: 0,
      right: 0
    },
    categoryItem: {
      width: 90,
      height: 50,
      backgroundColor: "#E5E5E5",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 25,
      marginRight: 10,
    },
    categoryItemImg: {
      width: 30,
      height: 30,
      top: 10,
    },
    categoryItemText: {
      fontWeight: "bold",
      fontSize: 14,
      color: "#621FCC",
      top: 25,
    },
    scrollCategory: {
      width: "100%",
      height: "100%",
    },
    filterButtonContainer: {
      width: "100%",
      height: 70,
      backgroundColor: "#ffffff"
    },
    filterButton: {
      width: 100,
      height: 40,
      backgroundColor: "#E5E5E5",
      borderRadius: 20,
      flexDirection: "row",
      flexWrap: "wrap",
      textAlign: "right",
      marginLeft: "auto",
      marginRight: 40,
      marginTop: 20
    },
    filterButtonText: {
      fontSize: 12,
      fontWeight: "bold",
      marginTop: 12
    },
    filterButtonImg: {
      width: 15,
      height: 15,
      marginRight: 12,
      marginLeft: 20,
      marginTop: 12.5,
    },
    contentContainer: {
      width: "100%",
      height: "100%",
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 200.
    },
    contentContainerScrollArea: { 
      width: "100%",
      height: "auto",
    },
    homeContentItem: {
      width: "100%",
      height: 200,
      backgroundColor: "#ffffff",
      marginTop: 20,
      borderRadius: 20,
      flexDirection: "row",
      flexWrap: "wrap"
    },
    homeContentImg: { 
      width: "35%",
      height: "100%",
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
    },
    homeContentTextContainer: {
      width: "65%",
      height: "100%",
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      padding: 20,
    },
    homeContentTitle: {
      fontSize: 16,
      fontWeight: "bold",
    },
    homeContentLocation: {
      fontSize: 8,
      fontWeight: "200",
      color: "#595959",
    },
    homeContentDescription: {
      fontSize: 10,
      color: "#898989",
      marginBottom: 5,
    },
    homeContentRating: {
      width: "100%",
      height: "auto",
      paddingTop: 10,
      paddingBottom: 10,
      flexDirection: "row",
      flexWrap: "wrap",
    },
    starRatingImg: {
      width: 15,
      height: 15,
      marginRight: 5,
    },
    halfStarRatingImg: {
      width: 7.5,
      height: 15,
      marginRight: 5
    },
    homeCategoryContainer: {
      width: "100%",
      height: 30,
      flexDirection: "row",
      flexWrap: "wrap"
    },
    homeItemBgImg: {
      width: "100%",
      height: "100%",
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
    },
    homeCategoryItem: {
      width: "48%",
      minWidth: 25,
      height: 25,
      paddingRight: 10,
      backgroundColor: "#621FCC",
      flexDirection: "row",
      flexWrap: "wrap",
      borderRadius: 12,
      marginTop: 2.5,
      marginRight: "1%",
    },
    homeSmallItemImg: {
      width: 15,
      height: 15,
      marginLeft: 10,
      marginRight: 5,
      marginTop: 5
    },
    homeSmallItemText: {
      fontWeight: "bold",
      color: "#ffffff",
      fontSize: 8,
      marginTop: 7,
      justifyContent: "center",
      alignItems: "center"
    }
  
  });

export default styles;