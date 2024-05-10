import "Styles/index.less";
import Router from "Components/Router";
import { createRoot } from "react-dom/client";
import ContextProvider from "Components/ContextProvider";

const appRoot = (
	<ContextProvider>
		<div className="app-window">
			<Router />
		</div>
	</ContextProvider>
);

createRoot(document.getElementById("root")!).render(appRoot);
