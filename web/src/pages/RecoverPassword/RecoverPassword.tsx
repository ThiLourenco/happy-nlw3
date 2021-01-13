import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './recoverpassword.css';

import PageLogin from "../../components/PageLogin/PageLogin";



export default function RecoverPassword() {

	return (
		
	<div id="recover-pass">
		<PageLogin />
		
		<aside>	
			<form className="recover" method="POST">
				<fieldset>
				<legend>Esqueci a senha</legend>
        	<span>
						Sua redefinição de senha será enviada para o e-mail cadastrado.
					</span>       

				<div className="input-block">
					<label htmlFor="email">E-mail</label>
					<input id="name"/>	
				</div>
					
				</fieldset>
				
				<button className="button-login" type="submit">
					Recuperar
				</button>
			</form>
			
			<Link to="/singin" className="back-home">
					<FiArrowLeft size={26} color="#15C3D6"  />
			</Link>
			
		</aside>
	</div>
	);
}