import { View, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES, images } from "../constants";
import { Feather } from "@expo/vector-icons";
import { Image } from "react-native";

const Card = (props) => {
  return (
    <View
      style={{
        width: "95%",
        //height: 148,
        borderRadius: SIZES.padding,
        backgroundColor: COLORS.secondary,
        flexDirection: "row",
        justifyContent:'flex-start',
        alignItems: "center",
        paddingHorizontal: SIZES.padding,
        paddingVertical: 8,
        marginVertical: 4,
        borderColor: COLORS.blue,
        //borderWidth: 1,
        elevation: 2,
        shadowColor: COLORS.secondaryWhite,
        shadowRadius: 3,
      }}
    >
        <Image
          source={props.image}
          resizeMode="contain"
          style={{
            height: 100,
            width: 100,
            borderRadius: SIZES.padding,
          }}
        />
      <View style={{ flexDirection: "column", marginLeft:12 }}>
        <Text
          style={{
            fontSize: 14,
            color: COLORS.black,
            fontWeight: 700,
          }}
        >
          {props.name}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: COLORS.primary,
            marginTop: 28,
          }}
        >
          Location
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: COLORS.black,
            fontWeight: 500,
            marginVertical: 2,
          }}
        >
          {props.location}
        </Text>
        <Text style={{ ...FONTS.body4, color: COLORS.black }}>
          {props.postedDate}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          marginLeft:'auto'
        }}
      >
        <Text style={{ ...FONTS.h3, color: COLORS.primary }}>
          {props.bloodType}
        </Text>

        <TouchableOpacity onPress={props.onPress}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.primary,
              height: Platform.OS == "ios" ? 35 : 45,
              width: Platform.OS == "ios" ? 35 : 45,
              borderRadius: Platform.OS == "ios" ? 17.5 : 22.5,
              marginTop: 22,
              marginRight: 10,
            }}
          >
            <Feather
              name="phone-call"
              size={22}
              style={{ color: COLORS.white }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
