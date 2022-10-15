import React from 'react';
import {View, Image, StyleSheet, Text, useWindowDimensions} from 'react-native';
import Title from '../components/ui/Title';
import Color from '../constants/Color';
import PrimaryButton from '../components/ui/PrimaryButton';

export default function GameOver({userNumber, roundsNumber, onStartNewGame}) {
  const {height, width} = useWindowDimensions();
  let imageSize = 300;

  if (height < width) {
    imageSize = 150;
  }
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image style={styles.image} source={require('../images/success.png')} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageContainer: {
    borderWidth: 3,
    borderColor: Color.Primary500,
    overflow: 'hidden',
    margin: 10,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  summaryText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 23,
    textAlign: 'center',
    marginBottom: 10,
    color: 'black',
  },
  highlight: {
    fontFamily: 'OpenSans-Bold',
    color: Color.Primary300,
  },
});
