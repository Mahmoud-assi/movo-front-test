import { rgba } from '@/utils/color'
import { Box, IconButton, styled, SvgIcon, useTheme, type BoxProps } from '@mui/material'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined'
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined'
import type { SidebarMode } from '@/types/custom'
import { useMemo } from 'react'
import { useAppTheme } from '@/providers'
import { Brand } from './Brand'
import { SidebarItems } from './Items'
import { useLocation } from 'react-router-dom'
import routes from '@/router/routes'

export function LayoutSidebar() {
  const { direction } = useTheme()
  const location = useLocation()
  const { expanded, sidebarMode, toggleSidebar } = useAppTheme()
  const routeHasNavbars = ![routes.notFound].includes(location.pathname)

  const toggleIcon = useMemo(
    () => (direction === 'rtl' ? ChevronLeftOutlinedIcon : ChevronRightOutlinedIcon),
    [direction],
  )

  if (!routeHasNavbars) return null
  return (
    <SidebarRoot expanded={expanded} sidebarMode={sidebarMode} component="aside">
      <SidebarToggle
        expanded={expanded}
        onClick={() => toggleSidebar(expanded ? 'closed' : 'side')}
      >
        <SvgIcon
          component={toggleIcon}
          sx={{
            width: 20,
            height: 20,
            transition: 'transform 300ms ease',
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </SidebarToggle>
      <Brand expanded={expanded} />
      <SidebarItems expanded={expanded} />
    </SidebarRoot>
  )
}

const SidebarRoot = styled(Box, {
  shouldForwardProp: prop => prop !== 'expanded' && prop !== 'sidebarMode',
})<
  {
    expanded: boolean
    sidebarMode?: SidebarMode
  } & BoxProps
>(({ theme, expanded = false, sidebarMode = 'closed' }) => ({
  position: 'fixed',
  left: 0,
  top: 0,
  height: '100dvh',
  width: expanded ? 300 : 88,
  [theme.breakpoints.down('sm')]: {
    width: expanded ? 280 : 0,
  },
  boxShadow: expanded ? `8px 0 20px ${rgba(theme.palette.background.sidebar, 0.25)}` : 'none',
  transition: 'width 300ms ease-out, box-shadow 300ms ease-out',
  scrollbarWidth: 'none',
  zIndex: theme.zIndex.drawer,
  backdropFilter: 'blur(10px)',
  backgroundColor: rgba(theme.palette.background.sidebar, 0.925),
  display: sidebarMode === 'top' ? 'none' : 'block',
}))

const SidebarToggle = styled(IconButton, {
  shouldForwardProp: prop => prop !== 'expanded',
})<{ expanded: boolean }>(({ theme, expanded = false }) => ({
  position: 'absolute',
  left: expanded ? 300 : 88,
  top: 36,
  transform: 'translate(-50%, -50%)',
  borderColor: theme.palette.primary.light,
  borderWidth: 1,
  borderStyle: 'solid',
  backgroundColor: rgba(theme.palette.background.paper, 0.5),
  transition: 'left 300ms ease-out',
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}))
