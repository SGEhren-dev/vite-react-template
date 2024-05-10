import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPathsPlugin from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		react(),
		tsConfigPathsPlugin()
	]
});
