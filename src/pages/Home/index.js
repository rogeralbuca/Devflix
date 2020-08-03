import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu'
import Banner from '../../components/Banner';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import './styles.css';
import Formacao from '../../components/Formacao';
import api from '../../services/api';

function Home() {

  const [ categorias, setCategorias ] = useState([]);

  const [ categoria, setCategoria ] = useState({});

  const [ video, setVideo ] = useState({url:'', titulo:''});

  useEffect(() => {
    async function fetchData() {
      const response = await api.devflix.get('/categorias.json');

      const resposta = response.data;

      setCategorias(resposta)

      const randonCategoria = resposta[Math.floor(Math.random()*resposta.length)]
      setCategoria(randonCategoria)

      const randomVideo = randonCategoria.videos[Math.floor(Math.random()*randonCategoria.videos.length)]
      setVideo(randomVideo)
    }
    fetchData();
  }, []);

  return (
    
    <div className="home">
      <Menu />

      <Banner
        videoTitle={categoria.titulo}
        url={video.url}
        videoDescription={video.titulo}
      />

      <Formacao/>

      { categorias.map( (categoria, index) => (
        <Carousel
          key={index}
          category={categoria}
        />
      ))}

      <Footer />
    </div>
  );
}

export default Home;
