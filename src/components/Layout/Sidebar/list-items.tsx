import { ColoredSvg } from '@/components/Shared/ColoredSvg'
import routes from '@/router/routes'
import type { SidebarItem } from '@/types/custom'

const icon = (name: string) => <ColoredSvg src={`/assets/icons/sidebar/${name}.svg`} />

export const ListItems: SidebarItem[] = [
  {
    index: true,
    title: 'dashboard',
    url: routes.dashboard,
    icon: icon('home'),
  },
  {
    title: 'users',
    url: routes.users,
    icon: icon('user'),
  },
  {
    title: 'map',
    url: routes.map,
    icon: icon('map'),
  },
  {
    title: 'orders',
    url: routes.orders,
    icon: icon('clipboard'),
  },
  {
    title: 'vehicles',
    url: routes.vehicles,
    icon: icon('truck'),
  },
  {
    title: 'view',
    url: routes.view,
    icon: icon('solar-bag'),
  },
]
