import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      fetchUsers: builder.query({
        providesTags: (result, error) => {
          const tags = result.map((user) => {
            return { type: "User", id: user.id };
          });
          tags.push({ type: "Users" });
          return tags;
        },
        query: () => ({
          url: "/users",
          method: "GET",
        }),
      }),
      addUser: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return [{ type: "User", id: user.id }];
        },
        query: (user) => ({
          method: "POST",
          url: "/users",
          body: {
            username: user.username,
            password: user.password,
          },
        }),
      }),
      removeUser: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return [{ type: "Users" }];
        },
        query: (user) => ({
          method: "DELETE",
          url: `/users/${user.id}`,
        }),
      }),
    };
  },
});

export const { useAddUserMutation, useFetchUsersQuery, useRemoveUserMutation } =
  usersApi;
export { usersApi };
