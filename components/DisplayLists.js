import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import DATA from '../data';
import {intersection, map, isEmpty} from 'lodash';

const COMMON_DEFAULT = {id: 'common', name: 'Common', states: []};

const DisplayLists = ({selectedLists}) => {
  const [commonObj, setCommonObj] = useState(COMMON_DEFAULT);

  useEffect(() => {
    setCommonObj(COMMON_DEFAULT);
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
  }, [selectedLists]);

  const renderList = list => {
    const listObj = DATA.find(x => x.id === list);
    const id = listObj.id;
    const name = listObj.name;
    const states = listObj.states;
    return taxStatesView({id, name, states});
  };

  const renderCommon = () => {
    const id = commonObj.id;
    const name = 'States on ALL selected lists.';
    const states = isEmpty(commonObj.states)
      ? [{name: '--'}]
      : commonObj.states;
    const isCommon = true;
    return taxStatesView({id, name, states, isCommon});
  };

  const taxStatesView = ({id, name, states, isCommon = false}) => (
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

  return (
    selectedLists.length > 0 && (
      <>
        {commonObj.id && renderCommon()}
        <FlatList
          data={selectedLists}
          keyExtractor={item => item}
          renderItem={({item}) => renderList(item)}
          style={styles.wrapper}
        />
      </>
    )
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 5,
    marginHorizontal: 5,
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
