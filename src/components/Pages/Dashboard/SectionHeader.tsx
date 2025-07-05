import { rgba } from '@/utils/color'
import { Box, Card, Paper, Stack, Typography, useTheme } from '@mui/material'
import type { ReactNode } from 'react'
import { useIntl } from 'react-intl'

export function SectionHeader({
  total,
  icon,
  type = 'pending',
  component,
}: {
  total: number
  icon?: ReactNode
  type?: 'pending' | 'onRoute' | 'completed' | 'driver'
  component?: ReactNode
}) {
  const { formatMessage: f } = useIntl()
  const {
    palette: { primary, secondary, success, info },
  } = useTheme()

  const borderColorMap: Record<typeof type, string> = {
    pending: primary.main,
    onRoute: info.main,
    completed: secondary.main,
    driver: success.main,
  }

  return (
    <Paper variant="outlined" sx={{ px: 2, py: 1.25 }}>
      <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between">
        <Stack
          spacing={1.5}
          direction="row"
          alignItems="center"
          sx={{
            span: {
              color: borderColorMap[type],
            },
          }}
        >
          {icon ?? (
            <Box
              sx={{
                width: 20,
                height: 20,
                borderColor: borderColorMap[type],
                borderWidth: 2,
                borderStyle: 'solid',
                borderRadius: '50%',
              }}
            />
          )}
          <Typography variant="body1">{f({ id: type })}</Typography>
          <Card sx={{ bgcolor: rgba(borderColorMap[type], 0.5), px: 1 }}>{total}</Card>
        </Stack>
        {component}
      </Stack>
    </Paper>
  )
}
