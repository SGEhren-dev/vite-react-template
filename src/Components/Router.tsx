import { memo } from "react";
import Login from "Components/Auth/Login";
import { Route, Outlet, Routes } from "react-router-dom";

/**
 * Default router for the application.
 */
export default memo(function AppRouter() {
	const mainContent = (
		<div className="app-window">
			<Outlet />
		</div>
	);

	return (
		<Routes>
			<Route path="/login" element={ <Login /> } />
			<Route path="/" element={ mainContent } />
		</Routes>
	);
});
