export interface ILoginUserResponse {
	email: string;
	name: string;
	token: string;
}

export interface ILoginUserPayload {
	email: string;
	password: string;
}
