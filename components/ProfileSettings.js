import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons, Ionicons, AntDesign, Feather } from "@expo/vector-icons";

import { COLORS, FONTS } from "../constants";


const ProfileSettings = () => {
  return (
    <View
        style={{
            flexDirection: 'column',
        }}
    >
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 12,
            }}
            onPress={() => console.log('Pressed')}
        >
            <MaterialCommunityIcons
                name="calendar-clock-outline"
                size={24}
                color={COLORS.primary}
            />
            <Text
                style={{
                    ...FONTS.body3,
                    marginLeft: 24,
                }}
            >
                Available for Donate
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 12,
            }}
            onPress={() => console.log('Pressed')}
        >
            <Ionicons
                name="share-outline"
                size={24}
                color={COLORS.primary}
            />
            <Text
                style={{
                    ...FONTS.body3,
                    marginLeft: 24,
                }}
            >
                Invite a friend
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 12,
            }}
            onPress={() => console.log('Pressed')}
        >
            <Feather name="info" size={24} color={COLORS.primary} />
            <Text
                style={{
                    ...FONTS.body3,
                    marginLeft: 24,
                }}
            >
                Get help
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 12,
            }}
            onPress={() => console.log('Pressed')}
        >
            <AntDesign name="logout" size={24} color={COLORS.primary} />
            <Text
                style={{
                    ...FONTS.body3,
                    marginLeft: 24,
                }}
            >
                Logout
            </Text>
        </TouchableOpacity>
    </View>
)
}

export default ProfileSettings