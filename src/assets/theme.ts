import { createTheme as createMuiTheme, ThemeOptions } from '@mui/material';
import {
  catpuccinLatte,
  catpuccinMocha,
  CatpuccinPalletes,
} from './catpuccin-palletes';

const createTheme = (palette: CatpuccinPalletes, mode: 'light' | 'dark') => {
  const titles = { fontFamily: 'montserrat', color: palette.text['main'] };
  const commonText = { fontFamily: 'comfortaa', color: palette.text['1'] };
  const options: ThemeOptions = {
    shadows: [] as string[] as ThemeOptions['shadows'],
    typography: {
      h1: titles,
      h2: titles,
      h3: titles,
      h4: titles,
      h5: titles,
      h6: titles,
      button: commonText,
      body1: commonText,
      body2: commonText,
      caption: commonText,
      subtitle1: commonText,
      subtitle2: commonText,
    },
    shape: {
      borderRadius: 8,
    },
    spacing: 10,
    palette: {
      mode,
      background: {
        default: palette.base,
        paper: palette.crust,
      },
      primary: {
        main: palette.surface['0'],
        contrastText: palette.text.main,
      },
      secondary: {
        main: palette.overlay['0'],
      },
      text: {
        primary: palette.text['0'],
        secondary: palette.text['1'],
        disabled: palette.text['2'],
      },
      divider: palette.overlay['1'],
      error: { main: palette.red },
      warning: { main: palette.peach },
      info: { main: palette.blue },
      success: { main: palette.green },
    },
    components: {
      MuiButton: {
        defaultProps: {
          sx: {
            color: palette.text.main,
          },
        },
      },
    },
  };
  return createMuiTheme(options);
};

export const lightTheme = createTheme(catpuccinLatte, 'light');

export const darkTheme = createTheme(catpuccinMocha, 'dark');
