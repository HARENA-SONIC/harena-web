import {
  defaultLightTheme,
  defaultDarkTheme,
  RaThemeOptions,
} from 'react-admin';

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

export const harenaLightTheme: RaThemeOptions = {
  ...defaultLightTheme,
  components: {
    ...defaultLightTheme.components,
    ...commonComponentsTheme,
  },
};

export const harenaDarkTheme = {
  ...defaultDarkTheme,
  components: {
    ...defaultDarkTheme.components,
    ...commonComponentsTheme,
  },
};
