import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {
      id: Math.random(),
      text: 'Milk',
    },
    {
      id: Math.random(),
      text: 'Eggs',
    },
    {
      id: Math.random(),
      text: 'Bread',
    },
    {
      id: Math.random(),
      text: 'Juice',
    },
  ]);
  const deleteItem = id =>
    setItems(prev => {
      return prev.filter(item => item.id !== id);
    });
  const addItem = text => {
    if (text) {
      setItems(prevItems => {
        return [{id: Math.random(), text: text}, ...prevItems];
      });
    } else {
      Alert.alert('Error', 'Please Enter an Item', {text: 'Ok'});
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
