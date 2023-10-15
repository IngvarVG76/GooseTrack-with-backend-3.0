// приклад   background: ${({theme}) => theme.colors.mainBackgroundColor};

import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { light } from '../Theme/themeOptions';
import { dark } from '../Theme/themeOptions';

export const Theme = ({ children }) => {
  const currentTheme = useSelector((state) => state.theme.lightTheme);
  const theme = (checkTheme = false) => {
    return checkTheme ? { ...light } : { ...dark };
  };

  return <ThemeProvider theme={theme(currentTheme)}>{children}</ThemeProvider>;
};
