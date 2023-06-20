import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";

const Dots = ({ selected }) => {
  let backgroundColor;
  backgroundColor = selected ? "#ff2156" : "#808080";
  return (
    <View
      style={{
        height: 5,
        width: 5,
        borderRadius: 5,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Done = ({ ...props }) => (
  <TouchableOpacity
    style={{
      marginRight: 12,
    }}
    {...props}
  >
    <Text style={{ color: "#ff2156", fontWeight: "bold" }}>Done</Text>
  </TouchableOpacity>
);

const OnBoardingStarter = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate("GetStarted")}
      onDone={() => navigation.navigate("GetStarted")}
      DotComponent={Dots}
      bottomBarColor="#EDF2F4"
      DoneButtonComponent={Done}
      bottomBarHighlight= {false}
      pages={[
        {
          backgroundColor: "#ffffff",
          image: <Image source={require("../assets/images/board.png")} />,
          title: "Find Blood Donors",
          subtitle: "Find your blood type using GiveBlood App",
        },
        {
          backgroundColor: "#ffffff",
          image: <Image source={require("../assets/images/give-blood.png")} />,
          title: "Find Blood Donors",
          subtitle: "Find your blood type using GiveBlood App",
        },
      ]}
    />
  );
};

export default OnBoardingStarter;
