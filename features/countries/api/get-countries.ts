import { QueryConfig } from "@/lib/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { Country } from "../types";

export const getCountries = (): Promise<AxiosResponse<Country[]>> => {
  return axios.get(`https://restcountries.com/v3.1/all?fields=name,capital,population,flags,cca2,region`, {
    params: {
    },
  });
};

export const getCountriesQueryOptions = () => {
  return queryOptions({
    queryKey: ["countries"],
    queryFn: () => getCountries(),
  });
};

type UseCountriesOptions = {
  page?: number;
  queryConfig?: QueryConfig<typeof getCountriesQueryOptions>;
};

export const useGetCountries = ({ queryConfig }: UseCountriesOptions = {}) => {
  return useQuery({
    ...getCountriesQueryOptions(),
    ...queryConfig,
  });
};
