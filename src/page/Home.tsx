import React from 'react';
import Header from 'components/Header';
import styled from 'styled-components';

const HomeWrap = styled.div`
  background: ${(props) => props.theme.header};
  min-height: 100vh;

  & .guide {
    width: 140rem;
  }
`;
export default function Home() {
  return (
    <>
      <HomeWrap>
        <div className='guide'>
          <Header />
        </div>
      </HomeWrap>
    </>
  );
}
