import { useRouter } from '@/hooks/useRouter'
import { useAppTheme } from '@/providers'
import type { SidebarItem } from '@/types/custom'
import { rgba } from '@/utils/color'
import type { ListItemButtonProps, Theme } from '@mui/material'
import { ListItemIcon, listItemIconClasses, listItemTextClasses } from '@mui/material'
import { Stack, useMediaQuery, useTheme, type SxProps } from '@mui/material'
import { ListItemButton, ListItemText } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'
import { useIntl } from 'react-intl'

export interface SidebarItemProps extends ListItemButtonProps {
  item: SidebarItem
  expanded: boolean
  selected: boolean
  collapsed?: boolean
  handleClick?(): void
  sx?: SxProps<Theme>
}

export function SidebarItem({
  item,
  expanded,
  selected,
  collapsed,
  handleClick,
  sx,
  ...props
}: SidebarItemProps) {
  const router = useRouter()
  const { toggleSidebar } = useAppTheme()
  const { formatMessage: f } = useIntl()
  const {
    palette: { mode, background, primary, secondary, text, grey },
    breakpoints,
  } = useTheme()
  const xs = useMediaQuery(breakpoints.down('sm'))

  return (
    <ListItemButton
      {...props}
      onClick={() => {
        router.push(item.url!)
        if (xs) toggleSidebar('closed')
      }}
      color="primary"
      sx={{
        borderRadius: 1,
        py: 0.75,
        pr: { xs: 1, sm: expanded ? 1 : 0.25 },
        pl: { xs: 1.5, sm: expanded ? 1.5 : 0.25 },
        minHeight: { xs: 48, sm: expanded ? 48 : 60 },
        maxHeight: { xs: 48, sm: expanded ? 48 : 60 },
        overflow: 'hidden',
        ...(selected && {
          bgcolor: rgba(background.default, 0.5),
        }),
        [`.${listItemIconClasses.root}`]: {
          minWidth: 0,
          span: {
            width: `24px !important`,
            height: `24px !important`,
            color: `${
              selected ? (mode === 'dark' ? primary.main : secondary.main) : grey[500]
            } !important`,
            display: { xs: expanded ? 'flex' : 'none', sm: 'flex' },
          },
        },
        [`.${listItemTextClasses.root}`]: {
          span: {
            fontSize: { xs: 14, sm: expanded ? 14 : 10 },
            color: selected ? text.secondary : text.primary,
            whiteSpace: 'nowrap',
            wordBreak: 'break-word',
          },
        },
        ...sx,
      }}
    >
      <Stack
        width="100%"
        direction={{ xs: 'row', sm: expanded ? 'row' : 'column' }}
        justifyContent={{ xs: 'start', sm: expanded ? 'start' : 'center' }}
        alignItems="center"
        spacing={{ xs: 2, sm: expanded ? 2 : 0.5 }}
      >
        <CustomListIcon>{item.icon}</CustomListIcon>
        <CustomListItemText expanded={expanded} title={f({ id: item.title })} />
      </Stack>
    </ListItemButton>
  )
}

const CustomListItemText = ({ expanded, title }: { expanded: boolean; title: string }) =>
  expanded ? (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <ListItemText primary={title} />
      </motion.div>
    </AnimatePresence>
  ) : (
    <ListItemText
      primary={title}
      sx={{ display: { xs: expanded ? 'flex' : 'none', sm: 'flex' } }}
    />
  )

const CustomListIcon = ({ children }: PropsWithChildren) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
  >
    <ListItemIcon>{children}</ListItemIcon>
  </motion.div>
)
