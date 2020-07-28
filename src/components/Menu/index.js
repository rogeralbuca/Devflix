import React from 'react';
import Logo from '../../assets/img/Logo.svg';
import './styles.css';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo DevFlix" />
      </a>
      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;