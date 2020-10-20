import React from 'react';

import logoLogin from '../images/logotipo.svg';

import '../styles/components/pagelogin.css';

export default function PageLogin() {
	return (
		<aside className="page-login">
        <img src={logoLogin} alt="Happy" />

        <div className="location">
					<strong>Cabo Frio</strong>
					<span>Rio de Janeiro</span>
        </div>
			</aside>
	);
}