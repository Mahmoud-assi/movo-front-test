import { fetchLocalizedOrders } from '@/_mock/Dashboard/orders'
import type { Order } from '@/_mock/Dashboard/types'
import { Grid, Stack } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { SectionHeader } from '../SectionHeader'
import { OrderCard } from './Card'
import { Icon } from '@/components/Shared/ColoredSvg'
import Scrollbar from '@/components/Shared/Scrollbar'

export function OrdersList() {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    const data = fetchLocalizedOrders()
    setOrders(data.items)
  }, [])

  const { pendingOrders, onRouteOrders, completedOrders } = useMemo(() => {
    const pending = orders.filter(o => o.status === 'Pending')
    const onRoute = orders.filter(o =>
      ['Accepted', 'Preparing', 'Collecting', 'OutForDelivery'].includes(o.status),
    )
    const completed = orders.filter(o =>
      ['Delivered', 'Arrived', 'Refund', 'Hold'].includes(o.status),
    )
    return {
      pendingOrders: pending,
      onRouteOrders: onRoute,
      completedOrders: completed,
    }
  }, [orders])

  return (
    <>
      <Grid size={{ xs: 12, sm: 12, md: 6, lg: 3 }}>
        <Stack spacing={2}>
          <SectionHeader total={pendingOrders.length} />
          <Scrollbar fillContent sx={{ maxHeight: { xs: 400, sm: 600 } }}>
            <Stack spacing={2}>
              {pendingOrders.map(order => (
                <OrderCard
                  order={order}
                  key={order.id}
                  slots={{
                    top: (
                      <Stack spacing={1} direction="row" alignItems="center">
                        {Icon('tick-circle', 'common')}
                        {Icon('hourglass-bold', 'common')}
                        {Icon('close-circle', 'common')}
                      </Stack>
                    ),
                  }}
                  slotsProps={{
                    top: {
                      bgcolor: 'primary.main',
                    },
                    divider: {
                      borderColor: 'primary.main',
                    },
                  }}
                />
              ))}
            </Stack>
          </Scrollbar>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, sm: 12, md: 6, lg: 3 }}>
        <Stack spacing={2}>
          <SectionHeader total={onRouteOrders.length} type="onRoute" />
          <Scrollbar fillContent sx={{ maxHeight: { xs: 400, sm: 600 } }}>
            <Stack spacing={2}>
              {onRouteOrders.map(order => (
                <OrderCard
                  order={order}
                  buttonColor="info"
                  key={order.id}
                  slotsProps={{
                    top: {
                      bgcolor: 'info.main',
                    },
                    divider: {
                      borderColor: 'info.main',
                    },
                  }}
                />
              ))}
            </Stack>
          </Scrollbar>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, sm: 12, md: 6, lg: 3 }}>
        <Stack spacing={2}>
          <SectionHeader total={completedOrders.length} type="completed" />
          <Scrollbar fillContent sx={{ maxHeight: { xs: 400, sm: 600 } }}>
            <Stack spacing={2}>
              {completedOrders.map(order => (
                <OrderCard
                  order={order}
                  buttonColor="secondary"
                  key={order.id}
                  slotsProps={{
                    top: {
                      bgcolor: 'secondary.main',
                    },
                    divider: {
                      borderColor: 'secondary.main',
                    },
                  }}
                />
              ))}
            </Stack>
          </Scrollbar>
        </Stack>
      </Grid>
    </>
  )
}
