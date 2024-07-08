import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';

const BlinkingCircle = () => {
    const radiusAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(radiusAnim, {
                    toValue: 10,
                    duration: 1400,
                    useNativeDriver: false,
                }),
                Animated.timing(radiusAnim, {
                    toValue: 0,
                    duration: 600,
                    useNativeDriver: false,
                })
            ])
        ).start();
    }, [radiusAnim]);

    const opacityAnim = radiusAnim.interpolate({
        inputRange: [0, 10],
        outputRange: [0.7, 0]
    });

    return (
        <View style={styles.container}>
            <Svg height="40" width="40" style={styles.svgContainer}>
                <AnimatedCircle
                    cx="17"
                    cy="22"
                    r="10"
                    fill="rgba(244, 176, 27, 0)"
                    stroke="rgba(244, 176, 27, 0.7)"
                    strokeWidth={radiusAnim}
                    opacity={opacityAnim}
                />
            </Svg>
            <View style={styles.circle}>
                <LinearGradient
                    colors={['#e90004', '#e29b00']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.gradient}
                />
            </View>
        </View>
    );
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    svgContainer: {
        position: 'absolute',
    },
    circle: {
        height: 15,
        width: 15,
        borderRadius: 50,
        overflow: 'hidden',
        backgroundColor: 'transparent',
        marginLeft: -5,
        marginTop: 2,

    },
    gradient: {
        flex: 1,
        borderRadius: 50,
    },
});

export default BlinkingCircle;
