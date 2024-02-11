import React from 'react';
import ModalLayout from './ModalLayout';
import lightIcon from '../../image/icon/lightmode.png';
import darkIcon from '../../image/icon/darkmode.png';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setLightTheme, setDarkTheme } from 'store/thememode';

const SettingWrap = styled.div`
  display: flex;
  gap: 2rem;
  padding: 3rem;
`;
const ModeBtn = styled.button`
  width: 14rem;
  height: 14rem;
  border: 0.1rem solid ${(props) => props.theme.modal.border};
  border-radius: 1rem;
  background: ${(props) => props.theme.modal.lightBg};
  &:hover {
    background: ${(props) => props.theme.modal.lightHover};
  }

  &.dark {
    background: #474747;
  }
  &.dark:hover {
    background: #353232;
  }
  & img {
    width: 6.4rem;
    height: 6.4rem;
  }
`;
export default function Setting({ onClick }: { onClick: () => void }) {
  const dispatch = useDispatch();

  const handleLightMode = () => {
    dispatch(setLightTheme());
  };

  const handleDarkMode = () => {
    dispatch(setDarkTheme());
  };
  return (
    <>
      <ModalLayout title='Setting' onClick={onClick}>
        <SettingWrap className='contents'>
          <ModeBtn onClick={handleLightMode}>
            <img src={lightIcon} alt='lightmode' />
          </ModeBtn>
          <ModeBtn className='dark' onClick={handleDarkMode}>
            <img src={darkIcon} alt='darkmode' />
          </ModeBtn>
        </SettingWrap>
      </ModalLayout>
    </>
  );
}
