import { useScrollOffsetTop } from '@/hooks/useScrollOffsetTop'
import { styled, AppBar, type AppBarProps, Stack } from '@mui/material'
import { LocaleSwitcher } from './LocaleSwitcher'
import { LanguageSelector } from './LanguageSelector'

export function LayoutAppbar({
  expanded = false,
  routeHasNavbars = true,
}: {
  expanded: boolean
  routeHasNavbars?: boolean
}) {
  const { offsetTop: isOffset } = useScrollOffsetTop()

  return (
    <AppbarRoot
      position="sticky"
      component="header"
      isOffset={isOffset}
      sx={{
        px: routeHasNavbars ? { xs: 2, sm: 4, md: 5 } : { xs: 2, sm: 3 },
        width: {
          xs: '100%',
          sm: routeHasNavbars ? `calc(100% - ${expanded ? `300px` : `88px`})` : '100%',
        },
        bgcolor: 'transparent',
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <LanguageSelector />
        <LocaleSwitcher />
      </Stack>
    </AppbarRoot>
  )
}

const AppbarRoot = styled(AppBar, {
  shouldForwardProp: prop => prop !== 'isOffset',
})<{ isOffset: boolean } & AppBarProps>(({ theme, isOffset }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  top: 0,
  backgroundImage: 'none',
  overflow: 'hidden',
  height: 64,
  [theme.breakpoints.up('sm')]: {
    height: 72,
  },
  boxShadow: isOffset ? '2px 2px 8px 0 rgba(0, 0, 0, 0.05)' : 'none',
  backdropFilter: isOffset ? 'blur(20px)' : 'none',
  transition: 'backdrop-filter 0.3s ease, width 0.3s ease',
  marginLeft: 'auto',
}))
