import { View, TextInput } from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import { COLORS, SIZES } from '../constants'

const SearchBar = ({onSearchQueryChange}) => {

  return (
    <View style={{
      width:'90%',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:COLORS.white,
      height:55,
      paddingHorizontal:22,
      borderRadius:8
    }}>
      <Ionicons 
        name='ios-search-outline'
        size={24}
        color={COLORS.black}
      />

      <TextInput 
        style={{
          width:SIZES.width-114,
          height:'100%',
          marginHorizontal:12
        }}
        placeholder='Search'
        onChangeText={onSearchQueryChange}
      />
    </View>
  )
}

export default SearchBar;