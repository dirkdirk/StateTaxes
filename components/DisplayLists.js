import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import DATA from '../data';
import {intersection, map} from 'lodash';

const DisplayLists = ({selectedLists}) => {
  const [commonObj, setCommonObj] = useState({});

  useEffect(() => {
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
    } else {
      setCommonObj({});
    }
  }, [selectedLists]);

  const renderList = ({list}) => {
    const listObj = DATA.find(x => x.id === list);
    const id = listObj.id;
    const name = listObj.name;
    const states = listObj.states;
    return taxStatesView({id, name, states});
  };

  const renderCommon = () => {
    const id = commonObj.id;
    const name = 'States on ALL the selected lists.';
    const states = commonObj.states;
    const isCommon = true;
    return taxStatesView({id, name, states, isCommon});
  };

  const taxStatesView = ({id, name, states, isCommon = false}) => {
    return (
      <View
        key={id}
        style={[styles.listWrapper, isCommon && styles.commonWrapper]}
      >
        <Text style={styles.listTitle}>{name}</Text>
        <Text style={styles.stateNames}>
          {states.map(state => state.name + ' ')}
        </Text>
      </View>
    );
  };

  return (
    selectedLists.length > 0 && (
      <ScrollView contentContainerStyle={styles.wrapper}>
        {commonObj.id && renderCommon()}
        {selectedLists.map(list => renderList({list}))}
      </ScrollView>
    )
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  listWrapper: {
    margin: 5,
    padding: 10,
    paddingBottom: 14,
    borderWidth: 1,
    borderColor: '#fffffff0',
    borderRadius: 4,
  },
  commonWrapper: {
    borderColor: '#fffffffd',
    backgroundColor: '#00000019',
  },
  listTitle: {
    color: '#fffffff5',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  stateNames: {
    color: '#fffffff5',
    fontSize: 16,
  },
});

export default DisplayLists;
