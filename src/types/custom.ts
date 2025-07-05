import type { ReactElement } from 'react'

export type LocaleType = 'ar' | 'en'

export type ThemeMode = 'light' | 'dark'

export type SidebarMode = 'top' | 'side' | 'closed'

export interface SidebarItem {
  title: string
  icon?: string | ReactElement
  index?: boolean
  url?: string
  children?: SidebarItem[]
}

export interface GenericObject<T = any> {
  [key: string]: T
}

export interface FilteredResult<T = any> {
  items: T[]
  totalCount: number
}

export type Coordinates = { lat: number; lng: number }

export type LocalizedString = {
  en: string
  ar: string
}

export interface LabelValue<T = any> {
  label?: string
  value: T
}
