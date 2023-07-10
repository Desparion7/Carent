import apiSlice from '../api/apiSlice';
import { Car } from '../../interface/car.interface';

const carsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFilteredCars: builder.query<
      Car[],
      { brand: string; startDate?: string; endDate?: string }
    >({
      query: ({ brand, startDate, endDate }) => ({
        url: `/cars?brand=${brand}&startDate=${startDate}&endDate=${endDate}`,
        method: 'GET',
      }),
      providesTags: [{ type: 'Cars', id: 'LIST' }],
    }),
    getCar: builder.query<Car, { name: string }>({
      query: ({ name }) => ({
        url: `/cars/${name}`,
        method: 'GET',
      }),
      providesTags: [{ type: 'Car', id: 'LIST' }],
    }),
  }),
});

export const { useGetFilteredCarsQuery, useGetCarQuery } = carsApiSlice;
