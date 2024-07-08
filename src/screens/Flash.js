import { Text, View, StyleSheet } from 'react-native'
import React from 'react'
//import { SafeAreaView } from 'react-native-safe-area-context';

const Flash = ({navigation}) =>
{
    React.useEffect(() =>{
        setTimeout(() =>{
            navigation.navigate('LoginScreen');
        },2000);
    },[]);
    return (
        <View style={styles.container}>
          <Text style={styles.color}>
                Flash
            </Text>
        </View>
      )
}
//SafeAreaView
const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ef5527',
        backgroundImage: 'linear-gradient(180deg, #ef5527 40%, #f0ae1f 100%)'

    },
    color: {
        color: '#FFFF',
    },

  });

export default Flash