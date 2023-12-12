import { View, Text } from 'react-native';
import { Image } from 'expo-image';
import React from 'react';
import loginStyles from '../../assets/styles/loginStyles';
import appIcons from '../appIcons';

const CreateAccountPageContainer = () => {
  return (
    <View>
        <View style={loginStyles.logoContainer}>
            <Image source={appIcons.appLogo} style={loginStyles.logoImg} contentFit="cover" />
        </View>
        <View style={loginStyles.loginTitleContainer}>
            <Image source={appIcons.createAccountPageIcon} contentFit="contain"  style={loginStyles.loginIconImg} />
            <Text style={loginStyles.loginText}>Create Account</Text>
        </View>

        <View style={loginStyles.loginTextContainer}>
            <View style={loginStyles.loginTextInput}>
                <Image source={appIcons.nameIcon} contentFit="contain" style={loginStyles.ltiImg} />
                <Text style={loginStyles.ltiTextarea}>Name</Text>
            </View>
        </View>

        <View style={loginStyles.loginTextContainer}>
            <View style={loginStyles.loginTextInput}>
                <Image source={appIcons.emailIcon} contentFit="contain" style={loginStyles.ltiImg} />
                <Text style={loginStyles.ltiTextarea}>Email</Text>
            </View>
        </View>
        <View style={loginStyles.loginTextContainer}>
            <View style={loginStyles.loginTextInput}>
                <Image source={appIcons.passwordIcon} contentFit="contain" style={loginStyles.ltiImg} />
                <Text style={loginStyles.ltiTextarea}>Password</Text>
            </View>
        </View>

        <View style={loginStyles.loginButtonContainer}>
            <View style={loginStyles.loginButton}>
                <Text style={loginStyles.lbText}>Register</Text>
            </View>
        </View>

        <View style={loginStyles.loginAltContainer}>
            <View style={loginStyles.loginAlt}>
                <Text style={loginStyles.laText}>Already Registered? </Text>
                <Text style={loginStyles.laOpt}>Sign In</Text>
            </View>
        </View>

    </View>
  )
}

export default CreateAccountPageContainer;