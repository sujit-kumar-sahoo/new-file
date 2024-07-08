// components/HeaderNavbar.js
import React from 'react';
import Icon, { Icons } from "./Icons";
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

const HeaderNavbar = ({ navigation }) => {
  return (
    <View style={styles.navbar}>
      <View style={styles.logo}>
      <Image
            style={styles.icon}
            source={{ uri: 'https://images.odishatv.in/assets/images/logo-white.png' }}
          />
      </View>
      <View style={styles.icons}>
        <TouchableOpacity>
            <Icon type={Icons.Feather} name='search' color='white' size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
            <Icon type={Icons.Ionicons} name='person-circle-outline' color='white' size={32} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgba(34, 2, 2, 0.8)',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  logo: {
    height: 40,
  },
  icons: {
    flexDirection: 'row',
    gap: 20,
  },
  icon: {
    height: 24,
    width: 24,
  },
});

export default HeaderNavbar;
