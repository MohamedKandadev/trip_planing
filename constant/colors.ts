// src/constants/colors.js
const colors = {
  airline_deep_dark: {
    light: '#060F1A',
    dark: '#060F1A',

    main: '#3498db',
    contrastText: '#ffffff', // for text on primary background
  },
  airline_dark: {
    light: '#1B2837',
    dark: '#1B2837',

    main: '#2ecc71',
    contrastText: '#ffffff', // for text on secondary background
  },

  airline_sky_blue: {
    light: '#A6C5CD',
    dark: '#696969',
    main: '#a9a9a9',
  },

  airline_sky_blue_light: {
    light: '#DBE8EB',
    dark: '#696969',
    main: '#a9a9a9',
  },

  airline_yellow: {
    light: '#FFE588',
    dark: '#696969',
    main: '#a9a9a9',
  },
  airline_blue: {
    light: '#FF83A1',
    dark: '#696969',
    main: '#a9a9a9',
  },
  airline_red: {
    light: '#839EFF',
    dark: '#696969',
    main: '#a9a9a9',
  },
  airline_green: {
    light: '#98F6A7',
    dark: '#696969',
    main: '#a9a9a9',
  },

  airline_gray: {
    gray: {
      light: '#626E7B',
      dark: '#696969',
      main: '#a9a9a9',
    },
    gray100: {
      light: '#B6BCC3',
      dark: '#696969',
      main: '#a9a9a9',
    },
    gray200: {
      light: '#D9DEE4',
      dark: '#696969',
      main: '#a9a9a9',
    },
    gray300: {
      light: '#F1F3F6',
      dark: '#696969',
      main: '#a9a9a9',
    },
  },

  background: {
    default: '#f5f5f5',
    paper: '#ffffff',
    dark: '#eeeeee',
  },
  text: {
    primary: '#333333',
    secondary: '#555555',
    disabled: '#9e9e9e',
    light: '#ffffff',
  },
  success: '#28a745',
  error: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  // Add other custom colors as necessary
};

export const lightTheme = {
  airline_deep_dark: colors.airline_deep_dark.light,
  airline_dark: colors.airline_dark.light,
  airline_sky_blue: colors.airline_blue.light,
  airline_sky_blue_light: colors.airline_sky_blue_light.light,
  airline_yellow: colors.airline_yellow.light,
  airline_blue: colors.airline_blue.light,
  airline_red: colors.airline_red.light,
  airline_green: colors.airline_green.light,
  airline_gray: {
    gray: colors.airline_gray.gray.light,
    gray100: colors.airline_gray.gray100.light,
    gray200: colors.airline_gray.gray200.light,
    gray300: colors.airline_gray.gray300.light,
  },

  text: colors.airline_dark.light,
};
export const darkTheme = {
  airline_deep_dark: colors.airline_deep_dark.dark,
  airline_dark: colors.airline_dark.dark,
  airline_sky_blue: colors.airline_blue.dark,
  airline_sky_blue_light: colors.airline_sky_blue_light.dark,
  airline_yellow: colors.airline_yellow.dark,
  airline_blue: colors.airline_blue.dark,
  airline_red: colors.airline_red.dark,
  airline_green: colors.airline_green.dark,
  airline_gray: {
    gray: colors.airline_gray.gray.dark,
    gray100: colors.airline_gray.gray100.dark,
    gray200: colors.airline_gray.gray200.dark,
    gray300: colors.airline_gray.gray300.dark,
  },

  text: colors.airline_gray.gray100.light,
};
export default colors;
