import {
  useMemo,
  useContext,
  type PropsWithChildren,
  createContext,
  useState,
  useCallback,
} from 'react'
import { IntlProvider } from 'react-intl'
import arMessage from '@/locales/ar.json'
import enMessage from '@/locales/en.json'
import type { LocaleType } from '@/types/custom'
import dayjs from 'dayjs'
import { getStorage, setStorage } from '@/utils/local-storage'

interface AppLocalization {
  locale: LocaleType
  changeLanguage(newLocale: LocaleType): void
}

const LocalizationContext = createContext<AppLocalization>({
  locale: 'ar',
  changeLanguage: () => null,
})

export function LocalizationProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<LocaleType>(getStorage('movo-locale') || 'ar')
  const messages = useMemo(() => (locale === 'ar' ? arMessage : enMessage), [locale])

  const changeLanguage = useCallback(async (newLocale: LocaleType) => {
    setStorage('movo-locale', newLocale)
    setLocale(newLocale)
    dayjs().locale(newLocale)
  }, [])

  return (
    <LocalizationContext.Provider value={{ locale, changeLanguage }}>
      <IntlProvider
        onError={err => {
          if (err.code === 'MISSING_TRANSLATION') return
        }}
        locale={locale}
        messages={messages}
        defaultLocale="ar"
      >
        {children}
      </IntlProvider>
    </LocalizationContext.Provider>
  )
}

export const useLocalization = () => useContext(LocalizationContext)
