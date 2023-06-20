import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES } from '../constants';

const Select = (props) => {
  const { options, value, onSelect, errorText, placeholder } = props;
  const [showOptions, setShowOptions] = useState(false);

  const handleSelectOption = (option) => {
    setShowOptions(false);
    onSelect(option);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.inputContainer}
        onPress={() => setShowOptions(!showOptions)}
      >
        {props.icon && (
          <props.iconPack name={props.icon} size={24} style={styles.icon} />
        )}
        <Text style={styles.input}>{value ? value : placeholder}</Text>
      </TouchableOpacity>
      {showOptions && (
        <View style={styles.optionsContainer}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => handleSelectOption(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
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
    alignItems: 'center',
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
  optionsContainer: {
    backgroundColor: COLORS.gray,
    borderRadius: 5,
    marginTop: -4,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 5,
  },
  
  option: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: 5,
  },
  optionText: {
    color: COLORS.primary,
    fontFamily: 'regular',
    fontSize: 16,
    textAlign: 'center',
    backgroundColor:COLORS.lightWhite,
    paddingVertical:10
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    textAlign: 'right',
    marginTop: 4,
  },
});

export default Select;
