import CountryDetailScreen from "@/features/countries/screens/country-detail";
import { useLocalSearchParams } from "expo-router";

export const CountryDetail = () => {
  const { name } = useLocalSearchParams();
  const modifiedName = decodeURIComponent(name as string);
  return (
    <CountryDetailScreen name={modifiedName} />
  );
}

export default CountryDetail
