import { Map } from '@/components/Shared/Map'
import { Grid, Stack } from '@mui/material'
import { OrdersList } from './OrdersList'
import { DriversList } from './DriversList'

export function Dashboard() {
  return (
    <Stack spacing={2}>
      <Map height={250} lat={33.513} lng={36.292} />
      <Grid container spacing={2}>
        <OrdersList />
        <DriversList />
      </Grid>
    </Stack>
  )
}
