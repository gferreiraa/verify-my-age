import useSWR from 'swr';
import { useCountries } from './useCountry';
import { renderHook, waitFor } from '@testing-library/react';

jest.mock('swr', () => jest.fn());

const mockSWRResponse = (data, error = null) => {
  useSWR.mockImplementation(() => ({
    data: data,
    error: error
  }));
};

describe('useCountries', () => {
  it('should return countries data when request is successful', async () => {
    const mockData = {
      BR: { pais: 'Brasil', img: 'url-da-bandeira-br', ddi: '+55' },
      US: { pais: 'Estados Unidos', img: 'url-da-bandeira-us', ddi: '+1' }
    };

    mockSWRResponse(mockData);

    const { result } = renderHook(() => useCountries());

    await waitFor(() => result.current.isLoading === false);

    expect(result.current.countries.length).toBeGreaterThan(0);
    expect(result.current.countries).toEqual([
      { nome: 'Brasil', bandeira: 'url-da-bandeira-br', ddi: '+55' },
      { nome: 'Estados Unidos', bandeira: 'url-da-bandeira-us', ddi: '+1' }
    ]);
    expect(result.current.isError).toBeFalsy();
  });
});
