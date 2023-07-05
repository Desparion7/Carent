import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

let apiUrl;

if (import.meta.env.MODE === 'development') {
  apiUrl = 'http://localhost:3000';
} else {
  apiUrl = 'https://tame-tank-top-ox.cyclic.app';
}

const baseQuery = fetchBaseQuery({
  baseUrl: apiUrl,
});

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['Cars', 'Car'],
  endpoints: () => ({}),
});
export default apiSlice;
