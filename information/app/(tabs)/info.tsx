import { View, Text, ScrollView, useWindowDimensions } from 'react-native';
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

  const { width } = useWindowDimensions();

  const titleSize = width * 0.08;
  const textSize = width * 0.045;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#FF6B00', paddingVertical: width * 0.06 }}>
      <View style={{ width: '100%', paddingHorizontal: width * 0.05, marginTop: width * 0.12 }}>
        <View style={{
          backgroundColor: '#1a1a1a',
          borderRadius: 20,
          padding: width * 0.05,
        }}>
          <Text style={{
            fontSize: titleSize,
            fontWeight: '700',
            color: '#FFB74D',
            textAlign: 'center',
            marginBottom: width * 0.06,
          }}>Profile</Text>

          <Text style={{
            color: '#FFB74D',
            fontSize: textSize,
            marginTop: width * 0.03,
            backgroundColor: '#000',
            borderRadius: 12,
            width: '100%',
            padding: width * 0.03,
            shadowColor: '#000',
            shadowOpacity: 0.4,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            elevation: 4,
          }}>First Name: {fname}</Text>

          <Text style={{
            color: '#FFB74D',
            fontSize: textSize,
            marginTop: width * 0.04,
            backgroundColor: '#000',
            borderRadius: 12,
            width: '100%',
            padding: width * 0.03,
            shadowColor: '#000',
            shadowOpacity: 0.4,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            elevation: 4,
          }}>Last Name: {lname}</Text>

          <Text style={{
            color: '#FFB74D',
            fontSize: textSize,
            marginTop: width * 0.04,
            backgroundColor: '#000',
            borderRadius: 12,
            width: '100%',
            padding: width * 0.03,
            shadowColor: '#000',
            shadowOpacity: 0.4,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            elevation: 4,
          }}>Middle Name: {mname}</Text>

          <Text style={{
            color: '#FFB74D',
            fontSize: textSize,
            marginTop: width * 0.04,
            backgroundColor: '#000',
            borderRadius: 12,
            width: '100%',
            padding: width * 0.03,
            shadowColor: '#000',
            shadowOpacity: 0.4,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            elevation: 4,
          }}>Email: {userEmail}</Text>

          <Text style={{
            color: '#FFB74D',
            fontSize: textSize,
            marginTop: width * 0.04,
            backgroundColor: '#000',
            borderRadius: 12,
            width: '100%',
            padding: width * 0.03,
            shadowColor: '#000',
            shadowOpacity: 0.4,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            elevation: 4,
          }}>Suffix: {suffixName}</Text>

          <Text style={{
            color: '#FFB74D',
            fontSize: textSize,
            marginTop: width * 0.04,
            backgroundColor: '#000',
            borderRadius: 12,
            width: '100%',
            padding: width * 0.03,
            shadowColor: '#000',
            shadowOpacity: 0.4,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            elevation: 4,
          }}>Age: {userAge}</Text>

          <Text style={{
            color: '#FFB74D',
            fontSize: textSize,
            marginTop: width * 0.04,
            backgroundColor: '#000',
            borderRadius: 12,
            width: '100%',
            padding: width * 0.03,
            shadowColor: '#000',
            shadowOpacity: 0.4,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            elevation: 4,
          }}>Contact Number: {contact}</Text>

          <Text style={{
            color: '#FFB74D',
            fontSize: textSize,
            marginTop: width * 0.04,
            backgroundColor: '#000',
            borderRadius: 12,
            width: '100%',
            padding: width * 0.03,
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