import { View, Text, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Profile() {
  const {
    fname,
    lname,
    mname,
    suffixName,
    userAge,
    userEmail,
    birthDay,
    birthMonth,
    birthYear,
    contact,
  } = useLocalSearchParams();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#FF6B00', paddingVertical: 30 }}>
      <View style={{ width: '100%', paddingHorizontal: 20, marginTop: 50, }}>
        <View style={{
          backgroundColor: '#1a1a1a',
          borderRadius: 20,
          padding: 20,
        }}>
          <Text style={{
            fontSize: 36,
            fontWeight: '700',
            color: '#FFB74D',
            textAlign: 'center',
            marginBottom: 25,
          }}>Profile</Text>

          <Text style={{
            color: '#FFB74D',
            fontSize: 20,
            marginTop: 10,
            backgroundColor: '#000',
            borderRadius: 12,
            width: '100%',
            padding: 10,
            shadowColor: '#000',
            shadowOpacity: 0.4,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            elevation: 4,
          }}>First Name: {fname}</Text>

          <Text style={{
            color: '#FFB74D',
            fontSize: 20,
            marginTop: 15,
            backgroundColor: '#000',
            borderRadius: 12,
            width: '100%',
            padding: 10,
            shadowColor: '#000',
            shadowOpacity: 0.4,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            elevation: 4,
          }}>Last Name: {lname}</Text>

          <Text style={{
            color: '#FFB74D',
            fontSize: 20,
            marginTop: 15,
            backgroundColor: '#000',
            borderRadius: 12,
            width: '100%',
            padding: 10,
            shadowColor: '#000',
            shadowOpacity: 0.4,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            elevation: 4,
          }}>Middle Name: {mname}</Text>


          <Text style={{
            color: '#FFB74D',
            fontSize: 20,
            marginTop: 15,
            backgroundColor: '#000',
            borderRadius: 12,
            width: '100%',
            padding: 10,
            shadowColor: '#000',
            shadowOpacity: 0.4,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            elevation: 4,
          }}>Email: {userEmail}</Text>

          <Text style={{
            color: '#FFB74D',
            fontSize: 20,
            marginTop: 15,
            backgroundColor: '#000',
            borderRadius: 12,
            width: '100%',
            padding: 10,
            shadowColor: '#000',
            shadowOpacity: 0.4,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            elevation: 4,
          }}>Suffix: {suffixName}</Text>

          <Text style={{
            color: '#FFB74D',
            fontSize: 20,
            marginTop: 15,
            backgroundColor: '#000',
            borderRadius: 12,
            width: '100%',
            padding: 10,
            shadowColor: '#000',
            shadowOpacity: 0.4,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            elevation: 4,
          }}>Age: {userAge}</Text>


          <Text style={{
            color: '#FFB74D',
            fontSize: 20,
            marginTop: 15,
            backgroundColor: '#000',
            borderRadius: 12,
            width: '100%',
            padding: 10,
            shadowColor: '#000',
            shadowOpacity: 0.4,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            elevation: 4,
          }}>Contact Number: {contact}</Text>

          <Text style={{
            color: '#FFB74D',
            fontSize: 20,
            marginTop: 15,
            backgroundColor: '#000',
            borderRadius: 12,
            width: '100%',
            padding: 10,
            shadowColor: '#000',
            shadowOpacity: 0.4,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            elevation: 4,
          }}>Birthday: {birthDay}/{birthMonth}/{birthYear}</Text>

        </View>
      </View>
    </ScrollView>
  );
}