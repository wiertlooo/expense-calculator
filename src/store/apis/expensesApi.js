import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const expensesApi = createApi({
  reducerPath: "expenses",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      fetchExpenses: builder.query({
        providesTags: (result, error, expense) => {
          const tags = result.map((expense) => {
            return { type: "Expense", id: expense.id };
          });
          tags.push({ type: "Expenses" });
          return tags;
        },
        query: () => ({
          url: "/expenses",
          method: "GET",
        }),
      }),
      addExpense: builder.mutation({
        invalidatesTags: (result, error, expense) => {
          return [{ type: "Expenses" }];
        },
        query: (expense) => ({
          method: "POST",
          url: "/expenses",
          body: {
            id: expense.id,
            date: expense.date,
            title: expense.title,
            value: expense.value,
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
