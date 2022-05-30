import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import DATA from '../data';
import {intersection, map} from 'lodash';

const DisplayLists = ({selectedLists}) => {
  const [commonObj, setCommonObj] = useState({});

  useEffect(() => {
    // console.log('DisplayLists - useEffect()');
    if (selectedLists.length > 1) {
      // Get an array of arrays of state names for each selectedLists.
      let listStates = map(
        selectedLists,
        list => DATA.find(obj => obj.id === list).states,
      );
      listStates = listStates.map(stateObj => stateObj.map(obj => obj.name));
      // Get intersection of listStates.
      let commonStates = intersection(...listStates);
      if (commonStates.length > 0) {
        // Transform into a DATA obj.
        commonStates = commonStates.map(state => {
          return {name: state};
        });
        const common = {
          id: 'common',
          name: 'Common',
          states: commonStates,
        };
        setCommonObj(common);
      }
    }
  }, [selectedLists]);

  const renderList = ({list}) => {
    // console.log('renderList()');
    const listObj = DATA.find(x => x.id === list);
    const id = listObj.id;
    const name = listObj.name;
    const states = listObj.states;
    return taxStatesView({id, name, states});
  };

  const renderCommon = () => {
    // console.log('renderCommon()');
    const id = commonObj.id;
    const name = commonObj.name;
    const states = commonObj.states;
    return taxStatesView({id, name, states});
  };

  const taxStatesView = ({id, name, states}) => {
    // console.log('taxStatesView()');
    return (
      <View key={id} style={styles.listWrapper}>
        <Text style={styles.listTitle}>{name}</Text>
        <Text style={styles.stateName}>
          {states.map(state => state.name + ' ')}
        </Text>
      </View>
    );
  };

  return (
    selectedLists.length > 0 && (
      <>
        <Text style={styles.title}>Lists</Text>
        <ScrollView contentContainerStyle={styles.wrapper}>
          {commonObj.id && renderCommon()}
          {selectedLists.map(list => renderList({list}))}
        </ScrollView>
      </>
    )
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 10,
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    margin: 5,
    marginTop: 5,
    textAlign: 'center',
    // borderWidth: 1,
    // borderColor: 'green',
  },
  listWrapper: {
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 4,
  },
  listTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  stateName: {
    color: '#fff',
    fontSize: 16,
  },
});

export default DisplayLists;
