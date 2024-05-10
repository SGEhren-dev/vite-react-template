import { FormEvent, memo } from "react";
import "Components/Auth/Login/Login.less";
import { useNavigate } from "react-router-dom";
import { useLazyLoginUserQuery } from "Data/Redux/Api/Auth";

interface ILoginForm extends HTMLFormElement {
	email: HTMLInputElement;
	password: HTMLInputElement;
}

export default memo(function Login() {
	const navigate = useNavigate();
	const [ loginUser ] = useLazyLoginUserQuery();
	const handleFormSubmit = (event: FormEvent<ILoginForm>) => {
		const { email, password } = event.currentTarget;

		loginUser({ email: email.value, password: password.value })
			.then(() => {
				navigate("/dashboard", { replace: true });
			});
	};

	return (
		<div className="login">
			<div className="login-left">
				<div className="login-header">
					Template Login
				</div>
				<form className="login-form" onSubmit={ handleFormSubmit }>
					<label>Email</label>
					<input name="email" required />
					<label>Password</label>
					<input name="password" required />
					<button type="submit">Login</button>
				</form>
			</div>
			<div className="login-right" />
		</div>
	);
});
