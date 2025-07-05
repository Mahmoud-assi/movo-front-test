import type { FilteredResult } from '@/types/custom'
import type { Driver } from './types'

export const driversList: Driver[] = [
  {
    phone: '00963932787851',
    startTime: '2025-07-05T07:00:00Z',
    availability: 'free',
    deliveryStats: {
      delivered: 25,
      cancelled: 2,
      rejected: 1,
      total: 28,
    },
    orders: [
      {
        orderId: '#002162580',
        trackId: 'Mo-67710768',
        canceledOrder: 0,
        paymentMethod: 'Fatora',
        totalAmount: '150.000',
        deliveryTime: '2025-07-05T08:00:00Z',
        estTime: '60',
        dispatch: true,
        tags: ['VIP'],
        deliveryTimer: '00:05:00',
        status: 'Pending',
        translations: {
          customerName: { en: 'Alice Smith', ar: 'أليس سميث' },
          restaurant: { en: 'Sunrise Cafe', ar: 'كافيه الشروق' },
          area: { en: 'Downtown', ar: 'وسط المدينة' },
          transType: { en: 'Movo', ar: 'موفو' },
          status: { en: 'Pending', ar: 'قيد الانتظار' },
        },
      },
    ],
    translations: {
      name: { en: 'Abdul Rahman Al-Taleb', ar: 'عبدالرحمن الطالب' },
      currentStatus: { en: 'Free', ar: 'متاح' },
    },
  },
  {
    phone: '00963932787852',
    startTime: '2025-07-05T06:45:00Z',
    availability: 'busy',
    deliveryStats: {
      delivered: 40,
      cancelled: 5,
      rejected: 3,
      total: 48,
    },
    orders: [
      {
        orderId: '#002162584',
        trackId: 'Mo-67710772',
        canceledOrder: 1,
        paymentMethod: 'Cash',
        totalAmount: '75.250',
        deliveryTime: '2025-07-05T10:00:00Z',
        estTime: '50',
        dispatch: false,
        tags: ['VIP', 'MovoPlus'],
        deliveryTimer: '00:25:00',
        status: 'OutForDelivery',
        translations: {
          customerName: { en: 'Ethan Ford', ar: 'إيثان فورد' },
          restaurant: { en: 'City Lights', ar: 'أضواء المدينة' },
          area: { en: 'Al Baraka', ar: 'البركة' },
          transType: { en: 'Movo', ar: 'موفو' },
          status: { en: 'OutForDelivery', ar: 'خارج للتوصيل' },
        },
      },
    ],
    translations: {
      name: { en: 'Sara Ahmed', ar: 'سارة أحمد' },
      currentStatus: { en: 'Busy', ar: 'مشغول' },
    },
  },
  {
    phone: '00963932787853',
    startTime: '2025-07-05T08:30:00Z',
    availability: 'free',
    deliveryStats: {
      delivered: 18,
      cancelled: 1,
      rejected: 0,
      total: 19,
    },
    orders: [],
    translations: {
      name: { en: 'Mohammed Saleh', ar: 'محمد صالح' },
      currentStatus: { en: 'Free', ar: 'متاح' },
    },
  },
  {
    phone: '00963932787854',
    startTime: '2025-07-05T09:15:00Z',
    availability: 'busy',
    deliveryStats: {
      delivered: 30,
      cancelled: 0,
      rejected: 2,
      total: 32,
    },
    orders: [
      {
        orderId: '#002162582',
        trackId: 'Mo-67710770',
        canceledOrder: 0,
        paymentMethod: 'eCash',
        totalAmount: '120.000',
        deliveryTime: '2025-07-05T09:00:00Z',
        estTime: '30',
        dispatch: true,
        tags: ['MovoPlus'],
        deliveryTimer: '00:15:00',
        status: 'Preparing',
        translations: {
          customerName: { en: 'Charlie Davis', ar: 'تشارلي ديفيس' },
          restaurant: { en: 'Ocean Breeze', ar: 'نسيم البحر' },
          area: { en: 'Al Rashid', ar: 'الرشيد' },
          transType: { en: 'Movo', ar: 'موفو' },
          status: { en: 'Preparing', ar: 'يتم التحضير' },
        },
      },
    ],
    translations: {
      name: { en: 'Laila Nasser', ar: 'ليلى ناصر' },
      currentStatus: { en: 'Busy', ar: 'مشغول' },
    },
  },
  {
    phone: '00963932787855',
    startTime: '2025-07-05T10:00:00Z',
    availability: 'free',
    deliveryStats: {
      delivered: 50,
      cancelled: 4,
      rejected: 0,
      total: 54,
    },
    orders: [],
    translations: {
      name: { en: 'Omar Khaled', ar: 'عمر خالد' },
      currentStatus: { en: 'Free', ar: 'متاح' },
    },
  },
]

export function fetchLocalizedDrivers(): FilteredResult<Driver> {
  return {
    items: driversList,
    totalCount: driversList.length,
  }
}
