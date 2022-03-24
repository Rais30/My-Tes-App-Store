import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const currencyFormat = number => {
  return `Rp. ${number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
};

const ProductCrad = ({title, desc, price, image}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.contentWrapper}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.desc} numberOfLines={3}>
          {desc}
        </Text>
        <Text style={styles.price} numberOfLines={1}>
          {currencyFormat(price)}
        </Text>
        <View style={styles.actionWrapper}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('EditProduct', {
                title: title,
                desc: desc,
                price: price,
                image: image,
              })
            }>
            <View style={[styles.actionButton, styles.actionEdit]}>
              <Text style={styles.actionText}>Edit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={[styles.actionButton, styles.actionDelete]}>
              <Text style={styles.actionText}>Delete</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductCrad;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 16,
    flexDirection: 'row',
    padding: 12,
    borderWidth: 3,
    borderColor: '#1F8597',
    borderRadius: 8,
  },
  image: {
    height: 140,
    width: 140,
    borderRadius: 8,
    marginRight: 12,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2F2E41',
  },
  desc: {
    fontSize: 13,
    color: '#3F3D56',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#F4A896',
  },
  actionWrapper: {
    width: '100%',
    flexDirection: 'row',
  },
  actionButton: {
    borderRadius: 3,
    width: 60,
    paddingVertical: 3,
    alignItems: 'center',
  },
  actionEdit: {
    backgroundColor: '#FFC107',
    marginRight: 8,
  },
  actionText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  actionDelete: {
    backgroundColor: '#DC3545',
  },
});
