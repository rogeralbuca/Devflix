import React from 'react';
import styled from 'styled-components';
import Menu from '../../../../components/Menu';
import Footer from '../../../../components/Footer';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 100px;
    padding-left: 5%;
    padding-right: 5%;
`;

function Formulario( { children } ){
    return (
        <>
            <Menu/>
            <Main>
                { children }
            </Main>
            <Footer/>
        </>
    )
}

export default Formulario;