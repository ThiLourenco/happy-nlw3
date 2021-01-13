import React from "react";
import { Link } from "react-router-dom";

import ImgSuccess from '../../images/success.svg';
import './orphanage-success.css';

function OrphanageSuccess() {
  return (
    <div id="main">
      <div className="success">
        <main >
          <h1>Ebaaa !</h1>
          <span>
          O cadastro deu certo e foi enviado ao administrador para ser aprovado. <br />
              Agora é só esperar :)
          </span> 
        </main>

        <img src={ImgSuccess} alt="Success"></img>
      
        <Link to="/app" className="back-To-Map">
        <span>Voltar para o mapa</span>
        </Link>
      </div>
    </div>
    
  );
}

export default OrphanageSuccess;