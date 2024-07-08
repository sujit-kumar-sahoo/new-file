// GradientText.js
import React from 'react';
import Svg, { Text as SvgText, Defs, LinearGradient, Stop } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

const GradientText = ({ text, style, fontSize, xAxisStart }) => {
    return (
        <View style={style}>
            <Svg height="40" width="100%" viewBox="0 0 200 40">
                <Defs>
                    <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                        <Stop offset="0" stopColor="#f62004" stopOpacity="1" />
                        <Stop offset="1" stopColor="#f0ae1f" stopOpacity="1" />
                    </LinearGradient>
                </Defs>
                <SvgText
                    fill="url(#grad)"
                    x={xAxisStart}
                    y="50%"
                    alignmentBaseline="middle"
                    textAnchor="middle"
                    fontSize={fontSize}
                    fontWeight="bold"
                >
                    {text}
                </SvgText>
            </Svg>
        </View>
    );
};

export default GradientText;
