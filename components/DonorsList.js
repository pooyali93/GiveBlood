import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native'

const DonorsList = () => {

  const renderItem = ( { item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        style={{
          flexDirection:'row',
          alignItem:'center',
          height:110,
          borderColor:'white',
          borderWidth:1,
          borderRadius:10
        }}
        >

      </TouchableOpacity>
    )
  }
  return (
    <View>
      <FlatList
      data={filteredDonors}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    />
    </View>
  )
}

export default DonorsList