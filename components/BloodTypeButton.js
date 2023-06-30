import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants";

const BloodTypeButton = ({ bloodType, onPress, selected }) => {
  const buttonStyle = selected ? styles.selectedButton : styles.button;
  const textStyle = selected ? styles.selectedText : styles.text;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{bloodType}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    width: 44,
    height: 44,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 3,
  },
  selectedButton: {
    backgroundColor: COLORS.secondary,
    width: 44,
    height: 44,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 2,
  },
  text: {
    fontSize: 14,
    color: COLORS.white,
    fontWeight: "700",
  },
  selectedText: {
    fontSize: 14,
    color: COLORS.black,
    fontWeight: "700",
  },
});

export default BloodTypeButton;
