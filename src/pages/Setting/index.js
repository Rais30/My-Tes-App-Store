import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import React, {useCallback} from 'react';
import {Header} from '../../component';
import Images from '../../assets';

const mapLink = 'https://goo.gl/maps/MYc5HLEYRxPtKSkc9';

const Setting = ({navigation}) => {
  const mapRedirect = useCallback(async () => {
    const supported = await Linking.canOpenURL(mapLink);

    if (supported) {
      await Linking.canOpenURL(mapLink);
    } else {
      Alert.alert(`tidak tahu cara membuka URL ini : ${mapLink}`);
    }
  }, []);

  return (
    <View>
      <Header title={'Setting'} />
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({});
