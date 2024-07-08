import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import React, {useEffect, useMemo, useState} from 'react';
import Route from "./Route";
import { NavigationContainer } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import DarkTheme from './src/context/theme/DarkTheme';
import LightTheme from './src/context/theme/LightTheme';
import { ThemeProvider } from "./src/context/theme/ThemeContext"

const App = () => {
  //const {i18n} = useTranslation();
  //i18n.changeLanguage('en');
 
  return(
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <ThemeProvider>
          <Route />
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
