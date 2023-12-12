import { View, Text } from 'react-native';
import { Image } from 'expo-image';
import imgLocations from '../imgLocations';
import accountStyles from '../../assets/styles/accountStyles';
import appIcons from '../appIcons';
import React from 'react';

const UserAccountContainer = () => {
  return (
      <View style={accountStyles.accountProfileContainer}>
        <View style={accountStyles.apEditContainer}>
          <View style={accountStyles.apImgContainer}>
            <Image source={imgLocations.santaMonicaPier} contentFit="cover" style={accountStyles.apImg} />
          </View>
          <View style={accountStyles.apImgEditIcon}>
            <Image source={appIcons.pencilIcon} contentFit="contain" style={accountStyles.apIEImg} />
          </View>
        </View>

        <View style={accountStyles.apEditInfo}>
          <Text style={accountStyles.apInfoName}>John Doe</Text>
          <Text style={accountStyles.apInfoEmail}>johndoe@gmail.com</Text>
        </View>
      </View>
  )
}

export default UserAccountContainer;