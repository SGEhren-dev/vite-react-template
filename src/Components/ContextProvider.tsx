import { StrictMode, memo } from "react";
import { IWithChildren } from "Data/Interfaces";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { baseApi } from "Data/Redux/Api/BaseApi";

/**
 * Provides default contexts for the app by wrapping the children
 * in higher order providers.
 */
export default memo(function ContextProvider({ children }: IWithChildren) {
	return (
		<StrictMode>
			<ApiProvider api={ baseApi }>
				<BrowserRouter>
					{ children }
				</BrowserRouter>
			</ApiProvider>
		</StrictMode>
	);
});
