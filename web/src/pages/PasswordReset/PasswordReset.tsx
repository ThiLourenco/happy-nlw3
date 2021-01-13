import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './passwordreset.css';

import PageLogin from "../../components/PageLogin/PageLogin";



export default function PasswordReset() {

	return (
		
	<div id="pass-reset">
		<PageLogin />
		
		<aside>	
			<form className="passwd-login" method="POST">
				<fieldset>
				<legend>Redefinição de senha</legend>
        	<span>
						Escolha uma nova senha para você acessar o dashboard do Happy
					</span>       

					<div className="input-block">
					<label htmlFor="password">Nova senha</label>
					<input id="name" />
				</div>

				<div className="input-block">
					<label htmlFor="password">Repetir senha</label>
					<input id="name" />
				</div>
					
				</fieldset>
				
				<button className="button-login" type="submit">
					Entrar
				</button>
			</form>
			
			<Link to="/recover-password" className="back-home">
					<FiArrowLeft size={26} color="#15C3D6"  />
			</Link>
			
		</aside>
	</div>
	);
}