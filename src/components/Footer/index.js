import React from 'react';
import Logo from '../../assets/img/Logo-D.svg';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={Logo} alt="Logo DevFlix" />
      </a>
      <p>
        <a href="https://www.linkedin.com/in/roger-albuquerque-69106721/" target="_blank" without rel="noopener noreferrer">
          Roger Albuquerque
        </a>
        &nbsp; &copy; 2020 &nbsp;
        <a href="https://www.alura.com.br/" target="_blank" without rel="noopener noreferrer">
          Imersão React Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
