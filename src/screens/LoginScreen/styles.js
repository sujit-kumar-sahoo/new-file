import { StyleSheet, Dimensions, } from 'react-native';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
export const createStyles = (theme) => {
  return StyleSheet.create({
    loginContainer: {
      flex: 1,
      position: 'relative',
      backgroundColor: '#000',
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
    square: {
      height: 120,
      //width: '48%',//calc(50% - 4px)
      margin: 2,
    },
    hRectangle: {
      width: '100%',
      height: 120,
      margin: 2,
    },
    squareimage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      borderRadius: 5,
    },
    vRectangle: {
      width: 130,
      height: 245,
      margin: 2,
    },
    square2: {
      height: 120,
      width: 130,
      margin: 2,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: screenHeight,
      width: screenWidth,
      zIndex: 1,
    },
    loginForm: {
      left: '8%',
      top: '33%',
      position: 'absolute',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      padding: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 10,
      elevation: 10, // This is necessary for Android shadow effect
      zIndex: 2,
      width: '84%',
    },
    inputFocus: {
      borderColor: '#3B82F6', /* focus:border-blue-500 in Tailwind CSS */
    },
    loginTitle: {
      marginBottom: 20,
      color: '#fff',
      textAlign: 'center',
      fontSize: 24,
    },
    inputGroup: {
      marginBottom: 15,
    },
    label: {
      marginBottom: 5,
      color: '#ccc',
    },
    input: {
      width: 300,
      paddingVertical: 8,
      paddingHorizontal: 16,
      paddingLeft: 32, /* Equivalent to pl-8 in Tailwind CSS */
      borderColor: '#D1D5DB', /* border-gray-300 in Tailwind CSS */
      borderRadius: 8, /* rounded-lg in Tailwind CSS */
      borderWidth: 2,
      backgroundColor: '#222',
      color: '#FFF', // Default text color
    },
    inputFocused: {
      borderColor: 'hsla(21, 52.20%, 48.40%, 0.35)', // Change border color when focused
      color: '#fdfdff', // Change text color when focused
      backgroundColor: '#444', // Change background color when focused
    },
    buttonContainer: {
      marginTop: 10,
    },
    skipButton: {
      position: 'absolute',
      top: 20,
      right: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: 90,
      height: 40,
      borderRadius: 10,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      zIndex: 3,
    },
    skipButtonText: {
      fontSize: 16,
      color: '#ffffff',
      marginRight:9,
      zIndex: 300,
    },
    triangle: {
      width: 0,
      height: 0,
      borderLeftWidth: 15,
      borderLeftColor: 'white',
      borderTopWidth: 8,
      borderTopColor: 'transparent',
      borderBottomWidth: 9,
      borderBottomColor: 'transparent',
      marginRight: 5,
    },
    bar: {
      width: 1,
      height: 15,
      backgroundColor: 'white',
    },

    orContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    triangleBefore: {
      width: 0,
      height: 0,
      borderTopWidth: 0,
      borderBottomWidth: 2,
      borderBottomColor: 'transparent',
      borderRightWidth: 88,
      borderRightColor: 'white',
      marginRight: 8,
      transform: [{ rotate: '-360deg' }],
    },
    triangleAfter: {
      width: 0,
      height: 0,
      borderTopWidth: 0,
      borderBottomWidth: 2,
      borderBottomColor: 'transparent',
      borderLeftWidth: 88,
      borderLeftColor: 'white',
      marginLeft: 8,
      transform: [{ rotate: '360deg' }],
    },
    orText: {
      fontSize: 16,
      color: theme.textColor
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
      backgroundColor: '#f3d8d8',
      borderRadius: 20,
    },
  });
};