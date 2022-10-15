import React from 'react';
import {View, StyleSheet} from 'react-native';
import Color from '../../constants/Color';

export default function Card({children}) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.Primary500,
    marginTop: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    elevation: 8,
  },
});
