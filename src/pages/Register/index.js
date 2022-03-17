import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Register = () => {
  return (
    <View style={styles.pages}>
      <Text>Register</Text>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
