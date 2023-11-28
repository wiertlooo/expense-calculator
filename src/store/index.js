import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { expensesApi } from "./apis/expensesApi";
import { datesApi } from "./apis/datesApi";
import { usersApi } from "./apis/usersApi";
import authReducer, { loginUser, logoutUser } from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    [expensesApi.reducerPath]: expensesApi.reducer,
    [datesApi.reducerPath]: datesApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(expensesApi.middleware)
      .concat(datesApi.middleware)
      .concat(usersApi.middleware);
  },
});

setupListeners(store.dispatch);

export const { useAddUserMutation, useFetchUsersQuery } = usersApi;

export const {
  useFetchExpensesQuery,
  useAddExpenseMutation,
  useRemoveExpenseMutation,
} = expensesApi;

export const { useFetchDatesQuery, useAddDateQuery, useRemoveDateMutation } =
  datesApi;

export { loginUser, logoutUser };
