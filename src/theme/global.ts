import { css } from '@emotion/react'
import { type Theme } from '@mui/material'
import '@fontsource/noto-kufi-arabic/400.css'
import '@fontsource/roboto/400.css'
import type { LocaleType } from '@/types/custom'
import { setFont } from '@/utils/font'

const GlobalStyles = (theme: Theme, locale: LocaleType) => css`
  ::-webkit-scrollbar {
    height: 6px;
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 4px;
    background: ${theme.palette.grey[400]};
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${theme.palette.grey[500]};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.palette.grey[500]};
  }
  ::-webkit-scrollbar-corner {
    background-color: ${theme.palette.grey[500]};
  }

  :root {
    touch-action: pan-x pan-y;
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  body {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    direction: ltr !important;
    font-family: ${setFont(locale === 'ar' ? 'Noto Kufi Arabic' : 'Roboto')} !important;
  }
`

/* 
    MUI BreakPoints Reminder
    - xs (extra-small): 0px
    - sm (small): 600px
    - md (medium): 900px
    - lg (large): 1200px
    - xl (extra-large): 1536px

    example: 
    - theme.breakpoints.down("sm") is equeal to (max-width: 600px) or (width <= 600px)
    - theme.breakpoints.up("sm") is equeal to (min-width: 600px) or (width >= 600px)
*/

export default GlobalStyles
