import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function ListItem({item, deleteItem}) {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}> {item.text}</Text>
        <Text style={styles.listItemDelete} onPress={() => deleteItem(item.id)}>
          Delete
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  listItemText: {
    fontSize: 20,
  },
  listItemDelete: {
    fontSize: 16,
    color: 'firebrick',
  },
});
export default ListItem;
