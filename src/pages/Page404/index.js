import React from 'react';
import Menu from '../../components/Menu';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

function Page404(){
    return (
        <>
            <Menu/>
                <Banner
                    videoTitle="Page Not Found"
                    url="https://www.youtube.com/watch?v=4Tb8dp5GYqI"
                    videoDescription="Erro 404 - Como resolver? Veja o passo a passo para configurar o React Router do zero e organize as rotas na sua aplicação."
                />
            <Footer/>
        </>
    )
}

export default Page404;