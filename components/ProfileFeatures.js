import { View, Text } from 'react-native'
import { FONTS } from '../constants';


const ProfileFeatures = () => {
  return (
    <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 22,
            width:'95%'
        }}
    >
        <View
            style={{
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Text style={{ ...FONTS.h1 }}>A+</Text>
            <Text style={{ ...FONTS.body2 }}>جۆری خوێن</Text>
        </View>
        <View
            style={{
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Text style={{ ...FONTS.h1 }}>05</Text>
            <Text style={{ ...FONTS.body2 }}>بەخشین</Text>
        </View>
        <View
            style={{
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Text style={{ ...FONTS.h1 }}>0</Text>
            <Text style={{ ...FONTS.body2 }}>داواکراو</Text>
        </View>
    </View>
)
}

export default ProfileFeatures