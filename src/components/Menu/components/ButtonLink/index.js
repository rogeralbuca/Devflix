import React from 'react';
import './styles.css';

function ButtonLink(props) {
  return (
    <a href={props.href} className={props.className}>
      {props.children}
    </a>
  );
}

export default ButtonLink;