import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../constants';

const Input = (props) => {
  const { errorText, ...restProps } = props;

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {props.icon && (
          <props.iconPack name={props.icon} size={24} style={styles.icon} />
        )}
        <TextInput
          {...restProps}
          style={styles.input}
          placeholder={props.placeholder}
          placeholderTextColor={COLORS.black}
          returnKeyType="done"
        />
      </View>
      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    width: '100%',
    backgroundColor: COLORS.gray,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    borderRadius: 5,
    borderColor: COLORS.blue,
    borderWidth: 1,
    marginVertical: 5,
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10,
    color: COLORS.primary,
  },
  input: {
    color: COLORS.black,
    flex: 1,
    fontFamily: 'regular',
    paddingTop: 0,
    textAlign: 'right',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    textAlign: 'right',
    marginTop: 4,
  },
});

export default Input;
