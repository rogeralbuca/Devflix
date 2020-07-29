import React from 'react';
import Logo from '../../assets/img/Logo-D.svg';
import { FooterBase } from './styles';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
        <img src={Logo} alt="Logo DevFlix" />
      </Link>
      <p>
        <a href="https://www.linkedin.com/in/roger-albuquerque-69106721/">
          Roger Albuquerque
        </a>
        &nbsp; &copy;2020 &nbsp;
        <a href="https://www.alura.com.br/">
          Imersão React Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
