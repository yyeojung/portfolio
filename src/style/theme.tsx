import dropdownLignt from '../image/icon/dropdown_light.png';
import dropdownDark from '../image/icon/dropdown_dark.png';

export const lightTheme = {
  mainColor: '#000',
  header: '#fff',
  dropdown: {
    icon: `${dropdownLignt}`,
    bg: '#fff',
    border: '#000'
  }
};
export const darkTheme = {
  mainColor: '#F0F1F2',
  header: '#02050E',
  dropdown: {
    icon: `${dropdownDark}`,
    bg: '#18191A',
    border: '#626567'
  }
};
export const theme = {
  lightTheme,
  darkTheme
};

export default theme;
