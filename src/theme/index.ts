import { type LocaleType, type ThemeMode } from '@/types/custom'
import { components } from './core/components'
import { typography } from './core/typography'
import { createTheme } from '@mui/material'
import { palette } from './core'
import { setFont } from '@/utils/font'

export const theme = (mode: ThemeMode, locale: LocaleType) =>
  createTheme({
    direction: locale === 'ar' ? 'rtl' : 'ltr',
    palette: {
      ...palette(mode),
      primary: {
        lighter: mode === 'dark' ? '#FFF2B0' : '#FFF8D6',
        light: mode === 'dark' ? '#F9DC5C' : '#FAE17C',
        main: '#F2C506',
        dark: mode === 'dark' ? '#D6AD04' : '#D4AE00',
        darker: mode === 'dark' ? '#A78700' : '#927800',
        contrastText: mode === 'dark' ? '#1A1A1A' : '#1C1C1C',
      },
      secondary: {
        lighter: mode === 'dark' ? '#D4B7F4' : '#EFE1FB',
        light: mode === 'dark' ? '#A56FD4' : '#C49BEA',
        main: '#5C2684',
        dark: mode === 'dark' ? '#471C68' : '#491D6A',
        darker: mode === 'dark' ? '#2D1242' : '#331752',
        contrastText: mode === 'dark' ? '#F5F5F5' : '#FFFFFF',
      },
      background: {
        default: mode === 'dark' ? '#1E1B2C' : '#F5F4EF',
        paper: mode === 'dark' ? '#2A263B' : '#FBFAFD',
        sidebar: mode === 'dark' ? '#322C46' : '#FFFEF9',
        white: mode === 'dark' ? '#382D53' : '#FFFEF9',
      },
      text: {
        primary: mode === 'dark' ? '#EAEAEA' : '#202020',
        secondary: mode === 'dark' ? '#CFCFCF' : '#4A4A4A',
        disabled: mode === 'dark' ? '#A0A0A0' : '#727272',
      },
    },
    typography: {
      ...typography,
      fontFamily: setFont(locale === 'ar' ? 'Noto Kufi Arabic' : 'Roboto'),
    },
    components,
  })
