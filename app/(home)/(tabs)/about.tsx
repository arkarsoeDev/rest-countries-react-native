import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AboutTab() {
  const { colors } = useTheme();

  const openAPIDocs = () => {
    Linking.openURL('https://restcountries.com/');
  };

  const openAPIGitlab = () => {
    Linking.openURL('https://gitlab.com/restcountries/restcountries');
  };

  const openSourceLink = () => {
    Linking.openURL('https://restcountries.com/');
  };

  return (
    <ScrollView className='container pt-5' contentContainerStyle={[{ backgroundColor: colors.background }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text }]}>About Rest Countries Explorer</Text>

        <View style={styles.section}>
          <Text style={[styles.description, { color: colors.text }]}>
            Rest Countries Explorer is your comprehensive guide to global information, providing detailed data about every country in the world.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            <MaterialIcons name="info" size={20} color={colors.primary} /> What You Can Do
          </Text>
          <View style={styles.featureItem}>
            <MaterialIcons name="check-circle" size={16} color={colors.primary} />
            <Text style={[styles.featureText, { color: colors.text }]}>
              Explore detailed country profiles including flags, capitals, and populations
            </Text>
          </View>
          <View style={styles.featureItem}>
            <MaterialIcons name="check-circle" size={16} color={colors.primary} />
            <Text style={[styles.featureText, { color: colors.text }]}>
              Discover geographical information like borders, regions, and subregions
            </Text>
          </View>
          <View style={styles.featureItem}>
            <MaterialIcons name="check-circle" size={16} color={colors.primary} />
            <Text style={[styles.featureText, { color: colors.text }]}>
              Learn about currencies, languages, and timezones
            </Text>
          </View>
          <View style={styles.featureItem}>
            <MaterialIcons name="check-circle" size={16} color={colors.primary} />
            <Text style={[styles.featureText, { color: colors.text }]}>
              View country locations on maps
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            <MaterialIcons name="code" size={20} color={colors.primary} /> Data Source
          </Text>
          <Text style={[styles.description, { color: colors.text }]}>
            All country data is sourced from the free REST Countries API.
          </Text>
          <Text
            style={[styles.link, { color: colors.primary }]}
            onPress={openSourceLink}
          >
            Visit REST Countries API
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            <MaterialIcons name="api" size={20} color={colors.primary} /> Data Provided By
          </Text>
          <Text style={[styles.description, { color: colors.text }]}>
            This app uses the free and open-source REST Countries API to provide accurate, up-to-date information about countries worldwide.
          </Text>

          <View style={styles.creditCard}>
            <Text style={[styles.apiName, { color: colors.text }]}>REST Countries API</Text>
            <Text style={[styles.apiDescription, { color: colors.text }]}>
              A simple but powerful API containing information about countries including flags, populations, currencies, languages and more.
            </Text>

            <View style={styles.apiLinks}>
              <TouchableOpacity
                style={[styles.apiLinkButton, { backgroundColor: colors.primary }]}
                onPress={openAPIDocs}
              >
                <Text style={styles.apiLinkText}>Official Website</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.apiLinkButton, { backgroundColor: colors.card }]}
                onPress={openAPIGitlab}
              >
                <MaterialIcons name="code" size={16} color={colors.text} />
                <Text style={[styles.apiLinkText, { color: colors.text }]}>Gitlab</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            <MaterialIcons name="developer-mode" size={20} color={colors.primary} /> Development
          </Text>
          <Text style={[styles.description, { color: colors.text }]}>
            This app was built with React Native and TypeScript, designed to provide a smooth mobile experience for exploring world countries.
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: colors.text }]}>
            © {new Date().getFullYear()} Rest Countries Explorer
          </Text>
          <Text style={[styles.versionText, { color: colors.text }]}>
            Version 1.0.0
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    maxWidth: 600,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 15,
    lineHeight: 22,
    flex: 1,
  },
  link: {
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 5,
  },
  footer: {
    marginTop: 30,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    marginBottom: 5,
  },
  versionText: {
    fontSize: 12,
    opacity: 0.8,
  },
  creditCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  apiName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  apiDescription: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  apiLinks: {
    flexDirection: 'row',
    gap: 12,
  },
  apiLinkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 6,
  },
  apiLinkText: {
    color: 'white',
    fontWeight: '500',
  },
});
