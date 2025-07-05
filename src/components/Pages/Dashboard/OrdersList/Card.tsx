import { OrderStatuses, type Order } from '@/_mock/Dashboard/types'
import { Icon } from '@/components/Shared/ColoredSvg'
import { CustomPopper } from '@/components/Shared/CustomPopper'
import InfoItem from '@/components/Shared/InfoItem'
import useDropdown from '@/hooks/useDropdown'
import { useLocalization } from '@/providers'
import type { LabelValue, LocaleType } from '@/types/custom'
import { fDateTime } from '@/utils/format-time'
import {
  Button,
  buttonClasses,
  Chip,
  Divider,
  Grid,
  MenuItem,
  Paper,
  Stack,
  Typography,
  type ButtonProps,
  type SxProps,
  type Theme,
} from '@mui/material'
import type { ReactNode } from 'react'
import { useIntl } from 'react-intl'

export function OrderCard({
  order,
  buttonColor = 'primary',
  slots,
  slotsProps,
}: {
  order: Order
  buttonColor?: ButtonProps['color']
  slots?: {
    top: ReactNode
  }
  slotsProps: {
    top: SxProps<Theme>
    divider: SxProps<Theme>
  }
}) {
  const { formatMessage: f } = useIntl()
  const { locale } = useLocalization()
  const { anchorEl, handleClose, handleToggle, open } = useDropdown()

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
          ...slotsProps?.top,
        }}
      >
        <Stack spacing={1} alignItems="center" direction="row">
          {Icon('clock', 'common')}
          <Typography variant="subtitle2">Title here</Typography>
        </Stack>
        {slots?.top}
      </Stack>
      <Grid container spacing={1}>
        {firstSection(order, locale).map(o => (
          <Grid key={o.label} size={{ xs: 6, sm: 6, md: 4 }}>
            <InfoItem alignItems="start" label={f({ id: o.label })} value={o.value} />
          </Grid>
        ))}
      </Grid>
      <Stack spacing={1} direction="row" alignItems="center">
        {order?.tags &&
          order?.tags?.length &&
          order?.tags.map((tag, i) => (
            <Chip
              key={i}
              sx={{ p: 0.25, fontSize: 12, height: 'max-content' }}
              label={f({ id: tag })}
            />
          ))}
      </Stack>
      <Divider sx={{ ...slotsProps?.divider }} />
      <Grid container spacing={1}>
        {secondSection(order, locale).map(o => (
          <Grid key={o.label} size={{ xs: 6, sm: 6, md: 4 }}>
            <InfoItem alignItems="start" label={f({ id: o.label })} value={o.value} />
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ ...slotsProps?.divider }} />
      <Grid container spacing={1}>
        {thirdSection(order).map(o => (
          <Grid key={o.label} size={{ xs: 6, sm: 6, md: 4 }}>
            <InfoItem alignItems="start" label={f({ id: o.label })} value={o.value} />
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        spacing={1}
        sx={{
          [`.${buttonClasses.root}`]: {
            p: 0.25,
            fontSize: 12,
          },
        }}
      >
        {['status', 'view', 'track', 'delete'].map(b => (
          <Grid size={{ xs: 3 }}>
            <Button
              variant="outlined"
              color={buttonColor}
              onClick={e => {
                if (b === 'status') handleToggle(e)
              }}
            >
              {f({ id: b })}
            </Button>
          </Grid>
        ))}
      </Grid>
      <CustomPopper
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
        placement="bottom-start"
        sxPaper={{ width: 200 }}
      >
        <Stack spacing={1} sx={{ width: '100%', p: 1 }}>
          <Stack spacing={0.5}>
            {OrderStatuses.map(s => (
              <MenuItem>{f({ id: s })}</MenuItem>
            ))}
          </Stack>
          <Stack
            spacing={1}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              width: '100%',
              [`.${buttonClasses.root}`]: {
                width: '100%',
              },
            }}
          >
            <Button color="secondary" variant="outlined">
              {f({ id: 'cancel' })}
            </Button>
            <Button variant="contained" color="secondary">
              {f({ id: 'search' })}
            </Button>
          </Stack>
        </Stack>
      </CustomPopper>
    </Paper>
  )
}

const firstSection = (order: Order, locale: LocaleType): LabelValue[] => [
  {
    label: 'orderId',
    value: order.id,
  },
  {
    label: 'trackId',
    value: order.trackId,
  },
  {
    label: 'canceledOrder',
    value: order.canceledOrder,
  },
  {
    label: 'customer',
    value: order.translations.customerName[locale],
  },
  {
    label: 'status',
    value: order.translations.status[locale],
  },
]

const secondSection = (order: Order, locale: LocaleType): LabelValue[] => [
  {
    label: 'restaurant',
    value: order.translations.restaurant[locale],
  },
  {
    label: 'area',
    value: order.translations.area[locale],
  },
  {
    label: 'transType',
    value: order.translations.transType[locale],
  },
  {
    label: 'paymentMethod',
    value: order.paymentMethod,
  },
  {
    label: 'total',
    value: order.total,
  },
]

const thirdSection = (order: Order): LabelValue[] => [
  { label: 'deliveryTime', value: fDateTime(order.deliveryTime, 'date') },
  { label: 'estTime', value: fDateTime(order.estTime, 'date') },
  { label: 'dispatch', value: '-' },
]
