import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import "../global.css"

export default function RootLayout() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen
          name="(routes)"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(home)"
          options={{ headerShown: false }}
        />
      </Stack>
    </QueryClientProvider >

  )
}
