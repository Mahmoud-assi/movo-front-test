import { IconButton } from '@mui/material'
import { useAppTheme } from '@/providers'
import { Icon } from '@/components/Shared/ColoredSvg'
import { motion, AnimatePresence } from 'framer-motion'
import { useMemo } from 'react'

export function LocaleSwitcher() {
  const { mode, toggleTheme } = useAppTheme()
  const isDark = useMemo(() => mode === 'dark', [mode])
  const iconKey = useMemo(() => (isDark ? 'moon' : 'sun'), [isDark])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={iconKey}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.15 }}
      >
        <IconButton
          onClick={toggleTheme}
          sx={{
            bgcolor: isDark ? 'grey.200' : 'grey.300',
            transition: 'background-color 0.3s ease',
            '&:hover': {
              bgcolor: isDark ? 'grey.300' : 'grey.400',
            },
            span: {
              width: 18,
              height: 18,
              color: 'common.black',
              transition: 'color 0.3s ease',
            },
          }}
        >
          {Icon(iconKey, 'appbar')}
        </IconButton>
      </motion.div>
    </AnimatePresence>
  )
}
