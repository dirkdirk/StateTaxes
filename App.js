import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import SelectLists from './components/SelectLists';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>US States Taxes</Text>
      <SelectLists />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#148',
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fffffff5',
    margin: 10,
    textAlign: 'center',
  },
});

export default App;
