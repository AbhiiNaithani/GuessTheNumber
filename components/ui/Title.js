import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function Title({children}) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'OpenSans-Bold',
    color: 'white',
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
    justifyContent: 'center',

    textAlign: 'center',
    maxWidth: '80%',
    marginBottom: 10,
  },
});
