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
        query: (user) => ({
          url: "/dates",
          method: "GET",
          params: {
            userId: user.id,
          },
        }),
      }),
      addDate: builder.mutation({
        invalidatesTags: (result, error, expense) => {
          return [{ type: "Dates" }];
        },
        query: ({ date, userId }) => ({
          method: "POST",
          url: "/dates",
          body: {
            userId,
            date,
          },
        }),
      }),
      removeDate: builder.mutation({
        invalidatesTags: (result, error, date) => {
          return [{ type: "Date", id: date.id }];
        },
        query: (date) => ({
          url: `/dates/${date.id}`,
          method: "DELETE",
        }),
      }),
    };
  },
});

export const { useFetchDatsesQuery, useAddDateMutation } = datesApi;
export { datesApi };
