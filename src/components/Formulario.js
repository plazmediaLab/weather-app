import React, { useState, Fragment } from "react";
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const Form = styled.form`
  margin: 2rem 0;
`;
const Hr = styled.hr`
  margin: 2.5rem auto;
  border-bottom: .1rem solid rgba(255, 255, 255, 0.3);
`;
const Button = styled.input`
  background-color: #fdd835!important;
  border: .1rem solid #fdd835!important;

  &:hover{
    background-color: #fddd4e!important;
    border: .1rem solid #fddd4e!important;
  }
  &:active{
    background-color: #fdce02!important;
    border: .1rem solid #fdce02!important;
  }
`;


const Formulario = ( {busqueda, guardarBusqueda, guardarConsulta} ) => {


  // Extraer los valores en variables
  const { ciudad, pais } = busqueda;
  const [error, guardarErrorLocal] = useState(false);
  /* ============================================================================= */

  let ciudadInput = React.createRef();

  // Elemento error
  const msnError = (eventError, message) => {
    return eventError ? <p className="msn msn-l-cancel"><i className="a-info-warning"></i>&nbsp; {message}</p> : null ;
  };
  // Guardar la información en el STATE
  const handleChangeForm = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    });
  }

  // SUBMIT del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar
    if (ciudad.trim() === '' || pais.trim() === '') {
      guardarErrorLocal(true);
      ciudadInput.current.focus();
      return
    }
    guardarErrorLocal(false)
    // Pasarlo al componente principal
    guardarConsulta(true);
  };



  return (
    <Fragment>
      <Form
        className="form-group-line"
        onSubmit={handleSubmit}
      >
        {msnError(error, 'Todos los campos son obligatorios')}
        {error ? <Hr/> : null}
        <div className="form-item-line">
          <input 
              type="text"
              ref={ciudadInput}
              id="ciudad"
              name="ciudad"
              value={ciudad}
              onChange={handleChangeForm}
            />
          <label htmlFor="ciudad">Ciudad</label>
        </div>
        <div className="form-item-line">
          <select 
              name="pais"
              id="pais"
              value={pais}
              onChange={handleChangeForm}
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
          <label htmlFor="pais">País:</label>
        </div>
        <div className="form-submit-line">
          <Button 
            type="submit"
            value="Consultar clima"
            className="btn btn-warning"
          />
        </div>
      </Form>
    </Fragment>
  );
};


Formulario.propTypes = {
  busqueda: PropTypes.object.isRequired,
  guardarBusqueda: PropTypes.func.isRequired,
  guardarConsulta: PropTypes.func.isRequired,
}


export default Formulario