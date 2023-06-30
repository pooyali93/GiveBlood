import { View, Text, SafeAreaView, TouchableOpacity,Image } from "react-native";
import PageContainer from "../components/PageContainer";
import OTPTextInput from 'react-native-otp-textinput';
import { COLORS, images, FONTS } from "../constants";
import Button from "../components/Button";



const OTPValidation = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        <View
          style={{
            flex: 1,
            marginHorizontal: 22,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
              source={images.otp}
              resizeMode="contain"
              style={{
                marginVertical: 22,
              }}
            />
          <View>
            <OTPTextInput
              textInputStyle={{
                backgroundColor: COLORS.lightWhite,
                borderColor: COLORS.lightWhite,
                borderWidth: 1,
                borderRadius: 5,
                borderBottomWidth: 1
              }}
              inputCount={4}
              tintColor={COLORS.primary}
            />
          </View>

          <Button
            title="سەلماندن"
            onPress={() => navigation.navigate("SuccessValidation")}
            filled
            style={{
              width: "100%",
              marginVertical:22
            }}
          />

            <TouchableOpacity
              style={{ marginVertical: 10 }}
              onPress={() => navigation.navigate("Login")}>
              <Text style={{ ...FONTS.body2, color: COLORS.primary, textAlign: 'right' , marginRight:10}}>Resend Code</Text>
            </TouchableOpacity>
        </View>
      </PageContainer>
    </SafeAreaView>
  );
};

export default OTPValidation;
