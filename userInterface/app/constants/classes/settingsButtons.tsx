import { View, Text } from 'react-native';
import { Image } from 'expo-image';
import accountStyles from '../../assets/styles/accountStyles';
import appIcons from '../appIcons';
import React from 'react';

const SettingsButtonContainer = () => {
  return (
    <View style={accountStyles.sbContainer}>
        <View style={accountStyles.sb}>
            <View style={accountStyles.sbBtn}>
                <Image source={appIcons.tosIcon} style={accountStyles.sbImg} contentFit="contain" />
            </View>
            <Text style={accountStyles.sbText}>Terms of Service</Text>
        </View>
        <View style={accountStyles.sb}>
            <View style={accountStyles.sbBtn}>
                <Image source={appIcons.privacyIcon} style={accountStyles.sbImg} contentFit="contain" />
            </View>
            <Text style={accountStyles.sbText}>Privacy Policy</Text>
        </View>
        <View style={accountStyles.sb}>
            <View style={accountStyles.sbBtn}>
                <Image source={appIcons.supportIcon} style={accountStyles.sbImg} contentFit="contain" />
            </View>
            <Text style={accountStyles.sbText}>Support</Text>
        </View>
    </View>
  )
}

export default SettingsButtonContainer;