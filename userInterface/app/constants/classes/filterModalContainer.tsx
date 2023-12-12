import { ScrollView, View, Text, Modal } from 'react-native';
import { Image } from 'expo-image';
import React from 'react';
import styles from "../../assets/styles/homeStyles";
import filterStyles from '../../assets/styles/filterModalStyles';
import appIcons from '../../constants/appIcons';

const FilterModalContainer = () => {
  return (
      <View style={filterStyles.bg}>
        <View style={filterStyles.filterContainerBox}>
          <ScrollView>

            <View style={filterStyles.filterClose}>
              <Image source={appIcons.closeBtnIcon} style={filterStyles.filterCloseImg} contentFit="contain" />
            </View>
            <View style={filterStyles.filterTitle}>
              <Image source={appIcons.filterIcon} contentFit="contain" style={filterStyles.filterTitleImg} />
              <Text style={filterStyles.filterTitleText}>Filters</Text>
            </View>
            <View style={filterStyles.categoryFilterContainerArea}>
              <View style={filterStyles.filterCaptionTitle}>
                <Text style={filterStyles.filterCaptionTitleText}>Categories</Text>
              </View>
              <View style={filterStyles.categoryList}>
              <ScrollView horizontal={true}>
                <View style={styles.categoryItem}>
                  <Image source={appIcons.foodIcon} contentFit="contain" style={styles.categoryItemImg} />
                  <Text style={styles.categoryItemText}>Food</Text>
                </View>
                <View style={styles.categoryItem}>
                  <Image source={appIcons.outdoorIcon} contentFit="contain" style={styles.categoryItemImg} />
                  <Text style={styles.categoryItemText}>Outdoor</Text>
                </View>
                <View style={styles.categoryItem}>
                  <Image source={appIcons.leisureIcon} contentFit="contain" style={styles.categoryItemImg} />
                  <Text style={styles.categoryItemText}>Leisure</Text>
                </View>
                <View style={styles.categoryItem}>
                  <Image source={appIcons.drinksIcon} contentFit="contain" style={styles.categoryItemImg} />
                  <Text style={styles.categoryItemText}>Drinks</Text>
                </View>
                <View style={styles.categoryItem}>
                  <Image source={appIcons.shoppingIcon} contentFit="contain" style={styles.categoryItemImg} />
                  <Text style={styles.categoryItemText}>Shopping</Text>
                </View>
                <View style={styles.categoryItem}>
                  <Image source={appIcons.educationalIcon} contentFit="contain" style={styles.categoryItemImg} />
                  <Text style={styles.categoryItemText}>Educational</Text>
                </View>
              </ScrollView>
              </View>
            </View>

            <View style={filterStyles.minRatingContainerArea}>
              <View style={filterStyles.filterCaptionTitle}>
                <Text style={filterStyles.filterCaptionTitleText}>Minimum Rating</Text>
              </View>

              <View style={filterStyles.minRatingContainer}>
                <Image source={appIcons.grayStarIcon} contentFit="contain" style={filterStyles.minRatingImg} />   
                <Image source={appIcons.grayStarIcon} contentFit="contain" style={filterStyles.minRatingImg} />   
                <Image source={appIcons.grayStarIcon} contentFit="contain" style={filterStyles.minRatingImg} />   
                <Image source={appIcons.grayStarIcon} contentFit="contain" style={filterStyles.minRatingImg} />   
                <Image source={appIcons.grayStarIcon} contentFit="contain" style={filterStyles.minRatingImg} />           
              </View>
            </View>

            <View style={filterStyles.priceRangeContainerArea}>
              <View style={filterStyles.filterCaptionTitle}>
                <Text style={filterStyles.filterCaptionTitleText}>Price Range</Text>
              </View>

              <View style={filterStyles.priceRange}>
                <View style={filterStyles.priceRangeInput}></View>
                <Text style={filterStyles.priceRangeText}>TO</Text>
                <View style={filterStyles.priceRangeInput}></View>
              </View>
            </View>

            <View style={filterStyles.paymentsAcceptedContainerArea}>
              <View style={filterStyles.filterCaptionTitle}>
                <Text style={filterStyles.filterCaptionTitleText}>Payments Accepted</Text>
              </View>

              <View style={filterStyles.paymentsAcceptedContainer}>
                <View style={filterStyles.paItemContainer}>
                  <View style={filterStyles.paItem}>
                    <Image source={appIcons.cashIcon} contentFit="contain" style={filterStyles.paItemImg} />
                    <Text style={filterStyles.paItemText}>Cash</Text>
                  </View>
                </View>
                <View style={filterStyles.paItemContainer}>
                  <View style={filterStyles.paItem}>
                    <Image source={appIcons.cardIcon} contentFit="contain" style={filterStyles.paItemImg} />
                    <Text style={filterStyles.paItemText}>Card</Text>
                  </View>
                </View>
                <View style={filterStyles.paItemContainer}>
                  <View style={filterStyles.paItem}>
                    <Image source={appIcons.tapIcon} contentFit="contain" style={filterStyles.paItemImg} />
                    <Text style={filterStyles.paItemText}>Tap</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={filterStyles.otherContainerArea}>
              <View style={filterStyles.filterCaptionTitle}>
                <Text style={filterStyles.filterCaptionTitleText}>Other</Text>
              </View>

              <View style={filterStyles.otherContainer}>
                <View style={filterStyles.oItemContainer}>
                  <View style={filterStyles.oItem}>
                    <Image source={appIcons.petIcon} contentFit="contain" style={filterStyles.oItemImg} />
                    <Text style={filterStyles.oItemText}>Pet Friendly</Text>
                  </View>
                </View>
                <View style={filterStyles.oItemContainer}>
                  <View style={filterStyles.oItem}>
                    <Image source={appIcons.familyIcon} contentFit="contain" style={filterStyles.oItemImg} />
                    <Text style={filterStyles.oItemText}>Family Friendly</Text>
                  </View>
                </View>
              </View>          
            </View>

            <View style={filterStyles.applyFilterBtn}>
              <Text style={filterStyles.afbText}>Apply Filters</Text>
            </View>

          </ScrollView>
        </View>
      </View>
  )
}

export default FilterModalContainer;