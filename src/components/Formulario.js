import React, { useState, Fragment } from "react";
import styled from '@emotion/styled';


const Form = styled.form`
  margin: 2rem 0;
`;


const Formulario = () => {

  const [datos, guardarDatos] = useState({
    ciudad: '',
    pais: ''
  });
  const { ciudad, pais } = datos;
 
  function handleStateForm(e){
    guardarDatos({
      
    })
  }

  return (
    <Fragment>
      <Form className="form-group-line">
        <div className="form-item-line">
          <input 
              type="text"
              id="ciudad"
              name="ciudad"
            />
          <label htmlFor="name">Ciudad</label>
        </div>
        <div className="form-item-line">
          <select 
              name="pais"
              id="pais"
            >
            <option value="">--- Selecciona un país ---</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
          </select>
          <label htmlFor="options">País:</label>
        </div>

      </Form>
    </Fragment>
  );
};

export default Formulario