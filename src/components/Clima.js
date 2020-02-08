import React from 'react';
import styled from '@emotion/styled';


const Small = styled.small`
  color: var(--disabled-color-t);
`;
const DivGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;

  > * > * {
    margin: 0;
  }

  span{
    font-size: 1.9rem;
  }
`;
const H1 = styled.h1`
  font-size: 5rem;
  font-weight: 600;
  margin: 0;
`;
const Itag = styled.i`
  color: var(--acept-active);
`;
const GradosC = styled.span`
  color: var(--disabled-color-t);
  font-weight: 600;
  vertical-align: top;
`;



const Clima = ( { resultado } ) => {


  const { name, main, sys } = resultado;

  if (!main) return null;

  const centigrados = (k) => {
    let c = parseInt(k, 10) - 273.15;
    return c.toFixed(2);
  };

  return (
    <div className="card box-shadow-m">
      <div className="card-head bg-1">
        <DivGrid>
          <div>
            <Small>El clima en:</Small>
            <h3>{name}</h3>
          </div>
          <div>
            <Itag className="a-location_onplaceroom"></Itag>
            <span>{sys.country}</span>
          </div>
        </DivGrid>
      </div>
      <div className="card-body">
        <H1 className="txt-a-r">
          {centigrados(main.temp)}<GradosC className="af-s">ºc</GradosC> <Itag className="a-thermometer-2 af-s"></Itag>
        </H1>
        <p>MAX: {centigrados(main.temp_max)}<GradosC className="af-s">ºc</GradosC></p>
        <p>MIN: {centigrados(main.temp_min)}<GradosC className="af-s">ºc</GradosC></p>
      </div>
      <div className="card-footer bg-1 txt-a-c">
        <Small>consulted on www.openweathermap.org</Small>
      </div>
    </div>
  );
};

export default Clima