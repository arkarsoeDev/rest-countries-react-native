import { onboardingSwiperData, onboardingSwiperDataType } from "@/constants/constants";
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";
import { Raleway_700Bold, useFonts } from "@expo-google-fonts/raleway";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Image, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

export default function WelcomeIntroScreen() {
  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const renderItem = ({ item }: { item: onboardingSwiperDataType }) => (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9", "#E8EEF9"]}
      className="flex-1 px-6"
    >
      <View className="mt-20">
        <Image
          source={item.image}
          className="self-center mb-10 w-4/5 h-72"
        />
        <Text
          className="text-2xl text-gray-900 mb-4 leading-8"
          style={{ fontFamily: "Raleway_700Bold" }}
        >
          {item.title}
        </Text>
        <View className="gap-3">
          <Text
            className="text-base text-gray-700 leading-6"
            style={{ fontFamily: "Nunito_400Regular" }}
          >
            {item.description}
          </Text>
          {item.sortDescription && (
            <Text
              className="text-base text-gray-700 leading-6"
              style={{ fontFamily: "Nunito_400Regular" }}
            >
              {item.sortDescription}
            </Text>
          )}
          {item.sortDescription2 && (
            <Text
              className="text-base text-gray-700 leading-6"
              style={{ fontFamily: "Nunito_400Regular" }}
            >
              {item.sortDescription2}
            </Text>
          )}
        </View>
      </View>
    </LinearGradient>
  );

  const renderButton = (text: string) => (
    <View className="bg-blue-500  w-full py-3 px-6 rounded-lg">
      <Text
        className="text-base text-white text-center"
        style={{ fontFamily: "Nunito_600SemiBold" }}
      >
        {text}
      </Text>
    </View>
  );

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={onboardingSwiperData}
      onDone={() => router.push("/(auth)/sign-in")}
      onSkip={() => router.push("/(auth)/sign-in")}
      renderNextButton={() => renderButton("Next")}
      renderDoneButton={() => renderButton("Done")}
      showSkipButton={false}
      dotStyle={{ backgroundColor: "#E5ECF9", width: 8, height: 8 }}
      activeDotStyle={{
        backgroundColor: "#3B82F6",
        width: 12,
        height: 8,
        borderRadius: 4
      }}
      bottomButton={true}
    />
  );
}
