import React, { useState, Fragment, useEffect } from 'react';
import styled from '@emotion/styled';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Clima from './components/Clima'
import Footer from './components/Footer'
import Error from './components/Error'


const Col1 = styled.div`
  padding-right: 1rem;

  @media (max-width: 589px) {
    padding-right: 0;
  }
`;
const Col2 = styled.div`
  padding-left: 1rem;

  @media (max-width: 589px) {
    padding-left: 0;
    padding-bottom: 1rem;
  }
`;


function App() {

    /*
  * =================================================================================
  *
  *	 STATE
  *
  * --------------------------------------------------------------------------------
  */
  // Valores del componente Formulario 
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });
  const [consulta,  guardarConsulta] = useState(false);
  const [resultado,  guardarResultado] = useState({});
  const [error,  guardarError] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {
      const appId = 'f0b9f8946b987885f61c36f55dc80ea6';
      const url =`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarResultado(resultado)
      if (resultado.cod === '404') {
        guardarError(true)
      }else{
        guardarError(false)
      }
    };
    if (consulta) {
      consultarAPI();
      guardarConsulta(false);
      busqueda.ciudad= ''
      
    }

  }, [ciudad, pais, consulta, busqueda])


  return (
    <Fragment>
      <Header 
        titulo="Weather React APP"
      />
      <div className="bg-secondary vp-2">
        <div className="container">
          <div className="col-row">
            <Col1 className="col-6">
              <Formulario 
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsulta={guardarConsulta}
              />
            </Col1>
            <Col2 className="col-6">
              {error ? 
                <Error message='No se encontro resultados para la busqueda'/> 
                :
                <Clima 
                  resultado={resultado}
                />}
            </Col2>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
