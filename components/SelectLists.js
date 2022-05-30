import React, {useState} from 'react';
import {Pressable, Text, StyleSheet, ScrollView, View} from 'react-native';
import DATA from '../data';
import DisplayLists from './DisplayLists';

const TITLE = 'Select states with no taxes';

const SelectLists = () => {
  const [selectedLists, setSelectedLists] = useState([
    'ss',
    'tsp',
    'inheritance',
  ]);
  // const [selectedLists, setSelectedLists] = useState([]);

  const toggleSelected = id => {
    // console.log('toggleSelected() id: ', id);
    selectedLists.includes(id)
      ? setSelectedLists(prev => prev.filter(i => i !== id))
      : setSelectedLists(prev => [...prev, id]);
  };

  const renderItem = ({item}) => (
    <Pressable
      key={item.id}
      style={[
        styles.button,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          borderColor: selectedLists.includes(item.id) ? 'cyan' : '#ffffff70',
        },
      ]}
      onPress={() => toggleSelected(item.id)}
    >
      <Text style={styles.buttonText}>{item.name}</Text>
    </Pressable>
  );

  return (
    <>
      <View>
        <Text style={styles.title}>{TITLE}</Text>
        <ScrollView contentContainerStyle={styles.buttonsWrapper}>
          {DATA.map(item => renderItem({item}))}
        </ScrollView>
      </View>
      <DisplayLists selectedLists={selectedLists} />
    </>
  );
};

const styles = StyleSheet.create({
  buttonsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fffffff5',
    margin: 5,
    marginTop: 5,
    textAlign: 'center',
  },
  button: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
    margin: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fffffff5',
  },
});

export default SelectLists;
