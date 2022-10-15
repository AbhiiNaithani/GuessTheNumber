import React from 'react';
import {Text, StyleSheet} from 'react-native';

import Color from '../../constants/Color';

export default function InstructionText({children}) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Color.accent500,
    marginTop: 10,
    fontSize: 24,
    fontFamily: 'OpenSans-Bold',
  },
});
