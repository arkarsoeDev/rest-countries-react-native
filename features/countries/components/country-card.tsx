import { Country } from '@/features/countries/types'
import { router } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

interface CountryCardProps {
  country: Country
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  const handlePress = () => {
    // Navigate to the country detail screen with the country information
    // Replace 'CountryDetailScreen' with the actual route name for your country detail screen
    router.push({
      pathname: '/(home)/(tabs)/countries/[name]',
      params: { name: country.name.official },
    });
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        marginBottom: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <Image
        source={{ uri: country.flags.png }}
        style={{ width: 48, height: 48, marginRight: 16 }}
      />
      <View>
        <Text style={{ fontSize: 16, fontWeight: 'bold', wordWrap: 'break-word' }}>
          {country.name.official}
        </Text>
        <Text style={{ fontSize: 14, color: '#666' }}>
          {country.capital}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default CountryCard
