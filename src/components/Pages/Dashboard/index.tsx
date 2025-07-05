import { Map } from '@/components/Shared/Map'
import { Stack } from '@mui/material'

export function Dashboard() {
  return (
    <Stack spacing={2}>
      <Map height={250} lat={33.513} lng={36.292} />
    </Stack>
  )
}
