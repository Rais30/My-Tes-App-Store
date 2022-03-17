import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Images from '../../assets';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    navigation.replace('Home');
  };

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <Image source={Images.ILLogin} style={styles.image} />
        <Text style={styles.title}>Camp404 Store</Text>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={setEmail}
          style={styles.emailInput}
          value={email}
        />
        <TextInput
          placeholder="Password"
          keyboardType="email-address"
          style={styles.passwordInput}
          onChangeText={setPassword}
          value={password}
        />
        <View style={styles.breakLine} />
        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#1F8597',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F2F2F2',
    alignSelf: 'center',
    marginBottom: 77,
    marginTop: 16,
  },
  emailInput: {
    backgroundColor: '#FFFFFF',
    height: 45,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderWidth: 1,
    borderColor: '#F4A896',
    marginBottom: 16,
  },
  passwordInput: {
    backgroundColor: '#FFFFFF',
    height: 45,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderWidth: 1,
    borderColor: '#F4A896',
  },
  breakLine: {
    backgroundColor: '#C4C4C4',
    marginVertical: 40,
    marginHorizontal: 16,
    height: 1,
  },
  button: {
    backgroundColor: '#F4A896',
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
