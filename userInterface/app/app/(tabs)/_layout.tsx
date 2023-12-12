import { Tabs } from "expo-router";
import { View, Text, Platform } from "react-native";
import { Image } from "expo-image";
import appIcons from "../../constants/appIcons";
import { COLORS } from "../../constants/theme";
import bottomNavStyles from "../../assets/styles/bottomNavigationStylesheet";

export default function TabLayout() {

    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: bottomNavStyles.bottomTab
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "",
                    tabBarIcon: ({focused}: {focused : boolean}) => {
                        return (
                            <View style={bottomNavStyles.indexTab}>
                                   <Image 
                                        source={ focused ? appIcons.homeIcon : appIcons.homeIcon } 
                                        contentFit="contain"
                                        style={bottomNavStyles.indexTabImg}
                                   />
                            </View>
                        )
                    }
                }}
            />

            <Tabs.Screen
                name="capy"
                options={{
                    title: "",
                    tabBarIcon: ({focused}: {focused : boolean}) => {
                        return (
                            <View style={bottomNavStyles.capyTab}>
                                   <Image 
                                        source={ focused ? appIcons.capyWheelIcon : appIcons.capyWheelIcon } 
                                        contentFit="contain"
                                        style={bottomNavStyles.capyTabImg}
                                   />
                            </View>
                        )
                    }
                }}
            />

            <Tabs.Screen
                name="account"
                options={{
                    title: "",
                    tabBarIcon: ({focused}: {focused : boolean}) => {
                        return (
                            <View style={bottomNavStyles.accountTab}>
                                   <Image 
                                        source={ focused ? appIcons.accountIcon : appIcons.accountIcon } 
                                        contentFit="contain"
                                        style={bottomNavStyles.accountTabImg}
                                   />
                            </View>
                        )
                    }
                }}
            />
        </Tabs>
    )
}