import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.svg';
import './styles.css';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to={'/'}>
        <img className="Logo" src={Logo} alt="Logo DevFlix" />
      </Link>
      <Button as={Link} to={'/cadastro'} className="ButtonLink">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;