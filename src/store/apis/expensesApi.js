import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const expensesApi = createApi({
  reducerPath: "expenses",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      fetchExpenses: builder.query({
        query: () => ({
          url: "/expenses",
          method: "GET",
        }),
      }),
    };
  },
});

export const { useFetchExpensesQuery } = expensesApi;
export { expensesApi };
