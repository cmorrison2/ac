import {View, Text } from 'react-native';
import { Image } from "expo-image";
import React from 'react';
import appIcons from "../appIcons";
import styles from "../../assets/styles/homeStyles";

const SearchBarLocation = () => {
    return (
        <View style={styles.topNavigation}>
        <View style={styles.searchBar}>
          <Image 
            source={appIcons.searchIcon} 
            contentFit="contain"
            style={styles.searchBarImg}
          />
          <Text style={styles.searchBarText}>Search</Text>
        </View>
        <View style={styles.topNavSpace}></View>
        <View style={styles.locationContainer}>
          <Image 
            source={appIcons.locationIcon}
            contentFit="contain"
            style={styles.locationContainerImg}
          />
          <Text style={styles.locationContainerText}>Los Angeles, CA</Text>
        </View>
      </View>
    );
}

export default SearchBarLocation;