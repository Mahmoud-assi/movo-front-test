import { useLocalization } from '@/providers'
import { styled, type Theme, type SxProps } from '@mui/material'
import type { ComponentProps, CSSProperties } from 'react'
import SimpleBar from 'simplebar-react'
import type { Props as SimpleBarProps } from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

export type ScrollbarProps = SimpleBarProps &
  ComponentProps<'div'> & {
    sx?: SxProps<Theme>
    fillContent?: boolean
    slotProps?: {
      wrapperSx?: SxProps<Theme>
      contentSx?: SxProps<Theme>
      contentWrapperSx?: SxProps<Theme>
    }
  }

export function Scrollbar({
  sx,
  ref,
  children,
  className,
  slotProps,
  fillContent = true,
  ...other
}: ScrollbarProps) {
  const { locale } = useLocalization()

  return (
    <ScrollbarRoot
      scrollableNodeProps={{ ref }}
      clickOnTrack={false}
      fillContent={fillContent}
      sx={[
        {
          '& .simplebar-wrapper': slotProps?.wrapperSx as CSSProperties,
          '& .simplebar-content-wrapper': slotProps?.contentWrapperSx as CSSProperties,
          '& .simplebar-content': slotProps?.contentSx as CSSProperties,
          '& .simplebar-scrollbar:before': {
            bgcolor: 'primary.80',
          },
          ...(locale === 'ar' && {
            '& .simplebar-track': {
              right: 0,
              left: 'unset',
            },
          }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {children}
    </ScrollbarRoot>
  )
}

const ScrollbarRoot = styled(SimpleBar, {
  shouldForwardProp: (prop: string) => !['fillContent', 'sx'].includes(prop),
})<Pick<ScrollbarProps, 'fillContent'>>(({ fillContent }) => ({
  minWidth: 0,
  minHeight: 0,
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  ...(fillContent && {
    '& .simplebar-content': {
      display: 'flex',
      flex: '1 1 auto',
      minHeight: '100%',
      flexDirection: 'column',
    },
  }),
}))

export default Scrollbar
