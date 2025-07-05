import { LocalizationProvider, ThemeProvider } from '@/providers'
import type { PropsWithChildren } from 'react'

function App({ children }: PropsWithChildren) {
  return (
    <LocalizationProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </LocalizationProvider>
  )
}

export default App
