import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0,

    elevation: 5,
    zIndex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2F2E41',
  },
});
