import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://127.0.0.1:8000/api";

export const baseApi = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl,
		prepareHeaders: (headers) => {
			headers.set("Accept", "application/json");
			headers.set("Content-Type", "application/json");
		}
	}),
	endpoints: () => ({}),
	refetchOnReconnect: true
});
