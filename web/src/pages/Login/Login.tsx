import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory, } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import PageLogin from "../../components/PageLogin/PageLogin";
import './login.css';


export default function Login() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const { signIn } = useAuth();
	const history = useHistory();

	function handlerGoBack() {
		history.goBack();
	}

	async function handleSignIn(event: React.MouseEvent<HTMLButtonElement>) {
		event.preventDefault();

		const button = event.currentTarget;

		button.setAttribute('disabled', 'disabled');

		if (email && password) {
			try {
				await signIn(email, password);
			} catch (error) {
				console.log('error', error);
			}
		} else {
			console.log('Email e senha não informados!');
		}
		button.attributes.removeNamedItem('disabled');
	}

	return (
		
	<div id="login">
		<PageLogin />
		
		<aside>	
			<form className="form-login">
				<fieldset>
					<legend>Fazer login</legend>
					<div className="input-block">
						<label htmlFor="email">E-mail</label>
						<input 
							id="email" 
							type="email"
							value={email}
							onChange={event => setEmail(event.target.value)}
							/>	
					</div>

					<div className="input-block">
						<label htmlFor="password">Senha</label>
						<input 
							type="password"
							id="password" 
							value={password}
							onChange={event => setPassword(event.target.value)}
							/>
					</div>

					<div className="remember-me">
						<input id="checkbox" type="checkbox" name="checked"></input>
						<label htmlFor="remember">Lembrar-me</label>
					
					</div>
					<div className="links">
							<Link to="/recover" className="forgot-password">
								Esqueci a senha
							</Link>

							<Link to="/singup" className="new-user">
								Cadastrar usuário
							</Link>
						</div>
				</fieldset>
				
				<button 
					disabled={false}
					onClick={handleSignIn}
					className="button-login" 
					type="submit"
					>Entrar</button>
			</form>
			
			<button type="button" className="back-home" onClick={handlerGoBack}>
					<FiArrowLeft size={26} color="#15C3D6"  />
			</button>
			
		</aside>
	</div>
	);
}