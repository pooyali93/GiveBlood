import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SIZES, COLORS, FONTSN, FONTS } from "../constants";

const Button = (props) => {
  const filledBGColor = props.color || COLORS.primary;
  const outlinedBGColor = COLORS.white;
  const bgColor = props.filled ? filledBGColor : outlinedBGColor;
  const textColor = props.filled ? COLORS.white : COLORS.primary;
  return (
    <TouchableOpacity
      style={{
        ...styles.btn,
        ...{ backgroundColor: bgColor },
        ...props.style
      }}
      onPress={props.onPress}
    >
      <Text
        style={{
          ...FONTS.body2,
          ...{ color: textColor },
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: SIZES.padding,
    paddingVertical: SIZES.padding,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: SIZES.padding,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Button;
