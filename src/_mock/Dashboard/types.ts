import type { LocalizedString } from '@/types/custom'

export interface Order {
  orderId: string
  trackId: string
  canceledOrder: number
  paymentMethod: Payment | string
  totalAmount: string
  deliveryTime: string
  estTime: string
  dispatch: boolean
  tags: (Tag | string)[]
  deliveryTimer: string
  status: OrderStatus | string
  translations: {
    customerName: LocalizedString
    restaurant: LocalizedString
    area: LocalizedString
    transType: LocalizedString
    status: LocalizedString
  }
  timePassed?: string
  id?: number
  total?: number
}

export type OrderStatus =
  | 'Pending'
  | 'Accepted'
  | 'Preparing'
  | 'Collecting'
  | 'OutForDelivery'
  | 'Delivered'
  | 'Hold'
  | 'Refund'
  | 'Arrived'

export const OrderStatuses: OrderStatus[] = [
  'Pending',
  'Accepted',
  'Preparing',
  'Collecting',
  'OutForDelivery',
  'Delivered',
  'Hold',
  'Refund',
  'Arrived',
]

export type Payment = 'Fatora' | 'Cash' | 'eCash'

export type Tag = 'VIP' | 'FirstOrder' | 'MovoPlus'

export interface Driver {
  phone: string
  startTime: string
  availability: 'free' | 'busy'
  deliveryStats: {
    delivered: number
    cancelled: number
    rejected: number
    total: number
  }
  orders: Order[]
  translations: {
    name: LocalizedString
    currentStatus: LocalizedString
  }
}
