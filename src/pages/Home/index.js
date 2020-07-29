import React from 'react';
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import Banner from '../../components/Banner';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import './styles.css';

function Home() {
  return (
    <div className="home">
      <Menu />

      <Banner
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Neste vídeo, Vanessa Tonini e Mario Souto explicam isto para você falando sobre como esta ferramenta surgiu, para que ela serve, quais são suas aplicações e relação com outras ferramentas e como começar a trabalhar com ele."}
      />

      { dadosIniciais.categorias.map( (categoria, index) => (
        <Carousel
          key={index}
          ignoreFirstVideo
          category={categoria}
        />
      ))}

      <Footer />
    </div>
  );
}

export default Home;
