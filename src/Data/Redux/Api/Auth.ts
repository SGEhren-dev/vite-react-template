import { baseApi } from "Data/Redux/Api/BaseApi";
import { ILoginUserPayload, ILoginUserResponse, RequestMethod } from "Data/Interfaces";

export const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		loginUser: builder.query<ILoginUserResponse, ILoginUserPayload>({
			query: (payload) => ({
				url: "login",
				method: RequestMethod.POST,
				body: payload
			})
		}),
		logoutUser: builder.query<void, void>({
			query: () => "logout"
		})
	}),
	overrideExisting: false
});

export const { useLazyLoginUserQuery, useLazyLogoutUserQuery } = authApi;
