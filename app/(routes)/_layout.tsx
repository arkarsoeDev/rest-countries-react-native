import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function RoutesLayout() {
  return (
    <SafeAreaView className='bg-black flex-1'>
      <Stack>
        <Stack.Screen
          name="onboarding"
          options={{ headerShown: false }}
        />
      </Stack>
    </SafeAreaView>
  )
}
