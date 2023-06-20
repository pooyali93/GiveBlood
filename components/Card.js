import { View, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES, images } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";

const Card = (props) => {
  return (
    <View
      style={{
        width: "95%",
        //height: 148,
        borderRadius: SIZES.padding,
        backgroundColor: COLORS.lightWhite,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding,
        marginVertical: 4,
        borderColor: COLORS.blue,
        borderWidth: 1,
        //elevation: 2,
        shadowColor: COLORS.secondaryWhite,
        shadowRadius: 3,
      }}
    >
      <Image
        source={images.user4}
        resizeMode="contain"
        style={{
          height: 100,
          width: 100,
          borderRadius: SIZES.padding,
        }}
      />
      <View
        style={{
          flexDirection: "column",
          marginRight:60
        }}
      >
        <Text
          style={{
            fontSize: 16,
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
            marginVertical: 2,
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
        }}
      >
        <Text style={{ ...FONTS.h1, color: COLORS.primary }}>
          {props.bloodType}
        </Text>

        <TouchableOpacity onPress={props.onPress}>
        <View style={{
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:COLORS.primary,
                height:Platform.OS == "ios" ? 40 : 50,
                width:Platform.OS == "ios" ? 40 : 50,
                borderRadius:Platform.OS == "ios" ? 20 : 25,
                marginTop: 22,
                marginRight:10
              }}>
          <Ionicons
            name="call-outline"
            size={26}
            style={{ color: COLORS.white }}
          />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
