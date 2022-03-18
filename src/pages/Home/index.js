import {StyleSheet, View, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {Header, ProductCrad} from '../../component';
import {dummy} from './DataDummy';

const Home = () => {
  return (
    <SafeAreaView style={styles.pages}>
      <Header title={'Home'} />
      <FlatList
        data={dummy}
        renderItem={({item}) => <ProductCrad {...item} image={item.imgae} />}
        keyExtractor={item => item.id.toString()}
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
