import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import About from './page/About';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './style/theme';
// import { useSelector } from 'react-redux';
// import { RootState } from 'store/store';

// !!!!삭제하기
const Relative = styled.div`
  position: absolute;
  right: 0;
  z-index: 100;
  & a {
    color: red;
  }
`;
const Button = styled.button`
  border: 1px solid red;
  background: #fff;
`;

function App() {
  // const isLightTheme = useSelector(
  //   (state: RootState) => state.thememode.isLightTheme
  // );
  // !!!! 테마 삭제
  const [theme, setTheme] = useState(true);

  const lightMode = () => {
    setTheme(true);
  };
  const darkMode = () => {
    setTheme(false);
  };
  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <Relative>
        <Button onClick={darkMode}>dark</Button>
        <Button onClick={lightMode}>light</Button>
        <a href='/'>홈</a>
        <a href='/about'>어바dd웃</a>
      </Relative>
      <div className='App'>
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
