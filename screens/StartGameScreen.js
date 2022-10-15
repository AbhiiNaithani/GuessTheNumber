import React from 'react';
import {useState} from 'react';

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import Color from '../constants/Color';

function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0) {
      Alert.alert('Invalid Number!', 'Number has to be between 1 and 99 ', [
        {text: 'Okay', style: 'destructive', onPress: resetInputHandler},
      ]);
      return;
    }

    onPickNumber(chosenNumber);
  }

  return (
    <>
      <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position">
          <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
              <InstructionText>Enter a Number</InstructionText>
              <TextInput
                style={styles.textInput}
                maxLength={2}
                keyboardType="number-pad"
                value={enteredNumber}
                onChangeText={numberInputHandler}
              />
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <PrimaryButton onPress={resetInputHandler}>
                    <Text>Reset</Text>
                  </PrimaryButton>
                </View>
                <View style={styles.button}>
                  <PrimaryButton onPress={confirmInputHandler}>
                    <Text>Confirm</Text>
                  </PrimaryButton>
                </View>
              </View>
            </Card>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  textInput: {
    color: Color.accent500,
    marginBottom: 20,
    fontSize: 32,
    height: 60,
    width: 50,
    borderBottomWidth: 2,
    borderBottomColor: Color.accent500,
    fontWeight: 'bold',
  },

  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },

  button: {
    flex: 1,
  },
});

export default StartGameScreen;
