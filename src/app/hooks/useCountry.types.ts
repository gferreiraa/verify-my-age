export type CountryApiResponse = {
  pais: string;
  img: string;
  ddi: string;
};

export type Country = {
  nome: string;
  bandeira: string;
  ddi: string;
};

export type UseCountriesReturn = {
  countries: Country[];
  isLoading: boolean;
  isError: string;
};
