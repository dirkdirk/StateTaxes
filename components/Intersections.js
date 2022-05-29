import React, {useState} from 'react';
import {Pressable, Text, StyleSheet, ScrollView} from 'react-native';
import {lists} from '../data';

const Intersections = () => {
  const [selectedLists, setSelectedLists] = useState([]);

  const toggleSelected = id => {
    console.log('toggleSelected() id: ', id);
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
        {borderColor: selectedLists.includes(item.id) ? 'lime' : 'pink'},
      ]}
      onPress={() => toggleSelected(item.id)}
    >
      <Text style={styles.buttonText}>{item.name}</Text>
    </Pressable>
  );

  return (
    <>
      <Text style={styles.title}>Select overlaps</Text>
      <ScrollView contentContainerStyle={styles.wrapper}>
        {lists.map(item => renderItem({item}))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
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
    color: '#fff',
  },
});

export default Intersections;
