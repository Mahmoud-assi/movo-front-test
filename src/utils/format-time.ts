import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import localeData from 'dayjs/plugin/localeData'
import isBetween from 'dayjs/plugin/isBetween'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ar'

dayjs.extend(LocalizedFormat)
dayjs.extend(localeData)
dayjs.extend(isBetween)
dayjs.extend(duration)
dayjs.extend(relativeTime)

type DatePickerFormat = Dayjs | Date | string | number | null | undefined

export const formatPatterns = {
  dateTime: 'DD MMM YYYY h:mm a', // 17 Apr 2025 12:00 am
  date: 'DD MMM YYYY', // 17 Apr 2025
  dateShort: 'DD MM YYYY', // 17 4 2025
  time12: 'h:mm a', // 2:30 PM
  time24: 'HH:mm', // 14:30
}

const isValidDate = (date: DatePickerFormat) =>
  date !== null && date !== undefined && dayjs(date).isValid()

// ----------------------------------------------------------------------

/**
 * @output 17 Apr 2022 12:00 am
 */
export function fDateTime(date: DatePickerFormat, template?: keyof typeof formatPatterns): string {
  if (!isValidDate(date)) return 'Invalid date'
  return dayjs(date).format(formatPatterns[template ?? 'dateTime'])
}

/**
 * @output 17 Apr 2022
 */
export function fDate(date: DatePickerFormat, template?: string): string {
  if (!isValidDate(date)) return 'Invalid date'
  return dayjs(date).format(template ?? formatPatterns.date)
}

/**
 * @output a few seconds, 2 years
 */
export function fToNow(date: DatePickerFormat): string {
  if (!isValidDate(date)) return 'Invalid date'
  return dayjs(date).toNow(true)
}
