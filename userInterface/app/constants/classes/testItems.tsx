import { ScrollView, View, Text } from 'react-native';
import { Image } from "expo-image";
import React, { useState, useEffect } from 'react';
import appIcons from "../../constants/appIcons";
import imgLocations from "../../constants/imgLocations";
import styles from "../../assets/styles/homeStyles";

const TestContentItems = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const requestURL = "http://localhost:3000/";
        fetch(requestURL)
        .then(response => response.json)
        .then(rspData => {
            setData(rspData);
            setLoading(false);
        })
        .catch(error => {
            console.error();
        })
    });
    return (
        <View style={styles.contentContainer}>
            <ScrollView persistentScrollbar={true} style={styles.contentContainer}>

            <View style={styles.homeContentItem}>
            <View style={styles.homeContentImg}>
                <Image 
                style={styles.homeItemBgImg} 
                source={imgLocations.testBg}
                contentFit="cover"
                />
            </View>
            <View style={styles.homeContentTextContainer}>
                <Text style={styles.homeContentTitle}>The Getty</Text>
                <Text style={styles.homeContentLocation}>Los Angeles, CA</Text>
                <View style={styles.homeContentRating}>
                <Image source={appIcons.starIcon} contentFit='contain' style={styles.starRatingImg}/>
                <Image source={appIcons.starIcon} contentFit='contain' style={styles.starRatingImg}/>
                <Image source={appIcons.starIcon} contentFit='contain' style={styles.starRatingImg}/>
                <Image source={appIcons.starIcon} contentFit='contain' style={styles.starRatingImg}/>
                <Image source={appIcons.halfStarIcon} contentFit='contain' style={styles.halfStarRatingImg}/>
                </View>
                <Text style={styles.homeContentDescription}>The Getty Center, in Los Angeles, California, is a campus of the Getty Museum...</Text>
                <View style={styles.homeCategoryContainer}>
                <View style={styles.homeCategoryItem}>
                    <Image 
                    source={appIcons.whiteEducationalIcon}
                    contentFit='contain'
                    style={styles.homeSmallItemImg} />
                    <Text style={styles.homeSmallItemText}>Educational</Text>
                </View>
                <View style={styles.homeCategoryItem}>
                    <Image 
                    source={appIcons.whiteLeisureIcon} contentFit='contain' style={styles.homeSmallItemImg} />
                    <Text style={styles.homeSmallItemText}>Leisure</Text>
                </View>
                </View>
            </View>
            </View>
            <View style={styles.homeContentItem}>
            <View style={styles.homeContentImg}>
                <Image 
                style={styles.homeItemBgImg} 
                source={imgLocations.santaMonicaPier}
                contentFit="cover"
                />
            </View>
            <View style={styles.homeContentTextContainer}>
                <Text style={styles.homeContentTitle}>Santa Monica Pier</Text>
                <Text style={styles.homeContentLocation}>Santa Monica, CA</Text>
                <View style={styles.homeContentRating}>
                <Image source={appIcons.starIcon} contentFit='contain' style={styles.starRatingImg}/>
                <Image source={appIcons.starIcon} contentFit='contain' style={styles.starRatingImg}/>
                <Image source={appIcons.starIcon} contentFit='contain' style={styles.starRatingImg}/>
                </View>
                <Text style={styles.homeContentDescription}>The Santa Monica Pier is a large pier at the foot of Colorado Avenue ...</Text>
                <View style={styles.homeCategoryContainer}>
                <View style={styles.homeCategoryItem}>
                    <Image 
                    source={appIcons.whiteLeisureIcon}
                    contentFit='contain'
                    style={styles.homeSmallItemImg} />
                    <Text style={styles.homeSmallItemText}>Leisure</Text>
                </View>
                <View style={styles.homeCategoryItem}>
                    <Image source={appIcons.whiteOutdoorIcon} contentFit='contain' style={styles.homeSmallItemImg} />
                    <Text style={styles.homeSmallItemText}>Outdoor</Text>
                </View>
                </View>
            </View>
            </View>

            <View style={styles.homeContentItem}>
            <View style={styles.homeContentImg}>
                <Image 
                style={styles.homeItemBgImg} 
                source={imgLocations.testBg}
                contentFit="cover"
                />
            </View>
            <View style={styles.homeContentTextContainer}>
                <Text style={styles.homeContentTitle}>The Getty</Text>
                <Text style={styles.homeContentLocation}>Los Angeles, CA</Text>
                <View style={styles.homeContentRating}>
                <Image source={appIcons.starIcon} contentFit='contain' style={styles.starRatingImg}/>
                <Image source={appIcons.starIcon} contentFit='contain' style={styles.starRatingImg}/>
                <Image source={appIcons.starIcon} contentFit='contain' style={styles.starRatingImg}/>
                <Image source={appIcons.starIcon} contentFit='contain' style={styles.starRatingImg}/>
                <Image source={appIcons.halfStarIcon} contentFit='contain' style={styles.halfStarRatingImg}/>
                </View>
                <Text style={styles.homeContentDescription}>The Getty Center, in Los Angeles, California, is a campus of the Getty Museum...</Text>
                <View style={styles.homeCategoryContainer}>
                <View style={styles.homeCategoryItem}>
                    <Image 
                    source={appIcons.whiteEducationalIcon}
                    contentFit='contain'
                    style={styles.homeSmallItemImg} />
                    <Text style={styles.homeSmallItemText}>Educational</Text>
                </View>
                <View style={styles.homeCategoryItem}>
                    <Image 
                    source={appIcons.whiteLeisureIcon} contentFit='contain' style={styles.homeSmallItemImg} />
                    <Text style={styles.homeSmallItemText}>Leisure</Text>
                </View>
                </View>
            </View>
            </View>

            </ScrollView>
        </View>
    );
}

export default TestContentItems;