import React, { useState } from 'react';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
import './index.css'
import CardDefault from '../../../components/CardDefault';

function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#2A7AE4',
  }
  
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function handleChange(event) {
    setValue(event.target.getAttribute('name'), event.target.value);
  }
  
  function setValue(key, value) {
    setValues({...values, [key]: value});
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCategorias([...categorias, values]);
    setValues(valoresIniciais);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={handleSubmit}>

        <div className="container">
        
          <FormField
            label="Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
            tag="input"
          />

          <FormField
            label="Descrição"
            type="text"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
            tag="input"
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
            tag="input"
            className="colorPicker"
          />

          <button>
            Cadastrar
          </button>

        </div>

      </form>

      {categorias.map((categoria, index) =>
        <CardDefault
          key={index}
          categoryTitle={categoria.nome}
          categoryColor={categoria.cor}
          categoryExtraLink={categoria.descricao}
        />
      )}

    </PageDefault>
  )
}

export default CadastroCategoria;
