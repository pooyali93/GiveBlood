import { View, Text, Image } from "react-native";
import { Octicons, MaterialIcons } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES, images } from "../constants";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import ProfileContact from "./ProfileContact";
import ProfileFeatures from "./ProfileFeatures";
import ProfileSettings from "./ProfileSettings";

const ProfileInfo = () => {
  const [address, setAddress] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setAddress(location);

      // Reverse geocoding
      let geocode = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      if (geocode.length > 0) {
        let city = geocode[0].city;
        setAddress({ ...address, city: city }); // Update the address state with the city name
      }
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (address) {
    text = address.city || "City not found"; // Display the city name if available, or show an error  message
  }

  // const handleButtonPressed = () => {
  //   console.log("Call Us");
  // };

  return (
    <View
      style={{
        alignItems: "center",
        marginVertical: 22,
      }}
    >
      {/* <View style={{
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:COLORS.primary,
                
              }}> */}
      <Image
        source={images.user2}
        resizeMode="contain"
        style={{
          height: "90%",
          width: "90%",
          height: Platform.OS == "ios" ? 120 : 130,
          width: Platform.OS == "ios" ? 120 : 130,
          borderRadius: Platform.OS == "ios" ? 60 : 75,
          borderWidth: 3,
          borderColor: COLORS.primary,
        }}
      />
      {/* </View> */}
      <Text style={{ ...FONTS.body2, marginTop: 24 }}>Krmanj Mo</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: SIZES.padding,
        }}
      >
        <Text style={{ ...FONTS.body3, marginRight: 8 }}>{text}</Text>
        <Octicons name="location" size={18} color={COLORS.secondary} />
      </View>
      <ProfileContact />
      <ProfileFeatures />
      <ProfileSettings />
    </View>
  );
};

export default ProfileInfo;
