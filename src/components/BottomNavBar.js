import React, { useState, useEffect, useRef } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon, { Icons } from "./Icons";
import LinearGradient from 'react-native-linear-gradient';
import Home from "../screens/HomeScreen/Home";
import ArticleDetail from "../screens/ArticleDetailScreen/ArticleDetail";
import HeaderNavbar from "./HeaderNavbar";
import { 
    Text ,
    View,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    useColorScheme
} from "react-native";
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import Categories from "../screens/CategoryScreen/Categories";
import Cities from "../screens/CityScreen/Cities";
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

//import { View } from "react-native-reanimated/lib/typescript/Animated";





const BottomNavBar = () => {
  const Tab = createBottomTabNavigator();
  const TabArr = [
    { route: 'Home', label: 'Home', type: Icons.Feather, icon: 'home', component: Home },
    { route: 'Category', label: 'Category', type: Icons.MaterialCommunityIcons, icon: 'dots-grid', component: Categories },
    { route: 'Webstories', label: 'Webstories', type: Icons.FontAwesome5, icon: 'fire', component: ArticleDetail },
    { route: 'Videos', label: 'Videos', type: Icons.Feather, icon: 'airplay', component: Home },
    { route: 'City', label: 'City', type: Icons.Feather, icon: 'map-pin', component: Cities },
  ];



    const TabButton = (props) => {

      const animate1 = { 0: { scale: .5, translateY: 7 }, .92: { translateY: -34 }, 1: { scale: 1.2, translateY: -24 } }
      const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 7 } }

      const circle1 = { 0: { scale: 0 }, 0.3: { scale: .9 }, 0.5: { scale: .2 }, 0.8: { scale: .7 }, 1: { scale: 1 } }
      const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }

      const { item, onPress, accessibilityState } = props;
      const focused = accessibilityState.selected;
      const viewRef = useRef(null);
      const circleRef = useRef(null);
      const textRef = useRef(null);
      const isDarkMode = useColorScheme() === 'dark';
    
      const { colors } = useTheme()
      const color = isDarkMode ? 'black' : 'white';
      const bgColor = colors.background;
    
      useEffect(() => {
        if (focused) {
          viewRef.current.animate(animate1);
          circleRef.current.animate(circle1);
          textRef.current.transitionTo({ scale: 1 });
        } else {
          viewRef.current.animate(animate2);
          circleRef.current.animate(circle2);
          textRef.current.transitionTo({ scale: 0 });
        }
      }, [focused])
    
      return (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={1}
          style={styles.container}>
          <Animatable.View
            ref={viewRef}
            duration={1000}
            style={styles.container}>
            <View style={[styles.btn, { borderColor: bgColor, backgroundColor: bgColor }]}>
              <Animatable.View
                ref={circleRef}
                style={styles.circle} />
              <Icon type={item.type} name={item.icon} color={focused ? 'white' : '#7b0505'} />
            </View>
            <Animatable.Text
              ref={textRef}
              style={[styles.text, { color }]}>
              {item.label}
            </Animatable.Text>
          </Animatable.View>
        </TouchableOpacity>
      )
    }

    
    return (
        <Tab.Navigator
                screenOptions={{
                headerShown: true,
                tabBarStyle: styles.tabBar,
                }}
            >
                {TabArr.map((item, index) => {
                return (
                    <Tab.Screen key={index} name={item.route} component={item.component}
                    options={{
                        tabBarShowLabel: false,
                        tabBarButton: (props) => <TabButton {...props} item={item} />,
                        header: () => item.route === 'Home' ? <HeaderNavbar /> : null,
                    }}
                    />
                )
                })}
            </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
    },
    tabBar: {
        height: 70,
        position: 'absolute',
        margin: 16,
        borderRadius: 16,
        backgroundColor: '#1f1f1f',
    },
    btn: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 4,
        borderColor: 'white',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7b0505',
        borderRadius: 25,
    },
    text: {
        fontSize: 12,
        textAlign: 'center',
        color: '#c9c3c3',
        fontWeight: '500'
    }
  });

export default BottomNavBar; 