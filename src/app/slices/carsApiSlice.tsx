/* eslint-disable import/prefer-default-export */
import apiSlice from '../api/apiSlice';
import { Car } from '../../interface/car.interface';

const carsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCars: builder.query<Car[], { brand: string }>({
      query: ({ brand }) => ({
        url: `/cars?brand=${brand}`,
        method: 'GET',
      }),
      providesTags: [{ type: 'Cars', id: 'LIST' }],
    }),
  }),
});

export const { useGetCarsQuery } = carsApiSlice;
