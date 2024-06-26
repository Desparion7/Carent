import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

let apiUrl;

if (import.meta.env.MODE === 'development') {
  apiUrl = 'https://carent-backend.onrender.com';
} else {
  apiUrl = 'https://carent-backend.onrender.com';
}

const baseQuery = fetchBaseQuery({
  baseUrl: apiUrl,
});

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['Cars', 'filteredCars', 'Car', 'Message'],
  endpoints: () => ({}),
});
export default apiSlice;
