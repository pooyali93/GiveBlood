import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import PageContainer from "../components/PageContainer";
import Card from "../components/Card";
import { Feather } from "@expo/vector-icons";
import { donationRequests } from "../constants/data";

const DonationRequest = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0)"}}>
      <PageContainer>
        <View
          style={{ backgroundColor: "rgba(0, 0, 0, 0)", marginHorizontal: 12 }}
        >
          <Header
            iconLeft="chevron-left"
            iconRight="circle"
            iconPack={Feather}
            title="Request Blood"
          />
        </View>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            {donationRequests.map((donationRequest, index) => (
              <Card
                key={index}
                name={donationRequest.name}
                location={donationRequest.location}
                postedDate={donationRequest.postedDate}
                bloodType={donationRequest.bloodType}
                onPress={()=> console.log("123")}
              />
            ))}
          </View>
        </ScrollView>
      </PageContainer>
    </SafeAreaView>
  );
};

export default DonationRequest;
