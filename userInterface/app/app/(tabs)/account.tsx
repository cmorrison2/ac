import { ScrollView, View, Text } from 'react-native';
import { Image } from 'expo-image';
import UserAccountContainer from '../../constants/classes/settingsProfile';
import AccountSettingsContainer from '../../constants/classes/accountSettingsOptions';
import MoreSettingsContainer from '../../constants/classes/moreSettings';
import accountStyles from '../../assets/styles/accountStyles';
import SettingsButtonContainer from '../../constants/classes/settingsButtons';
import React from 'react';
import appIcons from '../../constants/appIcons';

const account = () => {
    return (
      <View style={accountStyles.mainAccountContainer}>
        <View style={accountStyles.accountCloseButton}>
          <Image source={appIcons.closeBtnIcon} contentFit='contain' style={accountStyles.acbImg} />
        </View>
        <UserAccountContainer></UserAccountContainer>
        <ScrollView>
        <SettingsButtonContainer></SettingsButtonContainer>
          <View style={{display: "flex"}}>
            <AccountSettingsContainer></AccountSettingsContainer>
          </View>
          <View style={{display: "none"}}>
            <MoreSettingsContainer></MoreSettingsContainer>
          </View>
          <View style={accountStyles.signOutButtonContainer}>
            <View style={accountStyles.signOutButton}>
              <Text style={accountStyles.signOutButtonText}>Sign Out</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
}


export default account