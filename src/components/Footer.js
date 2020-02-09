import React from 'react';
import styled from '@emotion/styled';


const FooterDiv = styled.div`
  background-color: var(--secondary-dark);
`;



const Footer = () => {
  return (
    <FooterDiv className="container-100 txt-a-c vp-2">
      <small className="txt-w">Weather React APP 2020 · www.plazmedia.com</small>
    </FooterDiv>
  );
};

export default Footer