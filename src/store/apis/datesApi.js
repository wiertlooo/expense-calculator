import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const datesApi = createApi({
  reducerPath: "dates",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      fetchDates: builder.query({
        providesTags: (result, error) => {
          const tags = result.map((date) => {
            return { type: "Date", id: date.id };
          });
          tags.push({ type: "Dates" });
          return tags;
        },
        query: () => ({
          url: "/dates",
          method: "GET",
        }),
      }),
      addDate: builder.mutation({
        invalidatesTags: (result, error, expense) => {
          return [{ type: "Dates" }];
        },
        query: (date) => ({
          method: "POST",
          url: "/dates",
          body: {
            id: date.id,
            date: date.date,
          },
        }),
      }),
      removeDate: builder.mutation({
        invalidatesTags: (result, error, date) => {
          return [{ type: "Date", id: date.id }];
        },
        query: (date) => ({
          url: `/expenses/${date.id}`,
          method: "DELETE",
        }),
      }),
    };
  },
});

export const { useFetchDatsesQuery, useAddDateMutation } = datesApi;
export { datesApi };
