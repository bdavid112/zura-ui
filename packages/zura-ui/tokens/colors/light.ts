import colors from 'tailwindcss/colors'

export const lightColors = {
  /* Background color */
  background: colors.gray[50],

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
    10: colors.gray[100],
    100: colors.gray[200],
    1000: colors.gray[300],
  },

  /* Border colors */
  border: {
    primary: colors.gray[400],
    muted: colors.gray[300],
    disabled: colors.gray[200],
  },

  /* Primary brand color */
  primary: {
    base: { sm: colors.cyan[500], lg: colors.cyan[600] },
    disabled: { sm: colors.cyan[300], lg: colors.cyan[100] },
    hover: { sm: colors.cyan[600], lg: colors.cyan[500] },
    active: colors.cyan[700],
  },

  /* State colors */
  state: {
    info: colors.blue[500],
    success: colors.green[600],
    warning: colors.amber[500],
    error: colors.red[600],
  },
}
