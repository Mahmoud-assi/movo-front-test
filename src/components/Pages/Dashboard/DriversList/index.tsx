import { Grid, Stack } from '@mui/material'
import { SectionHeader } from '../SectionHeader'
import { useEffect } from 'react'
import { fetchLocalizedDrivers } from '@/_mock/Dashboard/drivers'
import { Icon } from '@/components/Shared/ColoredSvg'
import { ToggleAvailability } from './ToggleAvailability'
import { useAtom, useAtomValue } from 'jotai'
import { DriversAvailabilityAtom, DriversDataAtom } from '@/atoms/Dashboard'
import Scrollbar from '@/components/Shared/Scrollbar'
import { DriverCard } from './Card'

export function DriversList() {
  const [drivers, setDrivers] = useAtom(DriversDataAtom)
  const selected = useAtomValue(DriversAvailabilityAtom)

  useEffect(() => {
    const data = fetchLocalizedDrivers()
    setDrivers(data.items)
  }, [])

  return (
    <Grid size={{ xs: 12, sm: 12, md: 6, lg: 3 }}>
      <Stack spacing={2}>
        <SectionHeader
          total={drivers.length}
          type="driver"
          icon={Icon('delivery-bike', 'common')}
          component={<ToggleAvailability />}
        />
        <Scrollbar fillContent sx={{ maxHeight: { xs: 400, sm: 600 } }}>
          <Stack spacing={2}>
            {drivers
              .filter(d => d.availability === selected)
              .map((driver, i) => (
                <DriverCard driver={driver} key={i} />
              ))}
          </Stack>
        </Scrollbar>
      </Stack>
    </Grid>
  )
}
