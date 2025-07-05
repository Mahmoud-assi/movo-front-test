import type { LabelValue } from '@/types/custom'
import {
  Stack,
  type StackProps,
  type SxProps,
  type Theme,
  Typography,
  typographyClasses,
} from '@mui/material'

const InfoItem = ({
  label,
  value,
  direction = 'column',
  sx,
  ...props
}: LabelValue & { direction?: StackProps['direction']; sx?: SxProps<Theme> } & StackProps) => (
  <Stack
    direction={direction}
    spacing={props.spacing ?? 0.5}
    justifyContent="space-between"
    alignItems="center"
    overflow="hidden"
    sx={{
      ...sx,
      [`.${typographyClasses.body2}`]: {
        fontSize: 12,
      },
    }}
    {...props}
  >
    <Typography variant="body2" sx={{ color: 'text.secondary', minWidth: 'max-content' }}>
      {label}
    </Typography>
    <Typography variant="body2" sx={{ color: 'text.primary', wordBreak: 'break-all' }}>
      {value}
    </Typography>
  </Stack>
)

export default InfoItem
