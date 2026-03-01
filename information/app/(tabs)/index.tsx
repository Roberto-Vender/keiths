import { router } from 'expo-router';
import { Text, View, TextInput, Pressable, ScrollView, useWindowDimensions } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {
  const { width } = useWindowDimensions();

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [mname, setMname] = useState('');
  const [suffixName, setSuffixName] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [userAge, setUserAge] = useState('');
  const [contact, setContact] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const titleSize = width * 0.085;
  const inputPadding = width * 0.035;
  const spacing = width * 0.03;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#FF6B00' }}>
      <View style={{
        width: '92%',
        marginTop: width * 0.1,
        marginBottom: width * 0.1,
        alignSelf: 'center',
        backgroundColor: '#1a1a1a',
        borderRadius: 25,
        paddingVertical: width * 0.06,
        paddingHorizontal: width * 0.05,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 10,
      }}>
        <Text style={{ fontSize: titleSize, color: '#FFB74D', fontWeight: '700', textAlign: 'center', marginBottom: width * 0.03 }}>User Info</Text>

        <TextInput
          value={fname}
          onChangeText={setFname}
          placeholder="First Name"
          placeholderTextColor="#FFB74D"
          maxLength={15}
          style={{
            backgroundColor: '#333',
            borderRadius: 15,
            padding: inputPadding,
            width: '100%',
            marginVertical: spacing,
            color: '#FFB74D',
            fontWeight: '600',
          }}
        />

        <TextInput
          value={lname}
          onChangeText={setLname}
          placeholder="Last Name"
          placeholderTextColor="#FFB74D"
          maxLength={15}
          style={{
            backgroundColor: '#333',
            borderRadius: 15,
            padding: inputPadding,
            width: '100%',
            marginVertical: spacing,
            color: '#FFB74D',
            fontWeight: '600',
          }}
        />

        <TextInput
          value={mname}
          onChangeText={setMname}
          placeholder="Middle Name"
          placeholderTextColor="#FFB74D"
          maxLength={10}
          style={{
            backgroundColor: '#333',
            borderRadius: 15,
            padding: inputPadding,
            width: '100%',
            marginVertical: spacing,
            color: '#FFB74D',
            fontWeight: '600',
          }}
        />

        <TextInput
          value={userEmail}
          onChangeText={setUserEmail}
          placeholder="Email Address"
          placeholderTextColor="#FFB74D"
          maxLength={50}
          keyboardType="email-address"
          style={{
            backgroundColor: '#333',
            borderRadius: 15,
            padding: inputPadding,
            width: '100%',
            marginVertical: spacing,
            color: '#FFB74D',
            fontWeight: '600',
          }}
        />

        <TextInput
          value={suffixName}
          onChangeText={setSuffixName}
          placeholder="Suffix"
          placeholderTextColor="#FFB74D"
          maxLength={10}
          style={{
            backgroundColor: '#333',
            borderRadius: 15,
            padding: inputPadding,
            width: '100%',
            color: '#FFB74D',
            fontWeight: '600',
            marginTop: spacing,
          }}
        />

        <TextInput
          value={userAge}
          onChangeText={setUserAge}
          placeholder="Age"
          placeholderTextColor="#FFB74D"
          keyboardType="numeric"
          maxLength={2}
          style={{
            backgroundColor: '#333',
            borderRadius: 15,
            padding: inputPadding,
            width: '100%',
            color: '#FFB74D',
            fontWeight: '600',
            marginTop: width * 0.05,
            
          }}
        />

        <TextInput
          value={contact}
          onChangeText={setContact}
          placeholder="Contact Number"
          placeholderTextColor="#FFB74D"
          keyboardType="numeric"
          maxLength={11}
          style={{
            backgroundColor: '#333',
            borderRadius: 15,
            padding: inputPadding,
            width: '100%',
            color: '#FFB74D',
            fontWeight: '600',
            marginTop: width * 0.05,
          }}
        />

        <Text
          style={{
            backgroundColor: '#333',
            borderRadius: 12,
            padding: inputPadding,
            width: '100%',
            textAlign: 'center',
            color: '#FFB74D',
            fontWeight: '600',
            marginTop: width * 0.05,
          }}>DATE OF BIRTH</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: spacing  }}>
          
          <TextInput
            placeholder="DD"
            placeholderTextColor="#FFB74D"
            keyboardType="numeric"
            maxLength={2}
            value={birthDay}
            onChangeText={setBirthDay}
            style={{
              backgroundColor: '#333',
              borderRadius: 12,
              padding: inputPadding,
              width: width * 0.18,
              textAlign: 'center',
              color: '#FFB74D',
              fontWeight: '600',
            }}
          />

          <TextInput
            placeholder="MM"
            placeholderTextColor="#FFB74D"
            keyboardType="numeric"
            maxLength={2}
            value={birthMonth}
            onChangeText={setBirthMonth}
            style={{
              backgroundColor: '#333',
              borderRadius: 12,
              padding: inputPadding,
              width: width * 0.18,
              textAlign: 'center',
              color: '#FFB74D',
              fontWeight: '600',
            }}
          />

          <TextInput
            placeholder="YYYY"
            placeholderTextColor="#FFB74D"
            keyboardType="numeric"
            maxLength={4}
            value={birthYear}
            onChangeText={setBirthYear}
            style={{
              backgroundColor: '#333',
              borderRadius: 12,
              padding: inputPadding,
              width: width * 0.28,
              textAlign: 'center',
              color: '#FFB74D',
              fontWeight: '600',
            }}
          />
        </View>

        <Pressable
          onPress={() => router.push({
            pathname: '/info',
            params: {
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
            },
          })}
          style={{
            backgroundColor: '#FFB74D',
            width: width * 0.45,
            height: width * 0.14,
            marginTop: width * 0.03,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.4,
            shadowRadius: 6,
            elevation: 8,
          }}
        >
          <Text style={{ color: '#1a1a1a', fontSize: width * 0.05, fontWeight: '700' }}>SUBMIT</Text>
        </Pressable>

      </View>
    </ScrollView>
  );
}