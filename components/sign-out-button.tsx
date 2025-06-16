import { useAuth } from '@clerk/clerk-expo'
import { Text, TouchableOpacity } from 'react-native'

export function SignOutButton({ className }: { className?: string }) {
  const { signOut } = useAuth()

  return (
    <TouchableOpacity
      onPress={() => signOut()}
      className={`flex-row items-center justify-center ${className}`}
    >
      <Text className="text-red-600 font-medium">Sign Out</Text>
    </TouchableOpacity>
  )
}
