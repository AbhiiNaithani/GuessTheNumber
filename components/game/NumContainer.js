import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Color from '../../constants/Color';

export default function NumContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Color.accent500,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 25,
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 34,
    fontWeight: 'bold',
    color: Color.accent500,
  },
});
