import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Title from '../components/ui/Title';
import NumContainer from '../components/game/NumContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import InstructionText from '../components/ui/InstructionText';
import Card from '../components/ui/Card';
import Icon from 'react-native-vector-icons/Ionicons';
import GuessLogItem from '../components/game/GuessLogItem';
let minBoundary = 1;
let maxBoundary = 100;

function generateRandomNumber(min, max, exclude) {
  const RndNum = Math.floor(Math.random() * (max - min)) + min;
  if (RndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return RndNum;
  }
}

export default function GameScreen({userNumber, onGameOver}) {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const {height, width} = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
      minBoundary = 1;
      maxBoundary = 100;
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie..!", 'You know that this is wrong...', [
        {text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNum = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRndNum);
    setGuessRounds(prevGuessRounds => [newRndNum, ...prevGuessRounds]);
    return;
  }
  const guessRoundsLength = guessRounds.length;
  let screen = <></>;
  if (height > width) {
    screen = (
      <>
        <NumContainer>{currentGuess}</NumContainer>
        <Card>
          <InstructionText>Higher or Lower?</InstructionText>

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                <Icon name="remove" size={24} color="white" />
              </PrimaryButton>
            </View>
            <View style={styles.button}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                <Icon name="add" size={24} color="white" />
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </>
    );
  } else {
    screen = (
      <>
        <Card>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                <Icon name="remove" size={24} color="white" />
              </PrimaryButton>
            </View>
            <NumContainer>{currentGuess}</NumContainer>
            <View style={styles.button}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                <Icon name="add" size={24} color="white" />
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </>
    );
  }

  return (
    <View style={styles.container}>
      <Title>
        <Text>Opponent's Guess</Text>
      </Title>
      {screen}
      <View style={styles.listItem}>
        <FlatList
          data={guessRounds}
          renderItem={itemData => (
            <GuessLogItem
              roundNumber={guessRoundsLength - itemData.index}
              guessedNumber={itemData.item}
            />
          )}
          keyExtractor={item => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 5,
    marginHorizontal: 20,
  },
  button: {
    flex: 1,
    borderRadius: 28,
  },
  listItem: {
    flex: 1,
    padding: 12,
  },
});
