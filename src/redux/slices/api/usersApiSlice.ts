import { apiSlice } from "./apiSlice";

const USERS_URL = "/api/user";

const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    auth: builder.mutation({
      query: () => ({
        url: `${USERS_URL}`,
        method: "GET",
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    update: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/update`,
        method: "PATCH",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useAuthMutation,
  useLoginMutation,
  useRegisterMutation,
  useUpdateMutation,
  useLogoutMutation,
} = usersApiSlice;
