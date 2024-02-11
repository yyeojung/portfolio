import React, { useRef, useState } from 'react';
import ModalLayout from './ModalLayout';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

const FormWrap = styled.div`
  padding-top: 1rem;

  & .thanks {
    font-size: 1.2rem;
    margin-top: 1rem;
    color: #73a8bd;
  }
  & .bottom {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    button {
      width: 50%;
    }
    button:last-child {
      border-left: 0.1rem solid ${(props) => props.theme.modal.border};
    }
  }
`;
const FormBox = styled.div`
  text-align: left;
  margin: 1rem 2rem 0;
  strong {
    display: block;
    font-weight: 600;
    font-size: 1.6rem;
  }

  input,
  textarea {
    background: ${(props) => props.theme.buttonBg};
    color: ${(props) => props.theme.mainColor};
    outline: none;
    width: 100%;
    border-radius: 1rem;
    padding: 0 1rem;
    margin-top: 0.8rem;
    font-size: 1.6rem;
  }
  input {
    height: 3.6rem;
  }
  textarea {
    resize: none;
    height: 16rem;
    padding: 1rem;
  }
`;
export default function Message({ onClick }: { onClick: () => void }) {
  const form = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_evh4hmy',
          'template_f7g4jv9',
          form.current,
          'jdRp7fcLopxqjsf4b'
        )
        .then(
          () => {
            form.current?.reset();
            setIsSent(true);
          },
          (error) => {
            console.log(error.text);
            alert('이메일 전송 실패');
          }
        );
    }
  };
  return (
    <>
      <ModalLayout title='Message' isMessage={true} onClick={onClick}>
        <FormWrap>
          <form ref={form} onSubmit={sendEmail}>
            <FormBox>
              <strong>Subject</strong>
              <input type='text' name='subject' required />
            </FormBox>
            <FormBox>
              <strong>E-mail</strong>
              <input type='email' name='email' required />
            </FormBox>
            <FormBox>
              <strong>Message</strong>
              <textarea name='message' required />
            </FormBox>

            {isSent && (
              <p className='thanks'>
                연락 주셔서 감사합니다! <br />
                빠른 시일 내에 답장 드리겠습니다 :)
              </p>
            )}

            <div className='bottom'>
              <button onClick={onClick}>닫기</button>
              <button type='submit'>보내기</button>
            </div>
          </form>
        </FormWrap>
      </ModalLayout>
    </>
  );
}
