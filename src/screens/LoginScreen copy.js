import React from 'react';
//import { useNavigation } from '@react-navigation/native';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image, Appearance } from 'react-native';
import { colors } from '../../assets/constants/colors';
import { useTranslation } from 'react-i18next';

const LoginScreen = ({ navigation }) => {
  let current_lang = 'en'
  const { t, i18n } = useTranslation();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  //const navigation = useNavigation(); 

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in with:', email, password);
  };

  const handleFacebookLogin = () => {
    // Handle Facebook login logic
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic
  };

  const handleSkip = () => {

    navigation.navigate('Home')
    // Handle skip logic
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.loginbutton} onPress={handleLogin}>
        <Text style={styles.loginbuttonText}>{t('login')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>
      <View style={styles.loginContainer}>
        <TouchableOpacity style={[styles.button, styles.googleButton]}
        // onPress={()=>{Appearance.setColorScheme('light')}}
        >
          <Image source={{ uri: 'https://short-cgi.com/wp-content/uploads/2018/02/google-favicon-vector-400x400.png' }} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Login with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.facebookButton]}
          onPress={() => {
            i18n.changeLanguage(current_lang);
            if(current_lang=='en')
            {
              current_lang='hi';
            }
            else{
              current_lang='en';
            }
          }}
        >
          {/*<Image source={require('')} style={styles.buttonIcon} />*/}
          <Text style={styles.buttonText}>Login with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loginContainer: {
    marginTop: 50,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 50,
    borderRadius: 25,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  facebookButton: {
    backgroundColor: '#3b5998',
  },
  googleButton: {
    backgroundColor: '#dd4b39',
  },
  buttonText: {
    color: colors.textcolor,
    fontSize: 16,
    marginLeft: 10,
  },
  buttonIcon: {
    width: 30,
    height: 30,
  },
  buttonText: {
    color: colors.textcolor,
    fontSize: 16,
    textAlign: 'center',
  },
  skipButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  skipButtonText: {
    fontSize: 16,
    color: '#333',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  loginbutton: {
    width: '80%',
    height: 40,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  loginbuttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default LoginScreen;
