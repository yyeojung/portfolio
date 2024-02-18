import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import About from './page/About';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, size } from './style/theme';
import Project from 'page/Project';
import Contact from 'page/Contact';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

function App() {
  const isLightTheme = useSelector(
    (state: RootState) => state.thememode.isLightTheme
  );
  // !!!! 테마 삭제
  // const [theme, setTheme] = useState(true);

  // const lightMode = () => {
  //   setTheme(true);
  // };
  // const darkMode = () => {
  //   setTheme(false);
  // };
  const themeAndMobile = {
    ...(isLightTheme ? lightTheme : darkTheme),
    size
  };

  return (
    <ThemeProvider theme={themeAndMobile}>
      {/* <Relative>
        <Button onClick={darkMode}>dark</Button>
        <Button onClick={lightMode}>light</Button>
      </Relative> */}
      <div className='App'>
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/project' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
