import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const datesApi = createApi({
  reducerPath: "dates",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      fetchDates: builder.query({
        // providesTags: (result, error, expense) => {
        //   const tags = result.map((expense) => {
        //     return { type: "Expense", id: expense.id };
        //   });
        //   tags.push({ type: "Expenses" });
        //   return tags;
        // },
        query: () => ({
          url: "/dates",
          method: "GET",
        }),
      }),
      addDate: builder.mutation({
        // invalidatesTags: (result, error, expense) => {
        //   return [{ type: "Expenses" }];
        // },
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
        // invalidatesTags: (result, error, expense) => {
        //   return [{ type: "Expense", id: expense.id }];
        // },
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
