import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    id?: string;
    bgColor?: string;
    blue?: string;
    purpleGradient?: string;
    warning?: string;
    lightBlue?: string;
    accent?: string;
    black?: string;
    textColor?: string;
    white?: string;
    whiteOpacity?: string;
    whiteOpacity75?: string;
    fillBlack?: string;
    warningBg?: string;
    activeBg?: string;
    activeColor?: string;
    warningColor?: string;
    // Дополнительные
    gray?: string;
    gray2?: string;
    gray3?: string;
    gray4?: string;
    darkGray?: string;
    lightGray?: string;
    lightGray2?: string;
    lightGrayHover?: string;
    skyBlue?: string;
    green?: string;
    lightBlue?: string;
    lightBlue2?: string;
    red?: string;
    lightBlue?: string;
    tableBorder?: string;
    toggleActive?: string;
    toggleInactive?: string;
    // Кнопки
    blueHover?: string;
    blueDisabled?: string;
    grayHover?: string; // secondary button hover
    grayDisabled?: string; // secondary button disabled
    grayDisabled2?: string;
    // Бордеры
    grayBorder?: string;
    logoHover?: string;
    logoLightHover?: string;
    bgNewButtonPlus?: string;
  }
}
