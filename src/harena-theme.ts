import { RaThemeOptions } from 'react-admin';
import { deepmerge } from '@mui/utils';

export const commonComponentsTheme: Partial<RaThemeOptions['components']> = {
  MuiTextField: {
    defaultProps: {
      variant: 'outlined',
      size: 'small',
    },
  },
  MuiFormControl: {
    defaultProps: {
      variant: 'outlined',
      size: 'small',
    },
  },
  RaToolbar: {
    styleOverrides: {
      root: {
        backgroundColor: 'transparent',
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        paddingTop: 6,
      },
    },
  },
};

const commonThemeOption: RaThemeOptions = {
  typography: {
    h1: {
      fontFamily: 'montserrat',
    },
    h2: {
      fontFamily: 'montserrat',
    },
    h3: {
      fontFamily: 'roboto',
    },
    h4: {
      fontFamily: 'roboto',
    },
    h5: {},
  },
  shape: {
    borderRadius: 8,
  },
};

const lightTheme = deepmerge(commonThemeOption, {} as RaThemeOptions);
const darkTheme = deepmerge(commonThemeOption, {} as RaThemeOptions);

export const harenaLightTheme: RaThemeOptions = {
  ...lightTheme,
  components: {
    ...lightTheme.components,
    ...commonComponentsTheme,
  },
};

export const harenaDarkTheme = {
  ...darkTheme,
  components: {
    ...darkTheme.components,
    ...commonComponentsTheme,
  },
};
