import React from 'react';
import styled from 'styled-components';

const SettingBox = styled.div`
  width: 500px;
  height: 300px;
  background: blue;
`;

export default function Setting() {
  return (
    <>
      <SettingBox>
        <h1>setting</h1>
      </SettingBox>
    </>
  );
}
