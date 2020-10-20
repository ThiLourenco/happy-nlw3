import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, } from 'react-router-dom';

import PageLogin from "../components/PageLogin";
import '../styles/pages/login.css';


export default function Login() {

	return (
		
	<div id="login">
		<PageLogin />
		
		<aside>	
			<form className="form-login" method="POST">
				<fieldset>
				<legend>Fazer login</legend>
				<div className="input-block">
					<label htmlFor="email">E-mail</label>
					<input id="name"/>	
				</div>

				<div className="input-block">
					<label htmlFor="password">Senha</label>
					<input id="name" />
				</div>

				<div className="remember-me">
					<input id="checkbox" type="checkbox" name="checked"></input>
					<label htmlFor="remember">Lembrar-me</label>

					<span>Esqueci a senha</span>
					</div>
					
				</fieldset>
				
				<button className="button-login" type="submit">
					Entrar
				</button>
			</form>
			
			<Link to="/" className="back-home">
					<FiArrowLeft size={26} color="#15C3D6"  />
			</Link>
			
		</aside>
	</div>
	);
}