import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Animated, Easing } from 'react-native';

const LoginScreen = () => {
  const opacityValues = useRef([
    new Animated.Value(1),
    new Animated.Value(1),
    new Animated.Value(1),
    new Animated.Value(1),
    new Animated.Value(1),
    new Animated.Value(1),
    new Animated.Value(1),
  ]).current;

  const [animationCompleted, setAnimationCompleted] = useState(false);

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
      iterations: 2,
    });

    repeatedAnimations.start(() => setAnimationCompleted(true));
  }, [opacityValues]);

  return (
    <View style={styles.loginContainer}>
      <View style={styles.overlay} />
      <View style={styles.flexContainer}>
        <View style={styles.left}>
          {[
            "https://images.odishatv.in/uploadimage/library/16_9/16_9_2/recent_photo_1688026932.jpg",
            "https://images.odishatv.in/uploadimage/library/16_9/16_9_2/recent_photo_1688026932.jpg",
            "https://images.odishatv.in/uploadimage/library/16_9/16_9_2/recent_photo_1688026932.jpg",
            "https://images.odishatv.in/uploadimage/library/16_9/16_9_2/recent_photo_1688026932.jpg",
            "https://images.odishatv.in/uploadimage/library/16_9/16_9_2/recent_photo_1688026932.jpg"
          ].map((uri, index) => (
            <Animated.View key={index} style={[styles.flexItem, styles.square1, { opacity: opacityValues[index] }]}>
              <Image
                style={styles.image}
                source={{ uri }}
              />
            </Animated.View>
          ))}
        </View>
        <View style={styles.right}>
          {[
            "https://images.odishatv.in/uploadimage/library/16_9/16_9_2/recent_photo_1688026932.jpg",
            "https://images.odishatv.in/uploadimage/library/16_9/16_9_2/recent_photo_1688026932.jpg"
          ].map((uri, index) => (
            <Animated.View key={index + 5} style={[styles.flexItem, styles.vRectangle, { opacity: opacityValues[index + 5] }]}>
              <Image
                style={styles.image}
                source={{ uri }}
              />
            </Animated.View>
          ))}
        </View>
      </View>
      <View style={styles.loginForm}>
        <Text style={styles.loginTitle}>Login</Text>
      </View>
      <View style={styles.socialIconsContainer}>
        <View style={styles.icon} />
        <View style={styles.icon} />
        <View style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    position: 'relative',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(220, 2, 2, 0.5)',
  },
  flexContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  left: {
    width: '66%',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  right: {
    width: '34%',
  },
  flexItem: {
    borderRadius: 5,
  },
  square: {
    height: 120,
    width: '50%',
    margin: 2,
  },
  square1: {
    height: 120,
    width: '50%',
    margin: 2,
  },
  vRectangle: {
    width: 130,
    height: 245,
    margin: 2,
  },
  hRectangle: {
    width: '100%',
    height: 120,
    margin: 2,
  },
  square2: {
    height: 120,
    width: 130,
    margin: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 5,
  },
  loginForm: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -85 }],
    alignItems: 'center',
    zIndex: 2,
  },
  loginTitle: {
    fontSize: 28,
    color: '#fff',
    textTransform: 'capitalize',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  icon: {
    width: 40,
    height: 40,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
});

export default LoginScreen;
