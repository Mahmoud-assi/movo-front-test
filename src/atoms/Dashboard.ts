import type { Driver } from '@/_mock/Dashboard/types'
import { atom } from 'jotai'

export const DriversAvailabilityAtom = atom<'busy' | 'free'>('free')

export const DriversDataAtom = atom<Driver[]>([])
