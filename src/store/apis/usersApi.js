import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      fetchUsers: builder.query({
        query: () => ({
          url: "/users",
          method: "GET",
        }),
      }),
      addUser: builder.mutation({
        query: (user) => ({
          method: "POST",
          url: "/users",
          body: {
            username: user.username,
            password: user.password,
          },
        }),
      }),
    };
  },
});

export const { useAddUserMutation, useFetchUsersQuery } = usersApi;
export { usersApi };
