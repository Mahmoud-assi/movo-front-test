import type { Driver } from '@/_mock/Dashboard/types'
import { Icon } from '@/components/Shared/ColoredSvg'
import InfoItem from '@/components/Shared/InfoItem'
import { useLocalization } from '@/providers'
import type { LabelValue, LocaleType } from '@/types/custom'
import { fDateTime } from '@/utils/format-time'
import { Grid, Paper, Stack, Typography } from '@mui/material'
import { useIntl } from 'react-intl'

export function DriverCard({ driver }: { driver: Driver }) {
  const { formatMessage: f } = useIntl()
  const { locale } = useLocalization()

  return (
    <Paper component={Stack} spacing={1} variant="outlined" sx={{ p: 1 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
        sx={{
          p: 0.5,
          width: '100%',
          borderRadius: 1,
          span: {
            width: 18,
            height: 18,
          },
          color: 'common.white',
          bgcolor: 'success.main',
        }}
      >
        <Stack spacing={1} alignItems="center" direction="row">
          {Icon('frame', 'common')}
          <Typography variant="subtitle2">{driver.translations.name[locale]}</Typography>
        </Stack>
      </Stack>
      <Grid container spacing={1}>
        {firstSection(driver, locale).map(o => (
          <Grid key={o.label} size={{ xs: 6, sm: 6, md: 4 }}>
            <InfoItem alignItems="start" label={f({ id: o.label })} value={o.value} />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={1}>
        {secondSection(driver).map(o => (
          <Grid key={o.label} size={{ xs: 6, sm: 6, md: 4 }}>
            <InfoItem alignItems="start" label={f({ id: o.label })} value={o.value} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}

const firstSection = (driver: Driver, locale: LocaleType): LabelValue[] => [
  {
    label: 'phone',
    value: driver.phone,
  },
  {
    label: 'startTime',
    value: fDateTime(driver.startTime, 'time24'),
  },
  {
    label: 'status',
    value: driver.translations.currentStatus[locale],
  },
]

const secondSection = (driver: Driver): LabelValue[] => [
  {
    label: 'delivered',
    value: driver.deliveryStats.delivered,
  },
  {
    label: 'cancelled',
    value: driver.deliveryStats.cancelled,
  },
  {
    label: 'rejected',
    value: driver.deliveryStats.rejected,
  },
]
