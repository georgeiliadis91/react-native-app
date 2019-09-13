import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

const Card = props => {
  return (
    <View style={{ ...style.card, ...props.style }}>{props.children}</View>
  );
};

const style = StyleSheet.create({
  card: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    shadowColor: 'black',
    padding: 20,
    borderRadius: 10,
    shadowOffset: { width: 2, height: 5 },
    shadowRadius: 6,
    //Elevation only works on Android
    elevation: 15,
    //Shadow Opacity only works on IOS
    shadowOpacity: 0.75,
    backgroundColor: 'white'
  }
});
export default Card;
