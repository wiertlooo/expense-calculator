import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const expensesApi = createApi({
  reducerPath: "expenses",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      fetchExpenses: builder.query({
        providesTags: (result, error, date) => {
          const tags = result.map((expense) => {
            return { type: "Expense", id: expense.id };
          });
          tags.push({ type: "Expenses", id: date.id });
          return tags;
        },
        query: (date) => ({
          url: "/expenses",
          params: {
            dateId: date.id,
          },
          method: "GET",
        }),
      }),
      addExpense: builder.mutation({
        invalidatesTags: (result, error, date) => {
          return [{ type: "Expenses", id: date.id }];
        },
        query: ({ dateId, title, value }) => ({
          method: "POST",
          url: "/expenses",
          body: {
            dateId,
            title,
            value,
          },
        }),
      }),
      removeExpense: builder.mutation({
        invalidatesTags: (result, error, expense) => {
          return [{ type: "Expense", id: expense.id }];
        },
        query: (expense) => ({
          url: `/expenses/${expense.id}`,
          method: "DELETE",
        }),
      }),
    };
  },
});

export const { useFetchExpensesQuery, useAddExpenseMutation } = expensesApi;
export { expensesApi };
