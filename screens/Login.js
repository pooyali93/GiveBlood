import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import React from "react";
import PageContainer from "../components/PageContainer";
import { COLORS, images, FONTS, SIZES } from "../constants";
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import Input from "../components/Input";
import Button from "../components/Button";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        <View
          style={{
            flex: 1,
            marginHorizontal: 22,
            alignItems: "center",
          }}
        >
          <Image
            source={images.logo}
            resizeMode="contain"
            style={{
              tintColor: COLORS.primary,
              marginVertical: 28,
            }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ ...FONTS.h1, color: COLORS.primary, marginHorizontal: 8 }}>خۆت تۆمار بکە</Text>
          </View>

          <View style={{ marginVertical: 10 }}>
            <Input
              icon="phone"
              iconPack={MaterialIcons}
              id="tel"
              placeholder="ژمارەی مۆبایل "
              keyboardType="numeric" />
          </View>

          {/* <Input
            icon="lock"
            iconPack={MaterialIcons}
            id="password"
            autoCapitalize="none"
            placeholder="ژمارەی نهێنیی"
            secureTextEntry /> */}

          <Button
            title="داوای کۆدی سەلماندن بکە"
            onPress={() => navigation.navigate("Register")}
            filled
            style={{
              width: "100%",
            }}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}>
               <Image source={images.google} resizeMode="contain" style={{ marginVertical:14}} />
            {/* <Text style={{...FONTS.body3, color:COLORS.primary, marginVertical:12, }}>وشەی نهێنی لەبیر کردووە؟</Text> */}
          </TouchableOpacity>

          <View style={{
            flexDirection:'row'
          }}>

            <TouchableOpacity
            onPress={() => navigation.navigate("OTPValidation")}>
            <Image source={images.facebook} resizeMode="contain" />
          
            {/* <Text style={{...FONTS.body3, color:COLORS.primary}}>{" "}خۆت تۆمار بکە</Text> */}
          </TouchableOpacity>
          {/* <Text style={{...FONTS.body3, color:COLORS.black}}>ئەکاونتت نییە؟</Text> */}
          </View>

        </View>
      </PageContainer>
    </SafeAreaView>
  );
};

export default Login;
