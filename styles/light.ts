import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  id: 'light',
  // Основные
  bgColor: '#e2e5e8',
  textColor: '#333333',
  purpleGradient: 'linear-gradient(to right, #A259FF, #3258FB)',
  blue: '#3258FB',
  accent: '#3258FB',
  black: '#333333',
  white: '#FFFFFF',
  whiteOpacity: '#FFFFFF44',
  whiteOpacity75: '#FFFFFFaa',
  fillBlack: '#000000',
  warningBg: 'rgba(255, 193, 7, 0.16)',
  warning: 'rgba(255, 193, 7, 1)',
  activeBg: 'rgba(84, 214, 44, 0.16)',
  activeColor: '#229A16',
  warningColor: '#B78103',
  // Дополнительные
  gray: '#555555',
  gray2: '#818181',
  gray3: '#A9A9A9',
  gray4: '#F2F2F2',
  darkGray: '#444444',
  lightGray: '#F9F7F7',
  lightGray2: '#C1C1C1',
  lightGrayHover: '#f2f0f0',
  skyBlue: '#F4F7FF',
  red: '#FC5252',
  lightBlue: '#DEE4FE',
  lightBlue2: '#A3B3F4',
  green: '#3b992b',
  grayBorder: '#B6B6B6',
  tableBorder: '#E8E9ED',
  toggleActive: '#74D364',
  toggleInactive: '#F8CA2A',
  // Кнопки
  blueHover: 'rgba(85, 122, 254, 1)',
  blueDisabled: '#BFCDFF',
  grayHover: '#F3F4F6', // secondary button hover
  grayDisabled: '#FAFAFB;', // secondary button disabled
  grayDisabled2: '#C3C6D2',
  logoHover: 'rgba(126,126,126,.2)',
  logoLightHover: 'rgba(126,126,126,.1)',
  bgNewButtonPlus: '#FFF7F6',
}

export default theme
