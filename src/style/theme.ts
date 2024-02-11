import dropdownLignt from '../image/icon/dropdown_light.png';
import dropdownDark from '../image/icon/dropdown_dark.png';
import settingLight from '../image/icon/setting_light.png';
import settingDark from '../image/icon/setting_dark.png';
import btnAboutLight from '../image/icon/btn_about_light.png';
import btnAboutDark from '../image/icon/btn_about_dark.png';
import btnProfileLight from '../image/icon/btn_profile_light.png';
import btnProfileDark from '../image/icon/btn_profile_dark.png';
import arrowLight from '../image/icon/arrow_light.png';
import arrowDark from '../image/icon/arrow_dark.png';

export const lightTheme = {
  mainColor: '#000',
  mainBg: '#fff',
  dropdown: {
    icon: `${dropdownLignt}`,
    bg: '#fff',
    border: '#000'
  },
  storyIcon: {
    storyBorder: '#ccc',
    storyBg: '#fff',
    storyHover: 'rgba(227, 232,242,0.5)'
  },
  buttonBg: '#efefef',
  buttonHover: '#D2D4DA',
  settingIcon: `${settingLight}`,
  modal: {
    border: '#ccc',
    modalBg: '#fff',
    iconAbout: `${btnAboutLight}`,
    iconProfile: `${btnProfileLight}`,
    arrow: `${arrowLight}`,
    lightBg: '#fff',
    lightHover: 'rgba(227, 232, 242, 0.52)'
  }
};
export const darkTheme = {
  mainColor: '#F0F1F2',
  mainBg: '#02050E',
  dropdown: {
    icon: `${dropdownDark}`,
    bg: '#18191A',
    border: '#626567'
  },
  storyIcon: {
    storyBorder: '#626567',
    storyBg: '#A0A5AF',
    storyHover: '#6C7A95'
  },
  buttonBg: '#404040',
  buttonHover: '#656268',
  settingIcon: `${settingDark}`,
  modal: {
    border: '#626567',
    modalBg: '#303234',
    iconAbout: `${btnAboutDark}`,
    iconProfile: `${btnProfileDark}`,
    arrow: `${arrowDark}`,
    lightBg: '#8F9091',
    lightHover: '#727A89'
  }
};
export const theme = {
  lightTheme,
  darkTheme
};

export default theme;
