import { ScrollView, View, Modal } from 'react-native';
import { Image } from 'expo-image';
import React from 'react';
import styles from "../../assets/styles/homeStyles";
import loginStyles from '../../assets/styles/loginStyles';
import appIcons from '../../constants/appIcons';
import filterStyles from '../../assets/styles/filterModalStyles';
import FilterModalContainer from '../../constants/classes/filterModalContainer';
import SearchBarLocation from "../../constants/classes/searchBarLocation";
import CategoryFilter from "../../constants/classes/categoryFilter";
import TestContentItems from '../../constants/classes/testItems';
import SignInPageContainer from '../../constants/classes/signInPage';
import CreateAccountPageContainer from '../../constants/classes/createAccountPage';

const home = () => {
  return (
    <View style={styles.container}>
        <SearchBarLocation></SearchBarLocation>
        <CategoryFilter></CategoryFilter>
      <ScrollView>
        <TestContentItems></TestContentItems>
      </ScrollView>
      <Modal
      animationType={"fade"}
      transparent={false}
      visible={false}
      style={loginStyles.loginContainer}>
          <ScrollView>
          <CreateAccountPageContainer></CreateAccountPageContainer>
          </ScrollView>
      </Modal>

      <Modal
      animationType={"fade"}
      transparent={false}
      visible={false}
      style={loginStyles.loginContainer}>
          <SignInPageContainer></SignInPageContainer>
      </Modal>
      <Modal
      style={filterStyles.filterModal}
      animationType={"slide"}
      transparent={false}
      visible={true}
      >
        <FilterModalContainer></FilterModalContainer>
      </Modal>
    </View>
  );
}


export default home;