import React from "react";
import { View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import ProfileInfo from "../components/ProfileInfo";
import PageContainer from "../components/PageContainer";
import {Feather } from "@expo/vector-icons";

const Profile = () => {
  const navigation = useNavigation();

  const handleEditProfile = () => {
    navigation.navigate("EditProfile");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        <View style={{ flex: 1, marginHorizontal: 12 }}>
          <Header
            iconLeft="chevron-left"
            iconRight="edit"
            iconPack={Feather }
            title="Profile"
            onEdit={handleEditProfile}
          />
          <ProfileInfo />
        </View>
      </PageContainer>
    </SafeAreaView>
  );
};

export default Profile;
