import React from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '../constants/colors';

const GameOverScreen = props => {
  return (
    <View style={style.screen}>
      <Text>Game over! Thanks for Playing</Text>
      <Text>Number of Guesses: {props.roundsNumber}</Text>
      <Text>The Number : {props.userNumber}</Text>
      <Button
        title={'Start New Game!'}
        onPress={() => props.newGame()}
        color={Colors.primary}
      />
    </View>
  );
};

const style = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: {
    marginTop: 10
  }
});

export default GameOverScreen;
