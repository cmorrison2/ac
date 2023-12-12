import { View, Text } from 'react-native';
import { Image } from 'expo-image';
import accountStyles from '../../assets/styles/accountStyles';
import appIcons from '../appIcons';
import React from 'react';

const AccountSettingsContainer = () => {
  return (
    <View style={accountStyles.settingsContainer}>
        <View style={accountStyles.settingsContainerBG}>

            <View style={accountStyles.settingsItem}>
                <View style={accountStyles.settingsImgContainer}>
                    <Image source={appIcons.settingsIcon} contentFit='contain' style={accountStyles.settingsImg} />
                </View>
                <View style={accountStyles.settingsTextContainer}>
                    <Text style={accountStyles.settingsText}>Settings</Text>
                </View>
                <View style={accountStyles.settingsCaratContainer}>
                    <Image source={appIcons.rightCaratIcon} contentFit='contain' style={accountStyles.settingsCarat} />
                </View>
            </View>
            <View style={accountStyles.settingsItem}>
                <View style={accountStyles.settingsImgContainer}>
                    <Image source={appIcons.historyIcon} contentFit='contain' style={accountStyles.settingsImg} />
                </View>
                <View style={accountStyles.settingsTextContainer}>
                    <Text style={accountStyles.settingsText}>History</Text>
                </View>
                <View style={accountStyles.settingsCaratContainer}>
                    <Image source={appIcons.rightCaratIcon} contentFit='contain' style={accountStyles.settingsCarat} />
                </View>
            </View>
            <View style={accountStyles.settingsItem}>
                <View style={accountStyles.settingsImgContainer}>
                    <Image source={appIcons.closeAccountIcon} contentFit='contain' style={accountStyles.settingsImg} />
                </View>
                <View style={accountStyles.settingsTextContainer}>
                    <Text style={accountStyles.settingsTextRed}>Close Account</Text>
                </View>
            </View>

        </View>
    </View>
  )
}

export default AccountSettingsContainer;