import React from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native';
import Color from '../../constants/Color';

function PrimaryButton({children, onPress}) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        android_ripple={{color: Color.Primary500}}
        onPress={onPress}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontFamily: 'OpenSans-Regular',
  },

  buttonOuterContainer: {
    marginBottom: 20,
    marginHorizontal: 5,
    borderRadius: 28,
    overflow: 'hidden',
  },

  buttonInnerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.Primary300,
    paddingHorizontal: 16,
    paddingVertical: 8,

    elevation: 2,
  },

  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
