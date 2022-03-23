import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {Header} from '../../component';
import Images from '../../assets';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const AddProdacts = ({naviagtion}) => {
  const [image, setImage] = useState();

  const Upload = () => {
    launchImageLibrary({mediaType: 'photo', quality: 1}, response => {
      if (response.didCancel || response.error) {
        Alert.alert('Oops!!, Batal Memilih Photo.');
      } else {
        setImage(response);
      }
    });
  };

  return (
    <SafeAreaView style={styles.page}>
      <Header title={'Add Product'} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.label}>Product Name</Text>
        <TextInput style={styles.textInput} />
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.textArea}
          numberOfLines={3}
          multiline
          textAlignVertical="top"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddProdacts;

const styles = StyleSheet.create({});
