import { ScrollView, View, Text } from 'react-native';
import { Image } from "expo-image";
import React from 'react';
import appIcons from "../appIcons";
import styles from "../../assets/styles/homeStyles";

const CategoryFilter = () => {
    return (
        <View>
        <View style={styles.categoryTopNav}>
        <ScrollView horizontal={true} style={styles.scrollCategory}>
          <View style={styles.categoryItem}>
            <Image
              source={appIcons.foodIcon}
              contentFit="contain"
              style={styles.categoryItemImg}
            />
            <Text style={styles.categoryItemText}>Food</Text>
          </View>
          <View style={styles.categoryItem}>
            <Image
              source={appIcons.outdoorIcon}
              contentFit="contain"
              style={styles.categoryItemImg}
            />
            <Text style={styles.categoryItemText}>Outdoor</Text>
          </View>
          <View style={styles.categoryItem}>
            <Image
              source={appIcons.leisureIcon}
              contentFit="contain"
              style={styles.categoryItemImg}
            />
            <Text style={styles.categoryItemText}>Leisure</Text>
          </View>
          <View style={styles.categoryItem}>
            <Image
              source={appIcons.drinksIcon}
              contentFit="contain"
              style={styles.categoryItemImg}
            />
            <Text style={styles.categoryItemText}>Drinks</Text>
          </View>
          <View style={styles.categoryItem}>
            <Image
              source={appIcons.shoppingIcon}
              contentFit="contain"
              style={styles.categoryItemImg}
            />
            <Text style={styles.categoryItemText}>Shopping</Text>
          </View>
          <View style={styles.categoryItem}>
            <Image
              source={appIcons.educationalIcon}
              contentFit="contain"
              style={styles.categoryItemImg}
            />
            <Text style={styles.categoryItemText}>Educational</Text>
          </View>
  
        </ScrollView>
        </View>
  
        <View style={styles.filterButtonContainer}>
          <View style={styles.filterButton}>
            <Image 
              source={appIcons.filterIcon}
              contentFit="contain"
              style={styles.filterButtonImg}
            />
  
            <Text style={styles.filterButtonText}>Filters</Text>
          </View>
          </View>
        </View>
    );
}

export default CategoryFilter;