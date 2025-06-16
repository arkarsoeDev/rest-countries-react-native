import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  return (
    <View
      className='bg-black'
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        flex: 1,
      }}>
      <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }} safeAreaInsets={{ bottom: 10 }}>
        <Tabs.Screen
          name="countries"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: 'About',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="exclamation" color={color} />,
          }}
        />
      </Tabs>
    </View >
  );
}
