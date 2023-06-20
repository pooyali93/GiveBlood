import { View, Text , TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../constants";

const Buttons = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width:'100%'

      }}
    >
      <TouchableOpacity
        onPress={() => console.log("Call Me")}
        style={{
          backgroundColor: COLORS.navy,
          width: 175,
          height: 50,
          borderRadius: 5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name="call-outline" size={24} style={{ marginRight: 10, color: COLORS.white }} />
        <Text
          style={{
            ...FONTS.body3,
            color: COLORS.white,
            marginRight: 12,
          }}
        >
          پەیوەندی بکە
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => console.log("Share Me")}
        style={{
          backgroundColor: COLORS.primary,
          width: 175,
          height: 50,
          borderRadius: 5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name="share-outline" size={24} style={{ marginRight: 10, color: COLORS.white }} />
        <Text
          style={{
            ...FONTS.body3,
            color: COLORS.white,
            marginRight: 12,
          }}
        >
          بینێرە
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
