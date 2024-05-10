export enum Environment {
	PRODUCTION = "production",
	DEVELOPMENT = "development"
}

export const isProduction = import.meta.env.PROD;

export const currentEnvironment = ((): Environment => {
	switch (import.meta.env.MODE) {
		case "production":
			return Environment.PRODUCTION;

		default:
			return Environment.DEVELOPMENT;
	}
})();
