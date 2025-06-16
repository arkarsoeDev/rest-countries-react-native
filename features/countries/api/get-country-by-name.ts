import { QueryConfig } from "@/lib/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { Country } from "../types";

export const getCountryByName = ({ name }: { name: string }): Promise<AxiosResponse<Country[]>> => {
  return axios.get(`https://restcountries.com/v3.1/name/${name}`, {});
};

export const getCountryByNameQueryOptions = ({ name }: { name: string }) => {
  return queryOptions({
    queryKey: ["countries", name],
    queryFn: () => getCountryByName({ name }),
  });
};

type UseCountriesOptions = {
  name: string
  queryConfig?: QueryConfig<typeof getCountryByNameQueryOptions>;
};

export const useGetCountryByName = ({ queryConfig, name }: UseCountriesOptions) => {
  return useQuery({
    ...getCountryByNameQueryOptions({ name }),
    ...queryConfig,
  });
};
