import { FlatList } from "react-native";
import BloodTypeButton from "../components/BloodTypeButton";

const BloodtypeAction = ({ selectedBloodTypes, onBloodTypeSelect }) => {
  const bloodTypes = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

  const handleBloodTypeSelect = (bloodType) => {
    onBloodTypeSelect(bloodType);
  };

  return (
    <FlatList
      data={bloodTypes}
      keyExtractor={(item) => item}
      horizontal
      contentContainerStyle={{
        marginHorizontal: 4,
        paddingVertical: 22,
      }}
      renderItem={({ item }) => (
        <BloodTypeButton
          bloodType={item}
          onPress={() => handleBloodTypeSelect(item)}
          selected={selectedBloodTypes.includes(item)}
        />
      )}
      scrollEnabled={false}
    />
  );
};

export default BloodtypeAction;
