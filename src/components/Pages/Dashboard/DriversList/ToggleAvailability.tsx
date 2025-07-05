import { DriversAvailabilityAtom, DriversDataAtom } from '@/atoms/Dashboard'
import { Box, ToggleButton, toggleButtonClasses, ToggleButtonGroup } from '@mui/material'
import { useAtom, useAtomValue } from 'jotai'
import { useMemo } from 'react'
import { useIntl } from 'react-intl'

export function ToggleAvailability() {
  const { formatMessage: f } = useIntl()
  const [selected, setSelected] = useAtom(DriversAvailabilityAtom)
  const data = useAtomValue(DriversDataAtom)
  const busy = useMemo(() => data.filter(d => d.availability === 'busy'), [data])
  const available = useMemo(() => data.filter(d => d.availability === 'free'), [data])

  return (
    <Box sx={{ width: 'max-content' }}>
      <ToggleButtonGroup
        sx={{
          [`.${toggleButtonClasses.root}`]: {
            px: 1,
            fontSize: { xs: 13, sm: 14 },
            py: 0.5,
          },
        }}
        value={selected}
        exclusive
        onChange={(_, val) => setSelected(val)}
        color="success"
      >
        <ToggleButton value="free">{`${f({ id: 'free' })} ${available.length}`}</ToggleButton>
        <ToggleButton value="busy">{`${f({ id: 'busy' })} ${busy.length}`}</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  )
}
