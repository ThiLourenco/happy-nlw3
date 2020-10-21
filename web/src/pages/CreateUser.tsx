import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, } from 'react-router-dom';

import PageLogin from "../components/PageLogin";
import '../styles/pages/createuser.css';


export default function CreateUser() {

	return (
		
	<div id="singup">
		<PageLogin />
		
		<aside>	
			<form className="create-login" method="POST">
				<fieldset>
					<legend>Cadastrar Usuário</legend>
					<div className="input-block">
						<label htmlFor="name">Nome</label>
						<input id="name"/>	
					</div>

					<div className="input-block">
						<label htmlFor="email">E-mail</label>
						<input id="name"/>	
					</div>

					<div className="input-block">
						<label htmlFor="password">Senha</label>
						<input id="name" />
					</div>

				</fieldset>
				
				<button className="button-login" type="submit">
					Cadastrar
				</button>
			</form>
			
			<Link to="/singin" className="back-home">
					<FiArrowLeft size={26} color="#15C3D6"  />
			</Link>
			
		</aside>
	</div>
	);
}