import React, { useState, Fragment } from 'react';
import Select from 'react-select'
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
import './index.css'

function CadastroVideo() {

  const valoresIniciais = {
    nome: '',
    cor: '#ff8c2a',
    titulo: '',
    url:''
  }

  const options = [
    { value: 'Front End', label: 'Front End' },
    { value: 'Back End', label: 'Back End' },
    { value: 'Data Science', label: 'Data Science' }
  ]
  
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
      <h1>Cadastro de Vídeos: {values.nome}</h1>

      <form onSubmit={handleSubmit}>

        <Fragment>
          
          <label>Categoria</label>
          <Select
            className="basic-single"
            classNamePrefix="select"
            defaultValue={options[0]}
            isSearchable="true"
            name="categoria"
            options={options}
          />

          <Fragment  className="container">

            <FormField
              label="Cor"
              type="color"
              name="cor"
              value={values.cor}
              onChange={handleChange}
              tag="input"
              className="colorPicker"
            />

            <FormField
              label="Título  do vídeo"
              type="text"
              name="titulo"
              value={values.titulo}
              onChange={handleChange}
              tag="input"
              className="select"
            />

            <FormField
              label="Url do vídeo"
              type="text"
              name="url"
              value={values.url}
              onChange={handleChange}
              tag="input"
              className="select"
            />    

            <button>
              Cadastrar
            </button>
          </Fragment>

        </Fragment>

      </form>

      {categorias.map((categoria, index) =>
        <p>
          {`${categoria.nome} ${categoria.cor} ${categoria.titulo}`}
        </p>
      )}

    </PageDefault>
  )
}

export default CadastroVideo;
