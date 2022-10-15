import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Color from '../../constants/Color';

export default function GuessLogItem({roundNumber, guessedNumber}) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guessedNumber}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 12,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: Color.Primary500,
    backgroundColor: Color.accent500,
    marginVertical: 8,
    elevation: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  itemText: {
    fontFamily: 'OpenSans-Regular',
    color: Color.Primary500,
  },
});
