import { Grow, Popper, type PaperProps, type Theme } from '@mui/material'
import type { SxProps } from '@mui/material'
import { ClickAwayListener } from '@mui/material'
import { Paper } from '@mui/material'
import type { PopperProps } from 'node_modules/@mui/material/esm/Popper/BasePopper.types'
import type { JSXElementConstructor, ReactElement } from 'react'

export interface CustomPopperProps extends PopperProps {
  sxPaper?: SxProps<Theme>
  sxPopper?: SxProps<Theme>
  paperProps?: PaperProps
  children: ReactElement<any, string | JSXElementConstructor<any>>
  handleClose: (event?: Event | React.SyntheticEvent) => void
}

export function CustomPopper({
  sxPopper,
  paperProps,
  children,
  sxPaper,
  handleClose,
  ...props
}: CustomPopperProps) {
  return (
    <Popper transition {...props} sx={{ zIndex: 1300, ...sxPopper }}>
      {({ TransitionProps }) => (
        <Grow {...TransitionProps} timeout={400}>
          <Paper
            {...paperProps}
            sx={{
              borderRadius: 2,
              backdropFilter: 'blur(20px) !important',
              bgcolor: ({ palette: { background } }) => background.paper,
              ...sxPaper,
            }}
          >
            <ClickAwayListener onClickAway={handleClose}>{children}</ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  )
}
