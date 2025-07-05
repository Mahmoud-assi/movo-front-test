import routes from '@/router/routes'
import { setFont } from '@/utils/font'
import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function Brand({ expanded }: { expanded: boolean }) {
  return !expanded ? (
    <BrandLogo expanded={expanded} />
  ) : (
    <Box component={AnimatePresence} sx={{ width: '100%' }}>
      <Stack
        direction="row"
        component={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        spacing={1}
        alignItems="center"
      >
        <BrandLogo expanded={expanded} />
        <Movo />
      </Stack>
    </Box>
  )
}

const BrandLogo = ({ expanded }: { expanded: boolean }) => (
  <Box
    component={Link}
    to={routes.dashboard}
    sx={{
      display: { xs: expanded ? 'flex' : 'none', sm: 'flex' },
      px: 2.5,
      py: 2.25,
      userSelect: 'none',
    }}
  >
    <Box
      component="img"
      src="/movo.svg"
      alt="omt"
      sx={{
        width: 40,
        height: 40,
      }}
    />
  </Box>
)

const Movo = () => (
  <Box component={Link} to={routes.dashboard} sx={{ textDecoration: 'none' }}>
    <Typography
      component={motion.div}
      variant="h2"
      initial={{ backgroundPosition: '0% 50%' }}
      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
      transition={{
        duration: 4,
        ease: 'easeInOut',
        repeat: Infinity,
      }}
      sx={({ palette: { primary } }) => ({
        color: 'transparent',
        width: '100%',
        background: `linear-gradient(270deg, ${primary.light}, ${primary.dark}, ${primary.light})`,
        backgroundSize: '200% 200%',
        backgroundClip: 'text',
        fontFamily: setFont('Roboto'),
      })}
    >
      movo
    </Typography>
  </Box>
)
