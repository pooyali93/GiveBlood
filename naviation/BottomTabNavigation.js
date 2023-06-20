import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../constants';
import { Ionicons , Fontisto, MaterialIcons, AntDesign} from '@expo/vector-icons';
import { DonationRequest, Home, Profile, Report, Search } from '../screens';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarHideOnKeyboard:true,
  tabBarStyle: { 
    position: 'absolute',
    bottom:0,
    right:0,
    left:0,
    elevation:0,
    height:80,
    background:COLORS.white,
   },

}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarIcon: ({focused})=>{
            return (
              <Ionicons name="ios-home-outline" 
              size={26} 
              color={focused ? COLORS.primary : COLORS.lightBlack} />

            )
          }
        }}
      />
      <Tab.Screen 
        name="Search" 
        component={Search}
        options={{
          tabBarIcon: ({focused})=>{
            return (
              <Ionicons name="search-outline" 
              size={26} 
              color={focused ? COLORS.primary : COLORS.lightBlack} />

            )
          }
        }}
      />
      <Tab.Screen 
        name="Report" 
        component={Report}
        options={{
          tabBarIcon: ({focused})=>{
            return (
              <View style={{
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:COLORS.primary,
                height:Platform.OS == "ios" ? 60 : 70,
                width:Platform.OS == "ios" ? 60 : 70,
                top:Platform.OS == "ios" ? -20 : -30,
                borderRadius:Platform.OS == "ios" ? 30 : 35,
                borderWidth:2,
                borderColor:COLORS.white
              }}>
                <Fontisto 
                  name="blood-drop" 
                  size={32} 
                  color={COLORS.white} 
                />

              </View>

            )
          }
        }}
      />
      <Tab.Screen 
        name="DonationRequest" 
        component={DonationRequest}
        options={{
          tabBarIcon: ({focused})=>{
            return (
              <MaterialIcons name="show-chart" 
              size={26} 
              color={focused ? COLORS.primary : COLORS.lightBlack} />

            )
          }
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          tabBarIcon: ({focused})=>{
            return (
              <AntDesign name="user" 
              size={26} 
              color={focused ? COLORS.primary : COLORS.lightBlack} />

            )
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation