import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    paddingVertical: 5,
  },
  input: {
    flex: 1,
  },
  inputFocus: {
    borderWidth: 1,
    borderColor: '#1BAD4B',
    backgroundColor: '#EEF9F1',
  },
  inputError: {
    borderWidth: 1,
    borderColor: 'red',
  },
  textError: {
    color: 'red',
  },
});
