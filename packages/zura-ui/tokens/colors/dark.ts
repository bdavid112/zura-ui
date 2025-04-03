import colors from 'tailwindcss/colors'

export const darkColors = {
  /* Background color */
  background: colors.zinc[900],

  /* Text colors (foreground) */
  text: {
    primary: colors.gray[900],
    secondary: colors.gray[600],
    muted: colors.gray[500],
    disabled: colors.gray[400],
    inverted: colors.gray[50],
  },

  /* Surface colors */
  surface: {
    10: colors.zinc[800],
    100: colors.zinc[700],
    1000: colors.zinc[600],
  },

  /* Border colors */
  border: {
    primary: colors.gray[400],
    muted: colors.gray[500],
    disabled: colors.gray[600],
  },

  /* Primary brand color */
  primary: {
    base: { sm: colors.cyan[400], lg: colors.cyan[700] },
    disabled: { sm: colors.cyan[700], lg: colors.cyan[800] },
    hover: { sm: colors.cyan[300], lg: colors.cyan[600] },
    active: colors.cyan[500],
  },

  /* State colors */
  state: {
    info: colors.blue[300],
    success: colors.green[400],
    warning: colors.amber[300],
    error: colors.red[400],
  },
}
