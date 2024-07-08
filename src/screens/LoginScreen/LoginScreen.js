import React, { useRef, useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
//import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../context/theme/ThemeContext';
import { createStyles } from './styles';
import { 
  View, 
  Text, 
  Image, 
  Animated, 
  Dimensions, 
  TouchableOpacity, 
  TextInput, 
  Button, 
  Easing, 
  Switch 
} from 'react-native';


const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
const LoginScreen = ({ navigation }) => {
  /* switch dark theme work s*/
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme.backgroundColor === '#000000';
  const styles = createStyles(theme);
  /* switch dark theme work e*/

  const opacityValues = useRef([
    new Animated.Value(1),
    new Animated.Value(1),
    new Animated.Value(1),
    new Animated.Value(1),
    new Animated.Value(1),
    new Animated.Value(1),
  ]).current;

  const [animationCompleted, setAnimationCompleted] = useState(false);

  //--------------------------for text box focous start--------------------------------------//
  const [focusStates, setFocusStates] = useState({
    user_name: false,
    password: false,
  });
  const handleFocus = (inputName) => {
    setFocusStates((prevFocusStates) => ({
      ...prevFocusStates,
      [inputName]: true,
    }));
  };

  const handleBlur = (inputName) => {
    setFocusStates((prevFocusStates) => ({
      ...prevFocusStates,
      [inputName]: false,
    }));
  };
  //--------------------------for text box focous end--------------------------------------//

  useEffect(() => {
    const createAnimation = (opacity, delay) => {
      return Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ]);
    };

    const animations = opacityValues.map((opacity, index) => createAnimation(opacity, index * 500));

    const startAnimations = Animated.stagger(500, animations);
    
    const repeatedAnimations = Animated.loop(startAnimations, {
      iterations: 1,
    });

    repeatedAnimations.start(() => setAnimationCompleted(true));
  }, [opacityValues]);
  const animation = new Animated.Value(0);
  // Start animation with delay
  /*React.useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      delay: 500, // 0.5s delay
      useNativeDriver: true,
    }).start();
  }, []);*/

  const squareWidth = (screenWidth * 0.66 / 2) - 4;
  const imgUrl = 'https://images.odishatv.in/uploadimage/library/16_9/16_9_2/recent_photo_1688026932.jpg';

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const handleSkip = () => {
    navigation.navigate('BottomNavBar')
    // Handle skip logic
  };

  return (
    <View style={styles.loginContainer}>
      <View style={styles.flexContainer}>
        <View style={styles.left}>
        <Animated.View style={[styles.square, { opacity: opacityValues[1] }, { width: squareWidth }]} >
            <Image 
                style={styles.squareimage}
                source={{ uri:imgUrl }}
              />
          </Animated.View>
          <Animated.View style={[styles.square, { opacity: opacityValues[2] }, { width: squareWidth }]} >
            <Image 
                style={styles.squareimage}
                source={{ uri:imgUrl }}
              />
          </Animated.View>
          <Animated.View style={[styles.square, { opacity: opacityValues[2] }, { width: squareWidth }]} >
            <Image 
                style={styles.squareimage}
                source={{ uri:imgUrl }}
              />
          </Animated.View>
          <Animated.View style={[styles.square, { opacity: opacityValues[3] }, { width: squareWidth }]} >
            <Image 
                style={styles.squareimage}
                source={{ uri:imgUrl }}
              />
          </Animated.View>
          <Animated.View style={[styles.hRectangle, { opacity: opacityValues[4] }]}>
            <Image 
                style={styles.squareimage}
                source={{ uri:imgUrl }}
              />
          </Animated.View> 
        </View>
        <View style={styles.right}>
          <Animated.View style={[styles.vRectangle, { opacity: opacityValues[4] }]}>
            <Image 
                style={styles.squareimage}
                source={{ uri:imgUrl }}
              />
          </Animated.View>
          <Animated.View style={[styles.square, { opacity: opacityValues[5] }]}>
            <Image 
                style={styles.square2}
                source={{ uri:imgUrl }}
              />
          </Animated.View>
        </View> 
      </View>
      <View style={styles.loginForm}>
        <Text style={styles.loginTitle}>Login</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={[styles.input, focusStates.second && styles.inputFocused]}
            placeholder="Enter your username" 
            placeholderTextColor="#777"
            value={name}
            onChangeText={setName}
            onFocus={() => handleFocus('user_name')}
            onBlur={() => handleBlur('user_name')}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password:</Text>
          <TextInput 
            style={[styles.input, focusStates.second && styles.inputFocused]}
            placeholder="Enter your password" 
            placeholderTextColor="#777"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            onFocus={() => handleFocus('password')}
            onBlur={() => handleBlur('password')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Login" color="#ef7027" onPress={() => {}} />
        </View>
        <View style={styles.orContainer}>
          <View style={styles.triangleBefore} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.triangleAfter} />
        </View>
        <View style={styles.socialIconsContainer}>
          <View style={styles.icon} />
          <View>
            <Switch
              value={isDarkMode} onValueChange={toggleTheme}
            />
          </View>
          <View style={styles.icon} />
          <View style={styles.icon} />
        </View>
      </View>
      <TouchableOpacity style={styles.skipButton} onPress={() => handleSkip()}>
        <Text style={styles.skipButtonText}>Skip</Text>
        <View style={styles.triangle}></View>
        <View style={styles.bar}></View>
      </TouchableOpacity>
      <LinearGradient
        colors={[
          '#ffffff00', '#f7c8c800', '#f0ae1f', '#ef7027', '#e90004']}
        style={styles.overlay}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />
    </View>
  );
};

export default LoginScreen;
