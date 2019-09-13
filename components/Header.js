import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/colors';

const Header = props => {
  return (
    <View style={style.header}>
      <Text style={style.headerTitle}>{props.title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: '#fefefe',
    fontSize: 18
  }
});

export default Header;
