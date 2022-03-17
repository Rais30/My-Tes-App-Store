import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {Header, ProductCrad} from '../../component';
import {dummy} from './DateDummy';

const Home = () => {
  const renderItem = ({item}) => {
    <ProductCrad
      title={item.title}
      desc={item.desc}
      price={item.price}
      image={{url: item.image}}
    />;
  };

  return (
    <SafeAreaView style={styles.pages}>
      <Header title={'Home'} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={dummy}
        renderItem={renderItem}
        ListHeaderComponent={<Text style={styles.label}>List Product</Text>}
        ListFooterComponent={<View style={styles.footer} />}
        style={styles.container}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: '#fff',
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2F2E41',
    marginBottom: 16,
  },
  footer: {
    height: 30,
  },
});
