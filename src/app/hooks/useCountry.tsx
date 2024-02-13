import useSWR from 'swr';
import { CountryApiResponse, UseCountriesReturn } from './useCountry.types';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

/**
 * Custom React hook to fetch a list of countries and return the result along with loading and error state.
 *
 * @return {UseCountriesReturn} Object containing the list of countries, loading state, and error state
 */

export const useCountries = (): UseCountriesReturn => {
  const { data, error } = useSWR(
    'https://api-paises.pages.dev/paises.json',
    fetcher
  );

  const countries = data
    ? (Object.values(data) as CountryApiResponse[]).map((country) => ({
        nome: country.pais,
        bandeira: country.img,
        ddi: country.ddi
      }))
    : [];

  return {
    countries,
    isLoading: !error && !data,
    isError: error
  };
};
