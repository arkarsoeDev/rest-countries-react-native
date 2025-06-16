import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { Raleway_700Bold, useFonts } from "@expo-google-fonts/raleway";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function OnBoardingScreen() {
  const [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <LinearGradient
      colors={["#E5F2FF", "#F0F9FF"]}
      className="flex-1 justify-center h-full items-center"
    >
      <View className="w-full items-center px-6 space-y-6">
        <View className="items-center">
          <Image
            source={require("@/assets/images/globe-icon.png")} // Replace with your globe/logo asset
            className="w-32 h-32 mb-4"
            resizeMode="contain"
          />
        </View>

        <View className="relative items-center">
          <Text
            className="text-2xl text-gray-900 font-bold"
            style={{ fontFamily: "Raleway_700Bold" }}
          >
            Explore the World With
          </Text>
        </View>

        <View>
          <View className="flex items-center mb-4">
            <Text
              className="text-3xl text-blue-800 font-bold"
              style={{ fontFamily: "Raleway_700Bold" }}
            >
              Rest Countries
            </Text>
          </View>

          <View className="flex items-center mb-4">
            <Text
              className="text-gray-600 text-base text-center"
              style={{ fontFamily: "Nunito_400Regular" }}
            >
              Discover detailed information about every country
            </Text>
            <Text
              className="text-gray-600 text-base text-center"
              style={{ fontFamily: "Nunito_400Regular" }}
            >
              including flags, capitals, populations, and more
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => router.push("/countries")} // Update with your actual route
            className="bg-blue-600 px-8 py-4 rounded-full mt-6 shadow-lg"
            activeOpacity={0.8}
          >
            <Text
              className="text-white text-lg font-semibold text-center"
              style={{ fontFamily: "Nunito_700Bold" }}
            >
              Begin Exploration
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
