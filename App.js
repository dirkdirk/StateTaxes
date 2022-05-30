import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import SelectLists from './components/SelectLists';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>Taxes by US State</Text>
      <SelectLists />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#814',
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    margin: 10,
    textAlign: 'center',
  },
});

export default App;
