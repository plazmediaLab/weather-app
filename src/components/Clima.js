import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';



const Small = styled.small`
  color: var(--disabled-color-t);
`;
const DivGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-gap: 2rem;

  > * > * {
    margin: 0;
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
  font-weight: 600!important;
  vertical-align: top;
`;



const Clima = ( { resultado } ) => {


  const { name, main, sys } = resultado;

  if (!main) return null;

  const centigrados = (k) => {
    let c = parseInt(k, 10) - 273.15;
    return c.toFixed(2);
  };
  
  const time = (time) => {
    let hours = new Date(time*1000);
    hours = hours.getHours().toString().padStart(2, 0);
    let minutes = new Date(time*1000);
    minutes = minutes.getMinutes().toString().padStart(2, 0);

    return `${hours}:${minutes}`;
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
        <DivGrid>
          <div>
            <p><GradosC>Max:</GradosC> <b>{centigrados(main.temp_max)}</b><GradosC className="af-s">ºc</GradosC></p>
            <p><GradosC>Min:</GradosC> <b>{centigrados(main.temp_min)}</b><GradosC className="af-s">ºc</GradosC></p>
          </div>
          <H1 className="txt-a-r">
            {centigrados(main.temp)}<GradosC className="af-s">ºc</GradosC> <Itag className="a-thermometer-2 af-s"></Itag>
          </H1>
        </DivGrid>
        <hr />
        <DivGrid>
          <div>
            <p><i className="a-sunrise txt-blue"></i> {time(sys.sunrise)}</p>
            <p><i className="a-sunset txt-orange"></i> {time(sys.sunset)}</p>
          </div>
          <div className="txt-a-r">
            <p className="af-x2"><span className="block af-s">Humedad:</span> {main.humidity}% <i className="a-cloudy af-l txt-secondary"></i></p>
          </div>
        </DivGrid>
      </div>
      <div className="card-footer bg-1 txt-a-c">
        <Small>consulted on www.openweathermap.org</Small>
      </div>
    </div>
  );
};


Clima.propTypes = {
  resultado: PropTypes.object.isRequired,
}


export default Clima