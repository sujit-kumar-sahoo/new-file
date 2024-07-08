import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/HomeScreen/Home';
import BottomNavBar from './src/components/BottomNavBar';
import HeaderNavbar from './src/components/HeaderNavbar';
import Flash from './src/screens/Flash';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';

const Stack = createStackNavigator();

const Route = () => {
    return (
        <Stack.Navigator 
        initialRouteName='Flash'
        screenOptions={{ headerShown: false }}
       >
            <Stack.Screen 
                name="Flash" 
                component={Flash} 
            />
            <Stack.Screen 
                name="LoginScreen" 
                component={LoginScreen} 
            />
            <Stack.Screen name="BottomNavBar" component={BottomNavBar} />
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={({ navigation }) => ({
                    headerShown: true, // Enable header for Home
                    header: () => <HeaderNavbar navigation={navigation} /> // Use custom HeaderNavbar
                })}
            />
        </Stack.Navigator>
    );
}

export default Route;