import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const ThickLineText = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.lineleft} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.lineright} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  lineleft: {
    flex: 1,
    height: 1,
    marginStart: moderateScale(50),
    backgroundColor: '#b3acac',
  },
  lineright: {
    flex: 1,
    height: 1,
    marginEnd: moderateScale(50),
    backgroundColor: '#b3acac',
  },
  text: {
    marginHorizontal: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ThickLineText;
