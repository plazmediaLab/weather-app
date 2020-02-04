import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import Header from './components/Header'
import Formulario from './components/Formulario'


const Col1 = styled.div`
    padding-right: 1rem;
`;
const Col2 = styled.div`
    padding-left: 1rem;
`;


function App() {
  return (
    <Fragment>
      <Header 
        titulo="Weather React APP"
      />
      <div className="bg-secondary vp-2">
        <div className="container">
          <div className="col-row">
            <Col1 className="col-6">
              <Formulario />
            </Col1>
            <Col2 className="col-6">
              2
            </Col2>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
