import {
  StyleSheet,
  Text,
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
import {launchImageLibrary} from 'react-native-image-picker';

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
        <Text style={styles.label}>Price</Text>
        <TextInput style={styles.textInput} />
        <Text style={styles.label}>Photo</Text>
        <TouchableOpacity style={styles.UploadImage} onPress={() => Upload()}>
          {image?.assets ? (
            <Image
              source={{uri: image?.assets[0].uri}}
              resizeMode="cover"
              style={styles.previewImage}
            />
          ) : (
            <Image source={Images.ICPlus} style={styles.plushIcon} />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSave}>
          <Text style={styles.btnSaveText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddProdacts;

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
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2F2E41',
    marginBottom: 8,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderColor: '#c4c4c4',
  },
  textArea: {
    height: 80,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#c4c4c4',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  UploadImage: {
    width: 100,
    height: 100,
    backgroundColor: '#c4c4c4',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plushIcon: {
    width: 40,
    height: 40,
  },
  previewImage: {
    width: 100,
    height: 100,
    borderRadius: 6,
  },
  btnSave: {
    height: 45,
    width: '100%',
    backgroundColor: '#1F8597',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 180,
    // position: 'absolute',
  },
  btnSaveText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
