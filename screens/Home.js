import { View, SafeAreaView, ScrollView } from "react-native";
import { useState } from "react";
import Header from "../components/Header";
import PageContainer from "../components/PageContainer";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../constants";
import SearchBar from "../components/SearchBar";
import BloodtypeAction from "../UI/BloodtypeAction";
import Card from "../components/Card";
import { donors } from "../constants/data";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBloodTypes, setSelectedBloodTypes] = useState([]);

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };

  const handleBloodTypeSelect = (bloodType) => {
    setSelectedBloodTypes((prevSelectedBloodTypes) => {
      const isSelected = prevSelectedBloodTypes.includes(bloodType);
      let updatedBloodTypes;
  
      if (isSelected) {
        updatedBloodTypes = prevSelectedBloodTypes.filter((type) => type !== bloodType);
      } else {
        updatedBloodTypes = [...prevSelectedBloodTypes, bloodType];
      }
  
      return updatedBloodTypes;
    });
    setSearchQuery(""); // Reset the search query
  };
  
  const filteredDonors = donors.filter((donor) => {
    // Filter by name
    const nameMatch = donor.name.toLowerCase().includes(searchQuery.toLowerCase());
    // Filter by blood type
    const bloodTypeMatch = selectedBloodTypes.length === 0 || selectedBloodTypes.includes(donor.bloodType);

    return nameMatch && bloodTypeMatch;
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <PageContainer>
        <View
          style={{
            marginTop: 12,
          }}
        >
          <Header iconPack={Feather} title="Home" />
          <View
            style={{
              marginTop: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SearchBar onSearchQueryChange={handleSearchQueryChange} />
          </View>
          <View
            style={{
              marginTop: 20,
              backgroundColor: COLORS.white,
            }}
          >
            <BloodtypeAction
              selectedBloodTypes={selectedBloodTypes}
              onBloodTypeSelect={handleBloodTypeSelect}
            />
          </View>
        </View>
        <View
            style={{
              flex:1,
              backgroundColor: COLORS.white,
              
            }}
          >
        <ScrollView style={{ flex: 1 }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.white,
              paddingVertical:12,
            }}
          >
            {filteredDonors.map((donor, index) => (
              <Card
                key={index}
                image={donor.image}
                name={donor.name}
                location={donor.location}
                postedDate={donor.postedDate}
                bloodType={donor.bloodType}
                onPress={() => console.log("123")}
              />
            ))}
          </View>
        </ScrollView>
        </View>
      </PageContainer>
    </SafeAreaView>
  );
};

export default Home;
