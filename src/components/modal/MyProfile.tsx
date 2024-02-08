import React from 'react';
import styled from 'styled-components';

const Profile = styled.div`
  width: 500px;
  height: 300px;
  background: red;
`;

export default function MyProfile() {
  return (
    <>
      <Profile>
        <h1>modal</h1>
      </Profile>
    </>
  );
}
