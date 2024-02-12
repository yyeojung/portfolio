import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface modalProps {
  title: string;
  children: ReactNode;
  onClick: () => void;
  isMessage?: boolean;
}
const Modal = styled.div`
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  z-index: 20;
`;
const ModalBack = styled.div`
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.3);
`;
const ModalWrap = styled.div`
  width: 36rem;
  background: ${(props) => props.theme.modal.modalBg};
  color: ${(props) => props.theme.mainColor};
  border: 0.1rem solid ${(props) => props.theme.modal.border};
  border-radius: 2rem;
  overflow: hidden;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & .header {
    height: 4.8rem;
    border-bottom: 0.1rem solid ${(props) => props.theme.modal.border};
    h3 {
      line-height: 4.8rem;
      font-size: 2rem;
    }
  }

  & .bottom {
    height: 4.5rem;
    border-top: 0.1rem solid ${(props) => props.theme.modal.border};
    button {
      line-height: 4.5rem;
      font-size: 1.6rem;
      width: 100%;
    }
  }
`;

export default function ModalLayout({
  title,
  children,
  onClick,
  isMessage
}: modalProps) {
  return (
    <>
      <Modal>
        <ModalBack onClick={onClick} />
        <ModalWrap>
          <div className='header'>
            <h3>{title}</h3>
          </div>
          <>{children}</>
          {isMessage ? null : (
            <div className='bottom'>
              <button onClick={onClick}>닫기</button>
            </div>
          )}
        </ModalWrap>
      </Modal>
    </>
  );
}
