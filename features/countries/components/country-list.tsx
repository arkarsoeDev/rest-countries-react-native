import { useGetCountries } from '@/features/countries/api/get-countries';
import React, { useState } from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
import CountryCard from './country-card';

export const CountryList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data, isError } = useGetCountries();
  const countries = data?.data ?? [];

  const filteredCountries = countries.filter(country =>
    country.name.official.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  if (isError) {
    return <Text>Error fetching countries</Text>;
  }

  return (
    <View className=''>
      <View className='container' style={{ paddingTop: 16 }}>
        <Text className='text-3xl uppercase italic text-center font-bold mb-4'>Countries</Text>
        <TextInput
          style={{
            borderRadius: 8,
            height: 50,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5
          }}
          className='mb-4 bg-white border border-gray-300 p-4'
          placeholder="Search countries"
          onChangeText={handleSearch}
        />
      </View>
      <FlatList
        className='container'
        data={filteredCountries}
        renderItem={({ item }) => <CountryCard country={item} />}
        keyExtractor={(item) => item.cca2}
      />
    </View>
  );
}
