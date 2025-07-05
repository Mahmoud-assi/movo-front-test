import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import globalStyles from '@/theme/global'
import { theme } from '@/theme'
import type { SidebarMode, ThemeMode } from '@/types/custom'
import { useCallback, useState, type PropsWithChildren, createContext, useContext } from 'react'
import { useLocalization } from './Localization'
import { CacheProvider, Global } from '@emotion/react'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import rtlPlugin from 'stylis-plugin-rtl'
import { getStorage, setStorage } from '@/utils/local-storage'

const cacheRTL = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
})

const cache = createCache({
  key: 'mui',
  stylisPlugins: [prefixer],
})

interface AppTheme {
  toggleTheme(): void
  toggleSidebar(mode: SidebarMode): void
  mode: ThemeMode
  sidebarMode: SidebarMode
  expanded: boolean
}

const ThemeContext = createContext<AppTheme>({
  toggleTheme: () => {},
  toggleSidebar: () => {},
  mode: 'light',
  sidebarMode: 'closed',
  expanded: false,
})

export function ThemeProvider({ children }: PropsWithChildren) {
  const storage = getStorage('movo-theme') as { mode: ThemeMode; sidebarMode: SidebarMode }
  const { locale } = useLocalization()
  const [mode, setMode] = useState<ThemeMode>((storage.mode as ThemeMode) || 'dark')
  const [sidebarMode, setSidebarMode] = useState<SidebarMode>(storage.sidebarMode || 'closed')

  const toggleTheme = useCallback(() => {
    const newMode = mode === 'light' ? 'dark' : 'light'
    setMode(newMode)
    setStorage('movo-theme', { ...storage, mode: newMode })
  }, [mode])

  const toggleSidebar = useCallback((newMode: SidebarMode) => {
    setSidebarMode(newMode)
    setStorage('movo-theme', { ...storage, sidebarMode: newMode })
  }, [])

  return (
    <CacheProvider value={locale === 'ar' ? cacheRTL : cache}>
      <ThemeContext.Provider
        value={{
          toggleTheme,
          toggleSidebar,
          sidebarMode,
          mode,
          expanded: sidebarMode === 'side',
        }}
      >
        <MuiThemeProvider theme={theme(mode, locale)}>
          <CssBaseline />
          <Global styles={globalStyles(theme(mode, locale), locale)} />
          {children}
        </MuiThemeProvider>
      </ThemeContext.Provider>
    </CacheProvider>
  )
}

export const useAppTheme = () => useContext(ThemeContext)
