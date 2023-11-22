import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { expensesApi } from "./apis/expensesApi";
import { datesApi } from "./apis/datesApi";
export const store = configureStore({
  reducer: {
    [expensesApi.reducerPath]: expensesApi.reducer,
    [datesApi.reducerPath]: datesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(expensesApi.middleware)
      .concat(datesApi.middleware);
  },
});

setupListeners(store.dispatch);

export const {
  useFetchExpensesQuery,
  useAddExpenseMutation,
  useRemoveExpenseMutation,
} = expensesApi;

export const { useFetchDatesQuery, useAddDateQuery, useRemoveDateMutation } =
  datesApi;
