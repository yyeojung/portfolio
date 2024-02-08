import React from 'react';
import styled from 'styled-components';

const Headers = styled.header`
  height: 12rem;
  background: ${(props) => props.theme.header};
  color: ${(props) => props.theme.mainColor};
`;

export default function Header() {
  return (
    <>
      <Headers>header</Headers>
    </>
  );
}
