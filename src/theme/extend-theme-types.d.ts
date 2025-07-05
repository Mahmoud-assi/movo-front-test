/**
 * Palette
 * https://mui.com/customization/palette/
 * @from {@link file://./core/palette.ts}
 */
export declare module '@mui/material' {
  interface PaletteColorExtend {
    lighter: string
    darker: string
  }
  export interface BackgroundExtend {
    sidebar: string
    white: string
  }

  interface PaletteColor extends PaletteColorExtend {}
  interface SimplePaletteColorOptions extends PaletteColorExtend {}
  interface TypeBackground extends BackgroundExtend {}
}

/**
 * Typography
 * https://mui.com/customization/typography/
 * @from {@link file://./core/typography.ts}
 */

declare module '@mui/material/styles' {
  interface ThemeVars {
    typography: Theme['typography']
    transitions: Theme['transitions']
  }
}
