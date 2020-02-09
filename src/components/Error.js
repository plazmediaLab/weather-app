import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';



const Container = styled.div`
  border: .5rem dashed var(--secondary-dark);
  padding: 3rem 0;
  width: 100%;
  height: 100%!important;
  background-color: transparent;
  
  p{
    text-shadow: 0px 1px .2px rgba(255, 255, 255, .3);
    color: var(--secondary-dark);
  }
`;
const GridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: end;
  grid-column-gap: 2rem;
  color: var(--secondary-dark);
  text-shadow: 0px 1px .2px rgba(255, 255, 255, .3);

  div{
    text-align: right;
    
    > *{
      margin: 0;
    }
    h1{
      font-size: 8rem;
    }
    h2{
      padding-right: 3rem;
    }
  }
  > h1{
    font-size: 6rem;
    margin: 0;
  }
`;


const Error = ( { message } ) => {
  return (
    <Container>
      <p className="txt-a-c txt-strong">{message}</p>
      <GridDiv>
        <div>
          <h1><i className="a-cloud_off"></i></h1>
          <h2><i className="a-tint"></i></h2>
        </div>
        <h1><i className="a-chrome-dino-right"></i></h1>
      </GridDiv>
    </Container>
  );
};


Error.propTypes = {
  message: PropTypes.string.isRequired,
}


export default Error