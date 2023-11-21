import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { expensesApi } from "./apis/expensesApi";
export const store = configureStore({
  reducer: {
    [expensesApi.reducerPath]: expensesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(expensesApi.middleware);
  },
});

setupListeners(store.dispatch);

export const {
  useFetchExpensesQuery,
  useAddExpenseMutation,
  useRemoveExpenseMutation,
} = expensesApi;
