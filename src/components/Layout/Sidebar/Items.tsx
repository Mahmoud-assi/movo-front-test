import { ListItems } from './list-items'
import { useLocation } from 'react-router-dom'
import { SidebarItem } from './Item'
import { Stack } from '@mui/material'
import Scrollbar from '@/components/Shared/Scrollbar'

export function SidebarItems({ expanded }: { expanded: boolean }) {
  const location = useLocation()

  return (
    <Stack spacing={0.5} px={{ xs: expanded ? 1 : 0, sm: expanded ? 1 : 0.5 }}>
      <Scrollbar sx={{ maxHeight: 'calc(100dvh - 5.5rem)' }}>
        {ListItems.map(item => {
          const isSelected =
            'index' in item
              ? location.pathname === item.url
              : location.pathname.startsWith(item.url!)
          return (
            <SidebarItem key={item.title} item={item} expanded={expanded} selected={isSelected!} />
          )
        })}
      </Scrollbar>
    </Stack>
  )
}
