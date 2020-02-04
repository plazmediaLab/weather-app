import React from 'react';
import styled from '@emotion/styled';

const SepHr = styled.div`
  background-color: var(--secondary-dark);
  padding: .5rem 0;
`;

const Formulario = () => {
  return (
    <form>
      <div className="form-item"> // TODO · Crear input anteractivo de formulario 02/03/2020 
        <label htmlFor="ciudad">Ciudad:</label>
        <input 
          className="input-100"
          type="text"
          name="ciudad"
          id="ciudad"
        />
      </div>
    </form>
  );
};

export default Formulario