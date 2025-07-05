import { rgba } from '@/utils/color'
import { LinearProgress, linearProgressClasses, Stack } from '@mui/material'
import { motion } from 'framer-motion'

export function PageLoading() {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      component={motion.div}
      minHeight="75dvh"
      height="100%"
      width="100%"
      spacing={2}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <LinearProgress
        sx={{
          width: 1,
          maxWidth: 320,
          bgcolor: ({ palette }) => rgba(palette.text.primary, 0.16),
          [`& .${linearProgressClasses.bar}`]: { bgcolor: 'primary.light' },
        }}
      />
    </Stack>
  )
}
