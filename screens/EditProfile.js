import { View, Text, SafeAreaView} from 'react-native';
import Header from '../components/Header';
import ProfileInfo from '../components/ProfileInfo';
import PageContainer from '../components/PageContainer';
import { COLORS, FONTS } from '../constants';


const EditProfile = () => {
  // Implement edit profile functionality

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
      <View style={{flex:1, marginHorizontal:22 }}>
        <Header title="Edit Profile" />
        <ProfileInfo />
      </View>
      </PageContainer>
    </SafeAreaView>
  );
};

export default EditProfile;
