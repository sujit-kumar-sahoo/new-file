import React, { useState, useEffect, useRef } from "react";
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import BottomNavBar from "../../components/BottomNavBar";
import { getApiInvoke } from "../../util/Services";
//import LinearGradient from 'react-native-linear-gradient';
import ArrowDiv from "./ArrowDiv";
import Webstories from "./Webstories";
import LiveUpdate from "./LiveUpdate";
import BlinkingCircle from "./BlinkingCircle";
import { useTheme } from '../../context/theme/ThemeContext';
import { createStyles } from './styles';
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


const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

//import { View } from "react-native-reanimated/lib/typescript/Animated";



const Home = () => {
    /* switch dark theme work s*/
    const { theme } = useTheme();
    const styles = createStyles(theme);
    /* switch dark theme work e*/
    const [homedata, setHomeData] = React.useState([]);

    React.useEffect(() => {
        getIntialValue();
    },[]);

    const getIntialValue = async (value) => {   
        let data = await getApiInvoke('https://jsonplaceholder.typicode.com/posts');
        setHomeData(data);
        //console.log(homedata);
    };

    const live_updates_data = [
        { id: 1, image: 'https://images.odishatv.in/uploadimage/library/16_9/16_9_2/recent_photo_1688026932.jpg', status: 'Online' },
        { id: 2, image: 'https://images.odishatv.in/uploadimage/library/16_9/16_9_2/recent_photo_1688026932.jpg', status: 'Offline' },
        { id: 3, image: 'https://images.odishatv.in/uploadimage/library/16_9/16_9_2/recent_photo_1688026932.jpg', status: 'Busy' },
    ];
    const live_updates_width = live_updates_data.length === 1 ? screenWidth : screenWidth - 30;
    const scrollViewRef = useRef(null);
    useEffect(() => {
        const timer = setTimeout(() => {
            if (scrollViewRef.current) {
                scrollViewRef.current.scrollTo({ y: 110, animated: true });
                //return () => clearTimeout(timer);
            }
        }, 3000);

        return () => clearTimeout(timer);

    }, []);

    return (
        <ScrollView style={styles.homeContainer} ref={scrollViewRef}>
            {/*<FlatList 
                data={homedata}
                renderItem={({item}) =>(
                    <Text>{item.title}</Text>
                )}
            />*/}
            <Webstories />
            <LiveUpdate />            
        </ScrollView>
    );
}

export default Home; 