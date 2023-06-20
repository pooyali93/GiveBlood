import { useState } from "react";
import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import PageContainer from "../components/PageContainer";
import { COLORS, images, FONTS } from "../constants";
import { MaterialIcons, Fontisto, FontAwesome5 } from '@expo/vector-icons';
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import { validationSchema } from '../utils/ValidationConstrains';

const Register = ({ navigation }) => {
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const handleFormSubmit = async () => {
    try {
      await validationSchema.validate(formValues, { abortEarly: false });
      // Validation successful, continue with form submission logic
      navigation.navigate('Home');
    } catch (error) {
      const errors = {};
      error.inner.forEach((err) => {
        errors[err.path] = err.message;
      });
      setFormErrors(errors);
    }
  };

  const genderOptions = ["Male", "Female"];
  
  const handleSelectGender = (value) => {
    setFormValues({ ...formValues, gender: value });
  };

  const bloodTypeOptions = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  
  const handleSelectBloodType = (value) => {
    setFormValues({ ...formValues, bloodtype: value });
  };
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        <ScrollView>
          <View
            style={{
              flex: 1,
              marginHorizontal: 12,
              alignItems: "center",
            }}
          >
            <Image
              source={images.logo}
              resizeMode="contain"
              style={{
                tintColor: COLORS.primary,
              }}
            />

            <View style={{ marginVertical: 10 }}>
              <Text style={{ textAlign: 'right', marginRight: 10, marginTop: 10 }}>ناو</Text>
              <Input
                icon="person"
                iconPack={MaterialIcons}
                id="name"
                placeholder="ناوی تەواوی خۆت بنووسە"
                value={formValues.name}
                onChangeText={(value) => setFormValues({ ...formValues, name: value })}
                errorText={formErrors.name}
              />

              <Text style={{ textAlign: 'right', marginRight: 10, marginTop: 10 }}>ژمارەی مۆبایل </Text>
              <Input
                icon="phone"
                iconPack={MaterialIcons}
                id="phone"
                placeholder="07..."
                keyboardType="numeric"
                value={formValues.phone}
                onChangeText={(value) => setFormValues({ ...formValues, tel: value })}
                errorText={formErrors.tel}
              />
              <Text style={{ textAlign: 'right', marginRight: 10, marginTop: 10 }}>ڕەگەز</Text>
              <Select
                icon="intersex"
                iconPack={Fontisto}
                options={genderOptions}
                value={formValues.gender}
                onSelect={handleSelectGender}
                errorText={formErrors.gender}
                placeholder="رەگەزی خۆت هەڵبژێرە"
              />

              <Text style={{ textAlign: 'right', marginRight: 10, marginTop: 10 }}>جۆری خوێن</Text>
              <Select
                icon="blood"
                iconPack={Fontisto}
                options={bloodTypeOptions}
                value={formValues.bloodtype}
                onSelect={handleSelectBloodType}
                errorText={formErrors.bloodtype}
                placeholder="جۆری خوێنەکەت هەڵبژێرە"
              />

              <Text style={{ textAlign: 'right', marginRight: 10, marginTop: 10 }}>شارەکەت</Text>
              <Input
                icon="location-on"
                iconPack={MaterialIcons}
                id="location"
                placeholder="ناوی شارەکەت بنووسە"
                value={formValues.location}
                onChangeText={(value) => setFormValues({ ...formValues, location: value })}
                errorText={formErrors.location}
              />

              <Text style={{ textAlign: 'right', marginRight: 10, marginTop: 10 }}>تەمەنت</Text>
              <Input
                icon="people-arrows"
                iconPack={FontAwesome5}
                id="age"
                placeholder="تەمەنت بنووسە"
                keyboardType="numeric"
                value={formValues.age}
                onChangeText={(value) => setFormValues({ ...formValues, age: value })}
                errorText={formErrors.age}
              />
            </View>

            <Button
              title="خۆتۆمارکردن"
              onPress={handleFormSubmit}
              filled
              style={{
                width: '100%',
              }}
            />

            <View style={{
              flexDirection: 'row',
              marginVertical: 12
            }}>

              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}>
                <Text style={{ ...FONTS.body3, color: COLORS.primary }}>ئەکاونتت هەیە؟ لێرە بچۆرە ژوورەوە</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </PageContainer>
    </SafeAreaView>
  );
};

export default Register;
