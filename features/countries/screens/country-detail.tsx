import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useGetCountryByName } from '../api/get-country-by-name';

interface CountryDetailScreenProps {
  name: string;
}

const CountryDetailScreen: React.FC<CountryDetailScreenProps> = ({ name }) => {
  const countryQuery = useGetCountryByName({ name });
  const router = useRouter();

  if (countryQuery.isLoading) return (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingText}>Loading country data...</Text>
    </View>
  );

  if (countryQuery.isError) return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>Error: {countryQuery.error.message}</Text>
    </View>
  );

  const country = countryQuery?.data?.data[0];
  if (!country) return (
    <View style={styles.notFoundContainer}>
      <Text style={styles.notFoundText}>Country not found</Text>
    </View>
  );

  const openMap = () => {
    Linking.openURL(country.maps.googleMaps);
  };

  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{country.name.common}</Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.contentHeader}>
          <Image
            source={{ uri: country.flags.png }}
            style={styles.flag}
            resizeMode="contain"
          />
          <Text style={styles.officialName}>{country.name.official}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Basic Information</Text>
          <View style={styles.infoRow}>
            <Icon name="place" size={20} color="#555" />
            <Text style={styles.infoText}>Region: {country.region} ({country.subregion})</Text>
          </View>
          {/* <View style={styles.infoRow}>
            <Icon name="location-city" size={20} color="#555" />
            <Text style={styles.infoText}>Capital: {country.capital.join(', ')}</Text>
          </View> */}
          <View style={styles.infoRow}>
            <Icon name="people" size={20} color="#555" />
            <Text style={styles.infoText}>Population: {country.population.toLocaleString()}</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name="map" size={20} color="#555" />
            <Text style={styles.infoText}>Area: {country.area.toLocaleString()} km²</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Geography</Text>
          <View style={styles.infoRow}>
            <Icon name="language" size={20} color="#555" />
            <Text style={styles.infoText}>Languages: {Object.values(country.languages).join(', ')}</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name="money" size={20} color="#555" />
            <Text style={styles.infoText}>Currency: {Object.values(country.currencies).map(c => `${c.name} (${c.symbol})`).join(', ')}</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name="schedule" size={20} color="#555" />
            <Text style={styles.infoText}>Timezones: {country.timezones.join(', ')}</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name="directions-car" size={20} color="#555" />
            <Text style={styles.infoText}>Drives on: {country.car.side} side</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>International Codes</Text>
          <View style={styles.infoRow}>
            <Icon name="code" size={20} color="#555" />
            <Text style={styles.infoText}>ISO Codes: {country.cca2}, {country.cca3}</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name="call" size={20} color="#555" />
            <Text style={styles.infoText}>Calling code: +{country.idd.root}{country.idd.suffixes[0]}</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name="public" size={20} color="#555" />
            <Text style={styles.infoText}>Domain: {country.tld.join(', ')}</Text>
          </View>
        </View>

        <View style={styles.mapSection}>
          <Text style={styles.sectionTitle}>Location</Text>
          <Text style={styles.mapLink} onPress={openMap}>
            <Icon name="map" size={20} color="#1a73e8" /> Open in Google Maps
          </Text>
        </View>

        {country.coatOfArms.png && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Coat of Arms</Text>
            <Image
              source={{ uri: country.coatOfArms.png }}
              style={styles.coatOfArms}
              resizeMode="contain"
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    elevation: 2,
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  contentHeader: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  loadingText: {
    fontSize: 18,
    color: '#555',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: '#d32f2f',
    textAlign: 'center',
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  notFoundText: {
    fontSize: 18,
    color: '#555',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  flag: {
    width: '100%',
    height: 150,
    marginBottom: 15,
    borderRadius: 4,
  },
  officialName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  commonName: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  section: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 4,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 5,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    marginLeft: 10,
    flexShrink: 1,
  },
  mapSection: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 4,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  mapLink: {
    color: '#1a73e8',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  coatOfArms: {
    width: '100%',
    height: 150,
    marginTop: 10,
  },
});

export default CountryDetailScreen;
