import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ClockBox = styled.div`
  display: flex;

  & .clock_wrap {
    width: 20rem;
    text-align: center;
    color: ${(props) => props.theme.mainColor};
    h2 {
      font-size: 4rem;
    }
    p {
      margin-top: 1rem;
      font-size: 2.8rem;
    }

    @media (${(props) => props.theme.size.mobile}) {
      width: 10rem;
      h2 {
        font-size: 2rem;
      }
      p {
        font-size: 1.6rem;
      }
    }
    @media (max-width: 767px) {
      width: 8rem;
    }
  }
`;
export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  return (
    <>
      <ClockBox>
        <div className='clock_wrap'>
          <h2>{hours}</h2>
          <p>always</p>
        </div>
        <div className='clock_wrap'>
          <h2>{minutes}</h2>
          <p>moving</p>
        </div>
        <div className='clock_wrap'>
          <h2>{seconds}</h2>
          <p>forward</p>
        </div>
      </ClockBox>
    </>
  );
}
