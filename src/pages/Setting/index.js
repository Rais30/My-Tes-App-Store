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
    console.log('Map Location');
    const supported = await Linking.canOpenURL(mapLink);

    if (supported) {
      await Linking.openURL(mapLink);
    } else {
      Alert.alert(`tidak tahu cara membuka URL ini : ${mapLink}`);
    }
  }, []);

  return (
    <SafeAreaView style={styles.page}>
      <Header title={'Setting'} />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.itemSetting}
          onPress={() => navigation.navigate('AddProdacts')}>
          <Text style={styles.itemSettingText}>Add Products</Text>
          <Image source={Images.ICRightArrow} style={styles.rightIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemSetting} onPress={mapRedirect}>
          <Text style={styles.itemSettingText}>Store Location</Text>
          <Image source={Images.ICRightArrow} style={styles.rightIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.btnWrapper}>
        <TouchableOpacity
          style={styles.btnLogout}
          onPress={() => navigation.replace('Login')}>
          <Text style={styles.btnLogoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  itemSetting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
  },
  rightIcon: {
    height: 16,
    width: 16,
  },
  itemSettingText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#2F2E41',
  },
  btnWrapper: {
    padding: 16,
  },
  btnLogout: {
    height: 45,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#D46B52',
  },
  btnLogoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
