import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const NumberContainer = props => {
  return (
    <View style={style.container}>
      <Text style={style.number}> {props.children}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.primary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10
  },
  number: {
    color: Colors.accent,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default NumberContainer;
