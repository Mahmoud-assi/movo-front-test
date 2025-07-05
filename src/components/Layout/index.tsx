import { Box, Stack, useMediaQuery, useTheme } from '@mui/material'
import { useCallback, type PropsWithChildren } from 'react'
import { LayoutAppbar } from './Appbar'
import { LayoutSidebar } from './Sidebar'
import { useAppTheme } from '@/providers'
import routes from '@/router/routes'
import { useLocation } from 'react-router-dom'

export function MovoLayout({ children }: PropsWithChildren) {
  const { breakpoints } = useTheme()
  const location = useLocation()
  const smallScreen = useMediaQuery(breakpoints.down('md'))
  const { expanded, sidebarMode, toggleSidebar } = useAppTheme()
  const routeHasNavbars = ![routes.notFound].includes(location.pathname)

  const calcContentWidth = useCallback(() => {
    if (!routeHasNavbars || sidebarMode === 'top') return '100%'
    return {
      xs: '100%',
      sm: `calc(100% - 88px)`,
      md: `calc(100% - ${expanded ? '300px' : '88px'})`,
    }
  }, [sidebarMode, expanded, routeHasNavbars])

  return (
    <Box sx={{ maxWidth: '100vw', minHeight: '100dvh' }}>
      <LayoutAppbar routeHasNavbars={routeHasNavbars} expanded={expanded} />
      <LayoutSidebar />
      <Stack
        component="main"
        sx={{
          maxWidth: '100%',
          minHeight: 'calc(100dvh - 5rem)',
          ml: 'auto',
          transition: 'width 300ms ease-out, margin-left 300ms ease-out',
        }}
      >
        <Box
          display="grid"
          minHeight="calc(100dvh - 5rem)"
          pt={sidebarMode === 'top' ? 2 : 1}
          pb={2}
          px={{ xs: 2, sm: 4, md: 5 }}
          onClick={() => smallScreen && expanded && toggleSidebar('closed')}
          sx={{
            width: calcContentWidth(),
            transition: 'width 300ms ease-out, margin-left 300ms ease-out',
            ml: 'auto',
          }}
        >
          {children}
        </Box>
      </Stack>
    </Box>
  )
}
