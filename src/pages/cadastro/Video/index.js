import React from 'react';
import Formulario from './Formulario';
import { Link } from 'react-router-dom';

function CadastroVideo(){
    return (
        <Formulario>
            <h1>Cadastro de Vídeos</h1>
            <Link to={'/'}>
                Home
            </Link>
        </Formulario>
    )
}

export default CadastroVideo;