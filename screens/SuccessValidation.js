import { View, Text , Image, SafeAreaView} from 'react-native'
import React from 'react'
import PageContainer from "../components/PageContainer";
import { images } from "../constants";
import Button from "../components/Button";

const SuccessValidation = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
      <View
          style={{
            flex: 1,
            marginHorizontal: 22,
            alignItems: "center",
            justifyContent:"center",
            
          }}
        >
          <Image
            source={images.success}
            resizeMode="contain"
            style={{
              marginBottom: 40
            }}
          />
           <Button
            title="کۆتایی"
            onPress={() => navigation.navigate("BottomTabNavigation")}
            filled
            style={{
              width: "100%",
            }}
          />
        </View>
      </PageContainer>
    </SafeAreaView>
  )
}

export default SuccessValidation