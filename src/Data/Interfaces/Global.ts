import { ReactNode } from "react";

export interface IWithChildren {
	children: ReactNode;
}

export enum RequestMethod {
	POST = "POST",
	GET = "GET",
	PATCH = "PATCH",
	DELETE = "DELETE"
}
