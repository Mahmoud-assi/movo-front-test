import type { ThemeMode } from '@/types/custom'
import type { PaletteOptions } from '@mui/material'

export const palette = (mode: ThemeMode): PaletteOptions => ({
  mode,
  error: {
    lighter: mode === 'dark' ? '#5A1A13' : '#FFE9D5',
    light: mode === 'dark' ? '#D84315' : '#FFAC82',
    main: mode === 'dark' ? '#FF7043' : '#FF5630',
    dark: mode === 'dark' ? '#FF8A65' : '#B71D18',
    darker: mode === 'dark' ? '#FFD6C2' : '#7A0916',
    contrastText: mode === 'dark' ? '#F1F1F1' : '#1C1C1C',
  },
  warning: {
    lighter: mode === 'dark' ? '#4F3A00' : '#FFF5CC',
    light: mode === 'dark' ? '#FFB300' : '#FFD666',
    main: mode === 'dark' ? '#FFD54F' : '#FFAB00',
    dark: mode === 'dark' ? '#FFE082' : '#B76E00',
    darker: mode === 'dark' ? '#FFECB3' : '#7A4100',
    contrastText: mode === 'dark' ? '#0F0F0F' : '#1C1C1C',
  },
  info: {
    lighter: mode === 'dark' ? '#103F5B' : '#CAFDF5',
    light: mode === 'dark' ? '#29B6F6' : '#61F3F3',
    main: '#105DFB',
    dark: mode === 'dark' ? '#81D4FA' : '#006C9C',
    darker: mode === 'dark' ? '#B3ECFF' : '#003768',
    contrastText: mode === 'dark' ? '#F1F1F1' : '#0F1A21',
  },
  success: {
    lighter: mode === 'dark' ? '#1B4631' : '#D3FCD2',
    light: mode === 'dark' ? '#43A047' : '#77ED8B',
    main: mode === 'dark' ? '#66BB6A' : '#22C55E',
    dark: mode === 'dark' ? '#81C784' : '#118D57',
    darker: mode === 'dark' ? '#C2F2D2' : '#065E49',
    contrastText: mode === 'dark' ? '#F4F4F4' : '#0F1A21',
  },
})
