import { View, Text } from 'react-native';
import { Image } from 'expo-image';
import accountStyles from '../../assets/styles/accountStyles';
import appIcons from '../appIcons';
import React from 'react';

const MoreSettingsContainer = () => {
  return (
    <View style={accountStyles.settingsContainer}>
        <View style={accountStyles.settingsContainerBG}>

            <View style={accountStyles.settingsItem}>
                <View style={accountStyles.settingsImgContainer}>
                    <Image source={appIcons.myDataIcon} contentFit='contain' style={accountStyles.settingsImg} />
                </View>
                <View style={accountStyles.settingsTextContainer}>
                    <Text style={accountStyles.settingsText}>My Data</Text>
                </View>
                <View style={accountStyles.settingsCaratContainer}>
                    <Image source={appIcons.rightCaratIcon} contentFit='contain' style={accountStyles.settingsCarat} />
                </View>
            </View>
            <View style={accountStyles.settingsItem}>
                <View style={accountStyles.settingsImgContainer}>
                    <Image source={appIcons.resetPasswordIcon} contentFit='contain' style={accountStyles.settingsImg} />
                </View>
                <View style={accountStyles.settingsTextContainer}>
                    <Text style={accountStyles.settingsText}>Reset Password</Text>
                </View>
                <View style={accountStyles.settingsCaratContainer}>
                    <Image source={appIcons.rightCaratIcon} contentFit='contain' style={accountStyles.settingsCarat} />
                </View>
            </View>
            <View style={accountStyles.settingsItem}>
                <View style={accountStyles.settingsImgContainer}>
                    <Image source={appIcons.aboutIcon} contentFit='contain' style={accountStyles.settingsImg} />
                </View>
                <View style={accountStyles.settingsTextContainer}>
                    <Text style={accountStyles.settingsText}>About</Text>
                </View>
                <View style={accountStyles.settingsCaratContainer}>
                    <Image source={appIcons.rightCaratIcon} contentFit='contain' style={accountStyles.settingsCarat} />
                </View>
            </View>

        </View>
    </View>
  )
}

export default MoreSettingsContainer;