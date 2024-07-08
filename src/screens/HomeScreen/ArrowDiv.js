// ArrowDiv.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Polygon, Rect, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';

const ArrowDiv = () => {
  return (
    <View style={styles.container}>
      <View style={styles.parallelogramContainer}>
        <Svg height="20" width="80" style={styles.parallelogramSvg}>
          <Defs>
            <SvgLinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop offset="70%" stopColor="#e90004" stopOpacity="1" />
              <Stop offset="100%" stopColor="#e29b00" stopOpacity="1" />
            </SvgLinearGradient>
          </Defs>
          <Polygon points="22,0 62,0 42,22 0,22" fill="url(#grad)" />
        </Svg>
        <Text style={styles.parallelogramText}>Live</Text>
        <View style={styles.parallelogramArrowContainer}>
          <Svg height="20" width="70" style={styles.parallelogramArrowSvg}>
            <Polygon points="17.5,0 60.5,0 67.5,10 60.5,20 0,20" fill="white" />
          </Svg>
          <Text style={styles.parallelogramArrowText}>Update</Text>
        </View>
      </View>
      <View style={styles.chevronContainer}>
        <Svg height="20" width="10" viewBox="0 0 10 20">
          <Polygon points="5,0 10,10 5,20 0,20 5,10 0,0" fill="#E73C01" />
        </Svg>
        <Svg height="20" width="10" viewBox="0 0 10 20">
          <Polygon points="5,0 10,10 5,20 0,20 5,10 0,0" fill="#E57D09" />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  parallelogramContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginTop: -25,
  },
  parallelogramSvg: {
    position: 'absolute',
    zIndex: 1,
  },
  parallelogramText: {
    height: 20,
    width: 80,
    color: 'white',
    textAlign: 'center',
    lineHeight: 20,
    position: 'absolute',
    zIndex: 2,
    marginLeft: -10
  },
  parallelogramArrowContainer: {
    height: 20,
    width: 90,
    position: 'relative',
    zIndex: 0,
    marginTop: 32,
  },
  parallelogramArrowSvg: {
    position: 'absolute',
    zIndex: 1,
  },
  parallelogramArrowText: {
    height: 20,
    width: 90,
    textAlign: 'center',
    lineHeight: 20,
    position: 'absolute',
    zIndex: 2,
    marginLeft: -8,
  },
  chevronContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
    marginLeft: -22,
    marginTop: 7,
  },
});

export default ArrowDiv;
